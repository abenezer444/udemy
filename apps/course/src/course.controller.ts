import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { CourseService } from './course.service';
import { Course } from './course.model'; // Assuming you have defined the Course model

@Controller('courses') // Base route for the controller
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  getAllCourses(): Promise<Course[]> {
    return this.courseService.getAllCourses();
  }

  @Get(':id')
  getCourseById(@Param('id') courseId: string): Promise<Course> {
    return this.courseService.getCourseById(courseId);
  }

  @Put(':id')
  updateCourse(@Param('id') courseId: string, @Body() courseData: Course): Promise<Course> {
    return this.courseService.updateCourse(courseId, courseData);
  }

  @Post()
  createCourse(@Body() courseData: Course): Promise<Course> {
    return this.courseService.createCourse(courseData);
  }
}
