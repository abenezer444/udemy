import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from './course.model';

@Injectable()
export class CourseService {
  constructor(@InjectModel('Course') private readonly courseModel: Model<Course>) {}

  async getAllCourses(): Promise<Course[]> {
    return this.courseModel.find().exec();
  }

  async getCourseById(courseId: string): Promise<Course> {
    const course = await this.courseModel.findById(courseId).exec();
    if (!course) {
      throw new NotFoundException('Course not found');
    }
    return course;
  }

  async updateCourse(courseId: string, courseData: Course): Promise<Course> {
    const existingCourse = await this.courseModel.findByIdAndUpdate(courseId, courseData, { new: true }).exec();
    if (!existingCourse) {
      throw new NotFoundException('Course not found');
    }
    return existingCourse;
  }

  async createCourse(courseData: Course): Promise<Course> {
    const createdCourse = new this.courseModel(courseData);
    return createdCourse.save();
  }
}
