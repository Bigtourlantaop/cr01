import Course from "./entities/course.entity";
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
      /*
        return [
            { id: '100',
              number: '01204111',
              title: 'Computer and Programming'
            },
            { id: '213fds',
              number: '01204211',
              title: 'Discrete mathematics and linear algebra'
            },
            { id: 'fljdksjfoiwr',
              number: '01204313',
              title: 'Design and analysis of algorithms'
            },
          ];
    */
    }
}