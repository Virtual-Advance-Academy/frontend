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
        ],
        required: true
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
        ],
        required: true
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
        ],
        required: true
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
        ],
        required: true
    },
    {
        number: 4,
        page: 1,
        question:
            "Are there any companies you are particularly interested in landing a full-time position or internship with?",
        helperText: "Mark all that apply",
        grid: true,
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
        row: true,
        required: true
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
        ],
        required: true
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
        ],
        required: true
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
        ],
        required: true
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
        row: true,
        required: true
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
        row: true,
        required: true
    },
    {
        number: 10,
        page: 3,
        question: "With technical interviews, to what extent do you...",
        type: "matrix",
        header: ["Not at all", "", "Neutral", "", "Very Much So"],
        data: [
            {
                question:
                    "... feel prepared to succeed on a technical phone interview?",
                type: "radio",
                data: [
                    { label: "", value: "1" },
                    { label: "", value: "2" },
                    { label: "", value: "3" },
                    { label: "", value: "4" },
                    { label: "", value: "5" }
                ]
            },
            {
                question:
                    "... feel prepared to succeed on a technical in person interview?",
                type: "radio",
                data: [
                    { label: "", value: "1" },
                    { label: "", value: "2" },
                    { label: "", value: "3" },
                    { label: "", value: "4" },
                    { label: "", value: "5" }
                ]
            },
            {
                question: "... feel confident to explain your logic?",
                type: "radio",
                data: [
                    { label: "", value: "1" },
                    { label: "", value: "2" },
                    { label: "", value: "3" },
                    { label: "", value: "4" },
                    { label: "", value: "5" }
                ]
            },
            {
                question:
                    "... feel prepared to whiteboard a technical problem?",
                type: "radio",
                data: [
                    { label: "", value: "1" },
                    { label: "", value: "2" },
                    { label: "", value: "3" },
                    { label: "", value: "4" },
                    { label: "", value: "5" }
                ]
            },
            {
                question: "... feel prepared for an online coding challenge?",
                type: "radio",
                data: [
                    { label: "", value: "1" },
                    { label: "", value: "2" },
                    { label: "", value: "3" },
                    { label: "", value: "4" },
                    { label: "", value: "5" }
                ]
            },
            {
                question:
                    "... feel prepared to pseudocode an a technical problem?",
                type: "radio",
                data: [
                    { label: "", value: "1" },
                    { label: "", value: "2" },
                    { label: "", value: "3" },
                    { label: "", value: "4" },
                    { label: "", value: "5" }
                ]
            }
        ],
        required: true
    },
    {
        number: 11,
        page: 3,
        question: "With behavioral interviews, to what extent do you..",
        type: "matrix",
        header: ["Not at all", "", "Neutral", "", "Very Much So"],
        data: [
            {
                question:
                    "... feel prepared to succeed on a behavioral phone interview",
                type: "radio",
                data: [
                    { label: "", value: "1" },
                    { label: "", value: "2" },
                    { label: "", value: "3" },
                    { label: "", value: "4" },
                    { label: "", value: "5" }
                ]
            },
            {
                question:
                    "... feel prepared to succeed on a behavioral in person interview?",
                type: "radio",
                data: [
                    { label: "", value: "1" },
                    { label: "", value: "2" },
                    { label: "", value: "3" },
                    { label: "", value: "4" },
                    { label: "", value: "5" }
                ]
            },
            {
                question: "... feel confident to pitch yourself?",
                type: "radio",
                data: [
                    { label: "", value: "1" },
                    { label: "", value: "2" },
                    { label: "", value: "3" },
                    { label: "", value: "4" },
                    { label: "", value: "5" }
                ]
            },
            {
                question:
                    "... feel prepared to explain in detail your previous technical projects/experience?",
                type: "radio",
                data: [
                    { label: "", value: "1" },
                    { label: "", value: "2" },
                    { label: "", value: "3" },
                    { label: "", value: "4" },
                    { label: "", value: "5" }
                ]
            },
            {
                question:
                    "... feel prepared to answer a tell me a time when question?",
                type: "radio",
                data: [
                    { label: "", value: "1" },
                    { label: "", value: "2" },
                    { label: "", value: "3" },
                    { label: "", value: "4" },
                    { label: "", value: "5" }
                ]
            }
        ],
        required: true
    },
    {
        number: 12,
        page: 4,
        question: "With the application process, to what extent do you..",
        type: "matrix",
        header: ["Not at all", "", "Neutral", "", "Very Much So"],
        data: [
            {
                question:
                    "... know where to find internships/full-time jobs online?",
                type: "radio",
                data: [
                    { label: "", value: "1" },
                    { label: "", value: "2" },
                    { label: "", value: "3" },
                    { label: "", value: "4" },
                    { label: "", value: "5" }
                ]
            },
            {
                question:
                    "... know where to find internships/full-time jobs in-person?",
                type: "radio",
                data: [
                    { label: "", value: "1" },
                    { label: "", value: "2" },
                    { label: "", value: "3" },
                    { label: "", value: "4" },
                    { label: "", value: "5" }
                ]
            },
            {
                question:
                    "... what to put on your resume (cover letter, resume, portfolio, etc)?",
                type: "radio",
                data: [
                    { label: "", value: "1" },
                    { label: "", value: "2" },
                    { label: "", value: "3" },
                    { label: "", value: "4" },
                    { label: "", value: "5" }
                ]
            }
        ],
        required: true
    },
    {
        number: 13,
        page: 4,
        question: "With the application process, to what extent do you..",
        type: "matrix",
        header: ["Not at all", "", "Neutral", "", "Very Much So"],
        data: [
            {
                question:
                    "... know where to find internships/full-time jobs online?",
                type: "radio",
                data: [
                    { label: "", value: "1" },
                    { label: "", value: "2" },
                    { label: "", value: "3" },
                    { label: "", value: "4" },
                    { label: "", value: "5" }
                ]
            },
            {
                question:
                    "... know where to find internships/full-time jobs in-person?",
                type: "radio",
                data: [
                    { label: "", value: "1" },
                    { label: "", value: "2" },
                    { label: "", value: "3" },
                    { label: "", value: "4" },
                    { label: "", value: "5" }
                ]
            },
            {
                question:
                    "... what to put on your resume (cover letter, resume, portfolio, etc)?",
                type: "radio",
                data: [
                    { label: "", value: "1" },
                    { label: "", value: "2" },
                    { label: "", value: "3" },
                    { label: "", value: "4" },
                    { label: "", value: "5" }
                ]
            }
        ],
        required: true
    },
    {
        number: 14,
        page: 5,
        question: "With networking to what extent do you..",
        type: "matrix",
        header: ["Not at all", "", "Neutral", "", "Very Much So"],
        data: [
            {
                question:
                    "... know how to network with the tech community beyond your university?",
                type: "radio",
                data: [
                    { label: "", value: "1" },
                    { label: "", value: "2" },
                    { label: "", value: "3" },
                    { label: "", value: "4" },
                    { label: "", value: "5" }
                ]
            },
            {
                question:
                    "... know how to network with the tech community within your university?",
                type: "radio",
                data: [
                    { label: "", value: "1" },
                    { label: "", value: "2" },
                    { label: "", value: "3" },
                    { label: "", value: "4" },
                    { label: "", value: "5" }
                ]
            }
        ],
        required: true
    },
    {
        number: 15,
        page: 5,
        question: "With in person interviews, to what extent do you..",
        type: "matrix",
        header: ["Not at all", "", "Neutral", "", "Very Much So"],
        data: [
            {
                question: "... know what is appropriate to wear?",
                type: "radio",
                data: [
                    { label: "", value: "1" },
                    { label: "", value: "2" },
                    { label: "", value: "3" },
                    { label: "", value: "4" },
                    { label: "", value: "5" }
                ]
            },
            {
                question: ".... know what is appropriate to say?",
                type: "radio",
                data: [
                    { label: "", value: "1" },
                    { label: "", value: "2" },
                    { label: "", value: "3" },
                    { label: "", value: "4" },
                    { label: "", value: "5" }
                ]
            }
        ],
        required: true
    },
    {
        number: 16,
        page: 6,
        question: "With which racial and ethnic group(s) do you identify?",
        helperText: "Mark all that apply",
        type: "checkbox",
        data: [
            {
                label: "American Indian or Alaska Native",
                value: "American Indian or Alaska Native"
            },
            { label: "Asian", value: "Asian" },
            {
                label: "Black or African American",
                value: "Black or African American"
            },
            {
                label: "Hispanic, Latinx, or Spanish Origin",
                value: "Hispanic, Latinx, or Spanish Origin"
            },
            {
                label: "Middle Easter or North African",
                value: "Middle Easter or North African"
            },
            {
                label: "Native Hawaiian or Other Pacific Islander",
                value: "Native Hawaiian or Other Pacific Islander"
            },
            { label: "White", value: "White" },
            {
                label: "Another race or ethnicity not listed above",
                value: "Another race or ethnicity not listed above"
            }
        ],
        required: true
    },
    {
        number: 17,
        page: 6,
        question: "How do you describe your gender identity?",
        type: "radio",
        data: [
            { label: "Female", value: "Female" },
            { label: "Male", value: "Male" },
            { label: "Transgender", value: "Transgender" },
            { label: "A gender not listed", value: "A gender not listed" }
        ],
        required: true
    },
    {
        number: 18,
        page: 6,
        question:
            "How many hours on average do you code per week? (Class work, personal projects, etc)",
        type: "radio",
        data: [
            { label: "0", value: "0" },
            { label: "1-5", value: "1-5" },
            { label: "6-10", value: "6-10" },
            { label: "11-15", value: "11-15" },
            { label: "16-20", value: "16-20" },
            { label: "21+", value: "21+" }
        ],
        row: true,
        required: true
    }
];
