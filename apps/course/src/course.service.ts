import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from './course.model';
import { Teacher } from './teacher.model';
import { Student } from './student.model';

@Injectable()
export class CourseService {
  constructor(@InjectModel('Course') private readonly courseModel: Model<Course>) {}

  async getAllCourses(): Promise<Course[]> {
    return this.courseModel.find().exec();
  }

  async getCourseTeacher(courseId: string): Promise<Teacher> {
    const course = await this.courseModel.findById(courseId).exec();
    return course.teacher;
  }

  async getCourseStudents(courseId: string): Promise<Student[]> {
    const course = await this.courseModel.findById(courseId).exec();
    return course.students;
  }

  async createCourse(courseData: Course): Promise<Course> {
    const createdCourse = new this.courseModel(courseData);
    return createdCourse.save();
  }
}
