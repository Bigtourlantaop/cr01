import Course from "./course.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course) 
    private coursesRepository: Repository<Course>
) {}

    async findAll(): Promise<Course[]> {
      return this.coursesRepository.find();
    }
}