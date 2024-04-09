import { Course } from "./interfaces/course.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CoursesService {
    async findAll(): Promise<Course[]> {
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
    }
}