const courseProgress = {
    user_id: "1",
    courses: [
        {
            course_id: "101",
            completed: true,
            module_progress: [
                "1", "2", "3", "4"
            ],
            completed_at: new Date()
        },
        {
            course_id: "102",
            completed: false,
            module_progress: [
                "1", "2"
            ],
            completed_at: null
        }
    ]
}


function checkCompletion(courseProgress){
    return courseProgress.courses.filter(course => !course.completed);
}

function getModules(courseProgress, courseId){
    const course = courseProgress.courses.find((course) => course.course_id === courseId);
    return course ? course.module_progress : null;
    
}

const modules = getModules(courseProgress, "101");
const completed = checkCompletion(courseProgress)

console.log(completed);
console.log(modules);

