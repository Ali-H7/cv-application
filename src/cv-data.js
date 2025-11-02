export const profileData = {
    firstName: "Ali",
    lastName: "Hassan",
    jobTitle: "Web Developer",
    aboutMe: "Passionate web developer with 5+ years of experience building responsive and user-friendly websites. Skilled in HTML, CSS, JavaScript, and modern frameworks like React and Node.js. Always eager to learn new technologies and deliver high-quality digital experiences.",
    email: "123456@gmail.com",
    phoneNumber: "66110011",
    location: "Sitra, Bahrain",
    website: "https://github.com/Ali-H7/",
};

export const workExperienceData = [
    {
        id: crypto.randomUUID(),
        jobTitle: "Frontend Developer",
        companyName: "PixelCraft Studios",
        workingDate: "2018 - 2021",
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

    },
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
    // {
    //     jobTitle: "Web Developer",
    //     companyName: "BrightByte Agency",
    //     workingDate: "2024 - Present",
    //     listOfAchievements: [
    //         "Implemented SEO strategies that increased organic traffic by 60%",
    //         "Developed custom WordPress themes and plugins",
    //         "Managed deployment pipelines using GitHub Actions and Netlify"
    //     ]
    // }
];