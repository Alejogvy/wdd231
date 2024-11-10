// courses.js
const courses = [
    { code: "CSE 210", name: "Programming with Classes", credits: 3, category: "CSE", completed: false },
    { code: "GS 170", name: "Introduction to Software Development", credits: 2, category: "GS", completed: false },
    { code: "WDD 231", name: "Web Frontend Development I", credits: 3, category: "WDD", completed: true },
    // Add more courses if necessary
];

function displayCourses(courseList) {
    const courseContainer = document.getElementById("courseList");
    courseContainer.innerHTML = ""; // Clear previous content

    let totalCredits = 0;
    courseList.forEach(course => {
        const courseButton = document.createElement("button");
        courseButton.textContent = `${course.code} - ${course.name} (${course.credits} credits)`;
        courseButton.className = course.category.toLowerCase();
        
        // Different style if the course is completed
        courseButton.style.backgroundColor = course.completed ? "#4caf50" : "#8b4513";
        
        courseContainer.appendChild(courseButton);
        totalCredits += course.credits;
    });

    document.getElementById("totalCredits").textContent = totalCredits;
}

// Filter courses by category
function filterCourses(category) {
    const filteredCourses = category === "all"
        ? courses
        : courses.filter(course => course.category === category);
    displayCourses(filteredCourses);
}

// Initialize with all courses
displayCourses(courses);
