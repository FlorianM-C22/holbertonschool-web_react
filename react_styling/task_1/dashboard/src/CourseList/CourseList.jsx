import React from 'react'
import CourseListRow from './CourseListRow'
import WithLogging from '../HOC/WithLogging'

class CourseList extends React.Component {
  render() {
    const { courses = [] } = this.props
    return (
      <div className="courses mx-auto w-4/5">
        <table id="CourseList" className="w-full">
          {courses.length > 0 ? (
            <>
              <thead>
                <CourseListRow isHeader={true} textFirstCell="Available courses" />
                <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
              </thead>
              <tbody>
                {courses.map(course => (
                  <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />
                ))}
              </tbody>
            </>
          ) : (
            <tbody>
              <CourseListRow isHeader={true} textFirstCell="No course available yet" />
            </tbody>
          )}
        </table>
      </div>
    )
  }
}

const CourseListWithLogging = WithLogging(CourseList)
export default CourseListWithLogging
