
var courseApi = 'http://localhost:3000/courses';


function start() {
    getCourses(renderCourses);

    handleCreateForm();
}


start();

//functions
function getCourses(callback) {
    fetch(courseApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback);    
}

function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(courseApi, options)
        .then(function(response) {
            response.json();
        })
        .then(callback);

}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector("#list-courses");
    var htmls =courses.map(function(course) {
        return `
            
                <h4>${course.name}: </h4> 
                <p>${course.mota}</p>
        `;
    });
    listCoursesBlock.innerHTML = htmls.join('');

}
function handleCreateForm() {
    var createBtn = document.querySelector('#create');
    
    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value
        var mota = document.querySelector('textarea[name="mota"]').value
        
        var formData = {
            name: name,
            mota: mota
        };
        createCourse(formData, function() {
            getCourses(renderCourses);

        });
    }

}


