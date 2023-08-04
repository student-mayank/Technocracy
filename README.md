
# API Endpoints

1. https://technocraccy.onrender.com/get_students
     
     return a list of all the students studying in the college.

2. https://technocraccy.onrender.com/enrolled 

    return the names of those students who are enrolled in at least one course.

3.    https://technocraccy.onrender.com/student/201

Returns the details of the student with roll = 201

4. https://technocraccy.onrender.com/gg_group
return the names and roll numbers of those students who have attendance <= 30.

5. https://technocraccy.onrender.com/courses/c1
let's say x = c1roll number then it will return the s of those students who are enrolled in course c1.
Example: /course/c1 -> Returns the roll numbers of those students who are enrolled in course c1.

# Database

MongoDB atlas stores the data which is accessed by server.

sample data stored:

{
    "students": [
        {
            "name": "User 1",
            "roll": "200",
            "courses_enrolled": ["c1", "c2", "c3"],
            "total_attendance": 100
        },
        {
            "name": "User 2",
            "roll": "201",
            "courses_enrolled": ["c2", "c3"],
            "total_attendance": 50
        },
        {
            "name": "User 3",
            "roll": "202",
            "courses_enrolled": ["c1", "c3"],
            "total_attendance": 75
        },
        {
            "name": "User 4",
            "roll": "203",
            "courses_enrolled": [],
            "total_attendance": 20
        },
        {
            "name": "User 5",
            "roll": "204",
            "courses_enrolled": ["c3"],
            "total_attendance": 30
        }
    ]
}
