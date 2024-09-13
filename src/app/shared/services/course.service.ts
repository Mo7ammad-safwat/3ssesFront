import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { Course } from '../interface/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private apollo: Apollo) {}

  getCourses(): Observable<Course[]> {
    return this.apollo
      .watchQuery<{ courses: Course[] }>({
        query: gql`
          query getCourses($page: Int, $limit: Int) {
            courses(page: $page, limit: $limit) {
              courses {
                id
                title
                description
                instructor {
                  fullName
                  email
                }
              }
              totalPages
              currentPage
            }
          }
        `,
        variables: {
          page: 1,
          limit: 10,
        },
      })
      .valueChanges.pipe(map((result: any) => result?.data?.courses?.courses));
  }
}
