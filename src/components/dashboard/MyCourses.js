import React, { useState } from "react";
import data from "./data.json";

const MyCourses = () => {
  const [courses, setCourses] = useState(data.courses);
  const [editingCourse, setEditingCourse] = useState(null);
  const [courseDetails, setCourseDetails] = useState({
    courseId: "",
    name: "",
    description: "",
    typeAsDisplayString: "",
    durationAsDisplayString: "",
    price: "",
  });

  const deleteCourse = (id) => {
    setCourses(courses.filter((course) => course.courseId !== id));
  };

  const editCourse = (course) => {
    setEditingCourse(course.courseId);
    setCourseDetails(course);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseDetails({ ...courseDetails, [name]: value });
  };

  const saveCourse = () => {
    const updatedCourses = courses.map((course) =>
      course.courseId === courseDetails.courseId ? courseDetails : course
    );
    setCourses(updatedCourses);
    setEditingCourse(null);
    setCourseDetails({
      courseId: "",
      name: "",
      description: "",
      typeAsDisplayString: "",
      durationAsDisplayString: "",
      price: "",
    });
  };

  return (
    <>
     <h1 className="p-2 font-bold text-xl">My Courses</h1>
     <div className="overflow-scroll h-[75vh] md:h-[89vh] grid grid-cols-1 md:grid-cols-2 gap-5 pr-4">
      {courses.map((course) => (
        <div key={course.courseId} className="course-item p-4 border gap-2 rounded-md mb-4 shadow shadow-lg flex flex-col">
          {editingCourse === course.courseId ? (
            <div className="flex flex-col">
              <input
                type="text"
                name="typeAsDisplayString"
                value={courseDetails.typeAsDisplayString}
                onChange={handleChange}
                placeholder="Type"
                className="border rounded p-1 mb-2"
              />
              <input
                type="text"
                name="description"
                value={courseDetails.description}
                onChange={handleChange}
                placeholder="Description"
                className="border rounded p-1 mb-2"
              />
              <input
                type="text"
                name="durationAsDisplayString"
                value={courseDetails.durationAsDisplayString}
                onChange={handleChange}
                placeholder="Duration"
                className="border rounded p-1 mb-2"
              />
              <input
                type="text"
                name="price"
                value={courseDetails.price}
                onChange={handleChange}
                placeholder="Price"
                className="border rounded p-1 mb-2"
              />
              <div className="btns flex">
              <button className="text-green-500" onClick={saveCourse}>
                Save
              </button>
              <button className="text-red-500 ml-4" onClick={() => setEditingCourse(null)}>
                Cancel
              </button>
              </div>
            </div>
          ) : (
            <>
              <h3 className="text-lg font-bold">{course.typeAsDisplayString}</h3>
              <p>{course.description}</p>
              <p className="bg-yellow-400 rounded-lg text-center text-black p-1 w-20 font-semibold">{course.durationAsDisplayString}</p>
              <p>{course.price}</p>
              <div className="actions mt-2">
                <button className="text-blue-500 mr-4" onClick={() => editCourse(course)}>
                  Edit
                </button>
                <button className="text-red-500" onClick={() => deleteCourse(course.courseId)}>
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
    </>
   
  );
};

export default MyCourses;
