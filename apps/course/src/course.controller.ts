import { Controller, Get, Post, Body } from '@nestjs/common';
import { CourseService } from './course.service';
import { Course } from './course.model'; // Assuming you have defined the Course model

@Controller('courses') // Base route for the controller
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  getAllCourses(): Promise<Course[]> {
    return this.courseService.getAllCourses();
  }

  @Get(':id/teacher')
  getCourseTeacher(@Param('id') courseId: string): Promise<Teacher> {
    return this.courseService.getCourseTeacher(courseId);
  }

  @Get(':id/students')
  getCourseStudents(@Param('id') courseId: string): Promise<Student[]> {
    return this.courseService.getCourseStudents(courseId);
  }

  @Post()
  createCourse(@Body() courseData: Course): Promise<Course> {
    return this.courseService.createCourse(courseData);
  }
}
