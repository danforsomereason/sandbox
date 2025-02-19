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

const module1 = "672f672a68943dafe296f652";
const module2 = "6732295c891408a0380f30ff";
const module3 = "6732575886a354acf681b22c";
const module4 = "6732597d86a354acf681b22d";



function checkCompletion(courseProgress){
    return courseProgress.courses.filter(course => !course.completed);
}

function getModules(courseProgress, courseId){
    const course = courseProgress.courses.find((course) => course.course_id === courseId);
    return course ? course.module_progress : null;
}

function updateCourseProgress(courseProgress, modules, id, completed = false){
    let moduleArray = [];
    let idNumber = "";
    let completedStatus = completed;
    
    for(let module of modules){
        moduleArray.push(module)
    }
    console.log(moduleArray);
    idNumber += id;
    const newEntry = {
        course_id: idNumber,
        completed: completedStatus,
        module_progress: moduleArray,
        completed_at: completed ? new Date() : null
    }
    courseProgress.courses.push(newEntry);
    return newEntry;
}

const addedProgress = updateCourseProgress(courseProgress, ["121212", "21313"], "103");
const modules = getModules(courseProgress, "101");
const completed = checkCompletion(courseProgress)

// console.log(completed);
// console.log(modules);
console.log(addedProgress);

console.log(courseProgress);

