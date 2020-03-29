export default [
    {
        number: 0,
        page: 0,
        question: "What year are you in college?",
        type: "radio",
        data: [
            { label: "1st Year", value: "1st Year" },
            { label: "2nd Year", value: "2nd Year" },
            { label: "3rd Year", value: "3rd Year" },
            { label: "4th Year", value: "4th Year" },
            { label: "Past 4th Year", value: "Past 4th Year" },
            { label: "Masters", value: "Masters" },
            { label: "PhD", value: "PhD" },
            { label: "N/A", value: "N/A" }
        ]
    },
    {
        number: 1,
        page: 0,
        question: "What is your major?",
        type: "radio",
        data: [
            { label: "Computer Science", value: "Computer Science" },
            {
                label: "Information Technology",
                value: "Information Technology"
            },
            { label: "Computer Engineering", value: "Computer Engineering" },
            {
                label: "Management Information Systems",
                value: "Management Information Systems"
            },
            {
                label: "Mechanical Engineering",
                value: "Mechanical Engineering"
            },
            {
                label: "Electrical Engineering",
                value: "Electrical Engineering"
            },
            { label: "Physics", value: "Physics" },
            { label: "IoT", value: "IoT" },
            { label: "Mathematics", value: "Mathematics" },
            { label: "Other", value: "Other" }
        ]
    },
    {
        number: 2,
        page: 1,
        question: "Which of the following areas are you interested in?",
        helperText: "Mark all that apply",
        type: "checkbox",
        data: [
            { label: "Software Programming", value: "Software Programming" },
            { label: "Program Management", value: "Program Management" },
            { label: "Cyber Security", value: "Cyber Security" },
            {
                label: "Artificial Intelligence",
                value: "Artificial Intelligence"
            },
            { label: "Hardware Programming", value: "Hardware Programming" },
            { label: "Robotics", value: "Robotics" },
            { label: "Database Development", value: "Database Development" },
            { label: "Advanced User Support", value: "Advanced User Support" },
            { label: "Networking", value: "Networking" },
            { label: "UI/UX", value: "UI/UX" },
            { label: "Other", value: "Other" }
        ]
    },
    {
        number: 3,
        page: 1,
        question: "Are you seeking a/an..",
        type: "radio",
        data: [
            { label: "Internship", value: "Internship" },
            { label: "Full-Time Position", value: "Full-Time Position" },
            { label: "Part-Time Position", value: "Part-Time Position" },
            { label: "Research", value: "Research" }
        ]
    },
    {
        number: 4,
        page: 1,
        question:
            "Are there any companies you are particularly interested in landing a full-time position or internship with?",
        helperText: "Mark all that apply",
        type: "checkbox",
        data: [
            { label: "Google", value: "Google" },
            { label: "Cisco", value: "Cisco" },
            { label: "Adobe", value: "Adobe" },
            { label: "Facebook", value: "Facebook" },
            { label: "Nike", value: "Nike" },
            { label: "Uber", value: "Uber" },
            { label: "Microsoft", value: "Microsoft" },
            { label: "NASA", value: "NASA" },
            { label: "Lyft", value: "Lyft" },
            { label: "Amazon", value: "Amazon" },
            { label: "Twitter", value: "Twitter" },
            { label: "Dell", value: "Dell" },
            { label: "Apple", value: "Apple" },
            { label: "Salesforce", value: "Salesforce" },
            { label: "Nvidia", value: "Nvidia" },
            { label: "Ultimate Software", value: "Ultimate Software" },
            { label: "Intel", value: "Intel" },
            { label: "LinkedIn", value: "LinkedIn" },
            { label: "Citrix", value: "Citrix" },
            { label: "IBM", value: "IBM" },
            { label: "Other", value: "Other" }
        ],
        row: true
    },
    {
        number: 5,
        page: 2,
        question:
            "Which of the following experiences do you have with respect to computing?",
        helperText: "Mark all that apply",
        type: "checkbox",
        data: [
            { label: "Industry Internship", value: "Industry Internship" },
            { label: "Research Experience", value: "Research Experience" },
            { label: "Personal Projects", value: "Personal Projects" },
            { label: "Shadowing Experience", value: "Shadowing Experience" },
            {
                label: "Full-Time Job Experience",
                value: "Full-Time Job Experience"
            },
            { label: "Internship/Job Offers", value: "Internship/Job Offers" },
            { label: "Mentoring student(s)", value: "Mentoring student(s)" },
            {
                label: "Being mentored by other student(s)",
                value: "Being mentored by other student(s)"
            },
            {
                label: "Being part of a computing group, club, etc",
                value: "Being part of a computing group, club, etc"
            },
            {
                label: "Attending a symposia or other computing events",
                value: "Attending a symposia or other computing events"
            },
            {
                label: "Attending social events organized by the department",
                value: "Attending social events organized by the department"
            },
            {
                label: "Attending a computing conference",
                value: "Attending a computing conference"
            },
            {
                label: "Presenting work to other students (not classwork)",
                value: "Presenting work to other students (not classwork)"
            },
            {
                label: "Networking with industry and other professionals",
                value: "Networking with industry and other professionals"
            },
            {
                label: "Interacting with students in different year(s)",
                value: "Interacting with students in different year(s)"
            },
            { label: "None", value: "None" }
        ]
    },
    {
        number: 6,
        page: 2,
        question: "How do you learn technical material best?",
        helperText: "Mark all that apply",
        type: "checkbox",
        data: [
            { label: "Peers", value: "Peers" },
            {
                label: "Teaching or Learning Assistants",
                value: "Teaching or Learning Assistants"
            },
            { label: "Faculty/Instructors", value: "Faculty/Instructors" },
            {
                label:
                    "Online Courses (LinkedIn Learning, LeetCode, Khan Academy, Code.org, etc)",
                value:
                    "Online Courses (LinkedIn Learning, LeetCode, Khan Academy, Code.org, etc)"
            },
            { label: "Reading", value: "Reading" },
            { label: "Videos", value: "Videos" },
            { label: "Personal Projects", value: "Personal Projects" },
            { label: "Hackathons", value: "Hackathons" },
            { label: "Class Assignments", value: "Class Assignments" },
            { label: "Class Lectures", value: "Class Lectures" },
            {
                label: "Campus workshops by clubs and organizations on campus",
                value: "Campus workshops by clubs and organizations on campus"
            },
            { label: "Other", value: "Other" }
        ]
    },
    {
        number: 7,
        page: 2,
        question: "Do you currently have an active...",
        type: "checkbox",
        data: [
            { label: "GitHub", value: "GitHub" },
            { label: "LinkedIn", value: "LinkedIn" },
            { label: "Personal Website", value: "Personal Website" },
            { label: "LeetCode Account", value: "LeetCode Account" },
            { label: "HackerRank Account", value: "HackerRank Account" },
            { label: "None of the above", value: "None of the above" }
        ]
    },
    {
        number: 8,
        page: 2,
        question: "About how many technical interviews have you done?",
        type: "radio",
        data: [
            { label: "0", value: "0" },
            { label: "1-3", value: "1-3" },
            { label: "4-6", value: "4-6" },
            { label: "7-9", value: "7-9" },
            { label: "10+", value: "10+" }
        ],
        row: true
    },
    {
        number: 9,
        page: 2,
        question: "How many offers have you received?",
        type: "radio",
        data: [
            { label: "0", value: "0" },
            { label: "1-3", value: "1-3" },
            { label: "4-6", value: "4-6" },
            { label: "7-9", value: "7-9" },
            { label: "10+", value: "10+" }
        ],
        row: true
    }
];
