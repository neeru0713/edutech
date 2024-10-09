import React, { useState } from "react";

const MyCourses = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "React for Beginners",
      description: "Learn React from scratch.",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      description: "Deep dive into JavaScript.",
    },
  ]);

  const deleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <div>
     

      {courses.map((course) => (
        <div key={course.id} className="course-item p-4 border rounded-md mb-4">
          <h3 className="text-lg font-bold">{course.title}</h3>
          <p>{course.description}</p>
          <div className="actions mt-2">
            <button className="text-blue-500 mr-4">Edit</button>
            <button
              className="text-red-500"
              onClick={() => deleteCourse(course.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCourses;
