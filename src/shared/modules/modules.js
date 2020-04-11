import React from "react";
import Networking from "screens/ModuleContent/networking";
import InternshipTypes from "screens/ModuleContent/types-of-internships";
import Resumes from "screens/ModuleContent/resume-building";
import AppProcess from "screens/ModuleContent/application-process";
import WhatToWear from "screens/ModuleContent/what-to-wear";
import BehaviorialQuestions from "screens/ModuleContent/behaviorial-questions";
import TechnicalQuestions from "screens/ModuleContent/tech-questions";
import DosAndDonts from "screens/ModuleContent/dos-and-donts";
import Tips from "screens/ModuleContent/tips";
import More from "screens/ModuleContent/more";
import Pitching from "screens/ModuleContent/pitching";

export default [
    {
        id: "module-1",
        slug: "types-of-internships",
        title: "Types of Internships",
        description:
            "Learn about various types of internships available in the field, where to find internships, the different internship seasons & how to decide which companies are best for you based on your goals and interests.",
        image: "types",
        component: InternshipTypes
    },
    {
        id: "module-3",
        slug: "resume-building",
        title: "Resume Building",
        description:
            "Resumes are crucial for recruiters to see what makes you stand out as a potential candidate. Learn how to design a resume to best highlight your skills and experience in an aesthetically pleasing way.",
        image: "resume",
        component: Resumes
    },
    {
        id: "module-11",
        slug: "pitching",
        title: "Pitching Yourself",
        description:
            "Telling your story in a concise and intriguing way is important for recruiters to get a glimpse of who you are. In this module you will learn about how to pitch yourself in person and online.",
        image: "pitching",
        component: Pitching
    },
    {
        id: "module-2",
        slug: "networking",
        title: "Networking",
        description:
            "Curious about where to find networking or job opportunities online and in person? This module will give an overview of why networking is crucial and go over major networking opportunities.",
        image: "networking",
        component: Networking
    },
    {
        id: "module-4",
        slug: "application-process",
        title: "Application Process",
        description:
            "Understand the items that are high priority to include in your application, and why some items might not be as applicable. Also, this module will go over tips to make the application process efficient!",
        image: "application",
        component: AppProcess
    },

    {
        id: "module-5",
        slug: "what-to-wear",
        title: "What to Wear",
        description:
            "Company culture impacts what you should wear to onsite interviews. Some companies prefer their candidates to wear business formal, while others suggest come in what you’re comfortable in.",
        image: "clothing",
        component: WhatToWear
    },
    {
        id: "module-6",
        slug: "behaviorial-questions",
        title: "Behaviorial Questions",
        description:
            "Preparing for behavioral questions is extremely critical. This is where the interviewer see's who you are as a person and if you are a good fit. Additionally, they want to see how you approach and handle different situations.",
        image: "interview",
        component: BehaviorialQuestions
    },
    {
        id: "module-7",
        slug: "tech-questions",
        title: "Technical Questions",
        description:
            "Master your data structures and constantly practice for technical interviews. This module will go over how to generally approach technical questions and provide beneficial resources that will help you prepare.",
        image: "code",
        component: TechnicalQuestions
    },
    {
        id: "module-8",
        slug: "dos-and-donts",
        title: "The Do's & Don'ts",
        description:
            "There are small actions that can sometimes leave a lasting impression on your interviewer (positive or negative), let's learn about a couple of the main ones to ensure your success.",
        image: "check",
        component: DosAndDonts
    },
    {
        id: "module-9",
        slug: "tips",
        title: "Tips from the Pros",
        description:
            "Want to get the industry secrets? Here professionals and interns from companies like Microsoft, JP Morgan, Tesla, Disney, Amazon and more will share their experiences and secret tips on landing your dream role!",
        image: "tips",
        component: Tips
    },
    {
        id: "module-10",
        slug: "more",
        title: "Hungry for more?",
        description:
            "If you're interested in diving more into these topics, checkout these curated resources our team has put together for you! Please also leave feedback here if there is anything else you would like to see.",
        image: "more",
        component: More
    }
];
