import { Schema, model, Document } from 'mongoose';

// Teacher subdocument schema
interface Teacher {
  id: string;
  name: string;
  email: string;
}

// Student subdocument schema
interface Student {
  id: string;
  name: string;
  email: string;
}

// Course document schema
interface CourseDoc extends Document {
  title: string;
  description: string;
  teacher: Teacher;
  students: Student[];
  // Add more fields as needed
}

const CourseSchema = new Schema<CourseDoc>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  teacher: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true }
  },
  students: [{
    id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true }
  }],
  // Add more fields here
});

const CourseModel = model<CourseDoc>('Course', CourseSchema);

export default CourseModel;
