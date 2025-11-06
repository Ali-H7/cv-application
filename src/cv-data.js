export const profileData = {
    firstName: "Ali",
    lastName: "Hasan",
    jobTitle: "Full Stack Developer",
    aboutMe: "Highly effective Full Stack Developer with four years of experience specializing in the MERN stack (Node.js, Express, MongoDB, React.js). Expertise includes architecting scalable RESTful APIs, frontend performance optimization (achieving a 40% load time reduction), and leading the successful migration of a legacy PHP platform to a modern MERN architecture. Holds a B.S. in Computer Science.",
    email: "example@gmail.com",
    phoneNumber: "+973 0000000",
    location: "Bahrain",
    website: "https://github.com/Ali-H7/",
};

export const workExperienceData = [
    {
        id: crypto.randomUUID(),
        jobTitle: "Full Stack Developer",
        companyName: "CodeNest Solutions",
        workingDate: "2021 - 2024",
        listOfAchievements: [
            {
                id: crypto.randomUUID(),
                achievement: "Built RESTful APIs with Node.js and Express"
            },
            {
                id: crypto.randomUUID(),
                achievement: "Integrated MongoDB for dynamic content management"
            },
            {
                id: crypto.randomUUID(),
                achievement: "Led migration from legacy PHP system to modern MERN stack"
            }
        ]

    },
    {
        id: crypto.randomUUID(),
        jobTitle: "Frontend Developer",
        companyName: "PixelCraft Studios",
        workingDate: "2020 - 2021",
        listOfAchievements: [
            {
                id: crypto.randomUUID(),
                achievement: "Developed responsive UI components using React.js"
            },
            {
                id: crypto.randomUUID(),
                achievement: "Optimized website performance, reducing load time by 40%"
            },
            {
                id: crypto.randomUUID(),
                achievement: "Collaborated with designers to implement pixel-perfect layouts"
            }
        ]

    }
];

export const educationData = [
    {
        id: crypto.randomUUID(),
        institutionName: "TechBridge University",
        degree: "Bachelor of Science in Computer Science",
        graduationYear: "2015 - 2019",

    },
    {
        id: crypto.randomUUID(),
        institutionName: "Greenwood High School",
        degree: "High School Diploma",
        graduationYear: "2012 - 2015",

    }
];

export const skillsData = 'HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Redux, Tailwind CSS, Bootstrap, Node.js, Express.js, MongoDB, PostgreSQL, GitHub, REST APIs, GraphQL, Jest, Webpack, Vite, Docker, CI/CD'

export const profileDataPreset = {
    firstName: "",
    lastName: "",
    jobTitle: "",
    aboutMe: "",
    email: "",
    phoneNumber: "",
    location: "",
    website: "",
};