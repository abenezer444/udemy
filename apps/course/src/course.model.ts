import { Schema, model, Document } from 'mongoose';

// Define the Lesson subdocument schema
interface Lesson {
  title: string;
  content: string;
}

// Define the Course document schema
interface CourseDoc extends Document {
  authorId: string; // Author's ID
  name: string;
  description: string;
  students: string[]; // List of student IDs
  lessons: Lesson[]; // Array of lessons
}

const LessonSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
});

const CourseSchema = new Schema<CourseDoc>({
  authorId: { type: Schema.Types.ObjectId, required: true }, // Assuming authorId is a Mongoose ObjectId
  name: { type: String, required: true },
  description: { type: String, required: true },
  students: [{ type: Schema.Types.ObjectId, ref: 'Student' }], // Assuming student is another model
  lessons: [LessonSchema] // Array of Lesson subdocuments
});

const CourseModel = model<CourseDoc>('Course', CourseSchema);

export default CourseModel;
