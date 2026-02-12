/**
 * MASTER SITE CONFIGURATION
 *
 * Toggle sections on/off, edit content, add/remove data arrays.
 * Navbar & side-navigation update automatically.
 */
const siteConfig = {

  sections: {
    hero: true,
    skills: true,
    experience: true,
    projects: false,
    education: true,
    contact: true,
  },

  settings: {
    defaultTheme: "dark",
    showGridOverlay: true,
    showSideElements: true,
  },

  hero: {
    name: "Rushikesh Chavan",
    tagline: "Software Developer",
    roles: "AI/ML · Full Stack",
    description:
      "Building real-world solutions with Java, Python, React, and AI/ML. B.E. in Computer Science (AI & ML) with Honours in Blockchain Technology.",
    image: null,
    statusBadge: "Available for opportunities",
    stats: [
      { value: "8.29", label: "CGPA",           color: "c1" },
      { value: "2+",   label: "Internships",    color: "c2" },
      { value: "10+",  label: "Projects",       color: "c1" },
      { value: "1",    label: "Research Paper",  color: "c3" },
    ],
    buttons: [
      {
        label: "View Resume",
        url: "https://drive.google.com/file/d/1ibnyO60n18NWXnLY0KlGhvPiaV16Q4uH/view?usp=sharing",
        type: "primary",
      },
      {
        label: "GitHub",
        url: "https://github.com/rushikeshchavan-7",
        type: "color",
        color: "#22c55e",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/rushikesh-chavan-275282211/",
        type: "color",
        color: "#0a66c2",
      },
    ],
    techStack: ["Java", "Python", "React", "Node.js", "TensorFlow", "Flask", "MySQL"],
  },

  contact: {
    email: "rushikeshchavan2002@gmail.com",
    phone: "+91 91127 80002",
    subtitle: "Have a question or want to work together? Reach out directly.",
  },

  footer: {
    name: "Rushikesh Chavan",
    links: [
      { label: "GitHub",    url: "https://github.com/rushikeshchavan-7", external: true },
      { label: "LinkedIn",  url: "https://www.linkedin.com/in/rushikesh-chavan-275282211/", external: true },
      { label: "Instagram", url: "https://www.instagram.com/rushi.chavan__?igsh=bmJyejV3cWlvZnN2", external: true },
      { label: "Email",     url: "mailto:rushikeshchavan2002@gmail.com", external: false },
    ],
  },

  skills: [
    {
      title: "Technologies",
      skills: [
        { name: "Java",         image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
        { name: "React Js",     image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" },
        { name: "Next Js",      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=" },
        { name: "HTML",          image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" },
        { name: "CSS",           image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" },
        { name: "JavaScript",    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" },
        { name: "Bootstrap",     image: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" },
        { name: "Node Js",       image: "https://nodejs.org/static/images/logo.svg" },
        { name: "Python",        image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
        { name: "TensorFlow",    image: "https://static-00.iconduck.com/assets.00/tensorflow-icon-1911x2048-1m2s54vn.png" },
        { name: "Flask",         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1280px-Flask_logo.svg.png" },
        { name: "MySQL",         image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" },
        { name: "Scikit-Learn",  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/2560px-Scikit_learn_logo_small.svg.png" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git",            image: "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png" },
        { name: "GitHub",         image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
        { name: "Netlify",        image: "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png" },
        { name: "VS Code",        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519" },
        { name: "Android Studio", image: "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png" },
        { name: "Canva",          image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Canva_logo..png?20230702045656" },
        { name: "Vercel",         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAuKrVgOa4BJxUnH4gdJ5TV0m2IFEMjLJ2g&s" },
        { name: "AWS",            image: "https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png" },
        { name: "Jupyter",        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1767px-Jupyter_logo.svg.png" },
        { name: "Google Colab",   image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Google_Colaboratory_SVG_Logo.svg/2560px-Google_Colaboratory_SVG_Logo.svg.png" },
        { name: "ChatGPT",        image: "https://cdn.vectorstock.com/i/1000v/13/15/chatgpt-logo-open-ai-logotype-chatbot-chat-vector-46721315.jpg" },
        { name: "Blockchain",     image: "https://banner2.cleanpng.com/20180714/rzz/kisspng-blockchain-info-cryptocurrency-bitcoin-technology-chinese-blue-5b498bcce89417.5536279015315465729527.jpg" },
      ],
    },
  ],

  experiences: [
    {
      id: 0,
      img: "https://ik.imagekit.io/eddytools/ET-Website/Logo/ET-Logo-small_AL9eeqySIe.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1617814603239",
      role: "Web Development Intern",
      company: "EddyTools Tech. Solution",
      date: "Sep 2022 - Dec 2022",
      desc: "Designed and implemented dynamic, responsive web applications utilizing Node.js for server-side development and React for client-side development. Leveraged Next.js to enhance performance and scalability, implementing server-side rendering and static site generation for improved user experience. Successfully developed and deployed several websites, including a comprehensive blog platform for a client, ensuring high performance, SEO optimization, and user-friendly interfaces.",
      skills: ["ReactJS", "GitHub", "NodeJs", "GitLab", "HTML", "CSS", "JavaScript"],
    },
    {
      id: 1,
      img: "https://ik.imagekit.io/eddytools/ET-Website/Logo/ET-Logo-small_AL9eeqySIe.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1617814603239",
      role: "AI Development Intern",
      company: "EddyTools Tech. Solution",
      date: "Jan 2022 - May 2022",
      desc: "Successfully built six AI-driven projects, demonstrating a strong ability to apply theoretical knowledge to practical applications. Drone surveillance system, aruco scanner, drowsiness detection, speed detection, road sign language detector, smart attendance system.",
      skills: ["Python", "OpenCV", "Flask", "ArucoMarkers", "NLP", "NumPy", "Pandas"],
    },
    {
      id: 2,
      img: "https://www.clipartmax.com/png/middle/219-2197822_research-paper-flat-icon.png",
      role: "Research Paper",
      company: "Saraswati College of Engineering Kharghar",
      date: "2024",
      desc: "Led the development of Cultivate, a pioneering web-based platform integrating machine learning and deep learning for precision agriculture. Implemented and compared five key algorithms for various agricultural applications, identifying XGBoost as the most accurate predictor.",
      skills: ["Python", "NLP", "XGBoost", "SKLearn", "Flask", "Documentation", "NumPy", "Pandas"],
    },
    {
      id: 3,
      img: "https://rcsaraswaticollege.wordpress.com/wp-content/uploads/2021/07/exdd4674.png?w=1024",
      role: "Vice President",
      company: "Rotaract Club of Saraswati College",
      date: "June 2023 - June 2024",
      desc: "Led flagship projects like Maitri 7.0 and Saraswati Open 2024. Guided and trained the new Board of Directors, building strong relationships with parent rotary members and district authorities.",
      skills: ["Leadership", "Team Building", "Communication", "Marketing", "Event Management", "Decision Making", "Community Service"],
    },
    {
      id: 4,
      img: "https://p1.hiclipart.com/preview/295/536/14/rotary-logo-rotary-international-rotary-club-of-miami-rotaract-interact-club-rotary-foundation-service-club-organization-png-clipart.jpg",
      role: "Zonal Events Director Zone-1",
      company: "Rotaract District 3142",
      date: "June 2022 - June 2023",
      desc: "Successfully organized and coordinated events for a zone comprising 20+ Rotaract clubs, ensuring smooth execution and active participation. Managed resources effectively including venues, materials, and volunteers.",
      skills: ["Leadership", "Team Building", "Communication", "Marketing", "Event Management", "Decision Making", "Community Service"],
    },
  ],

  education: [
    {
      id: 0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn0QyxLnPv2QEue2JJaEpQq4faY9tch_1lEw&s",
      school: "Saraswati College of Engineering Kharghar (University of Mumbai)",
      date: "Jan 2020 - May 2024",
      grade: "8.29 CGPA",
      desc: "Bachelor's degree in Computer Science and Engineering.",
      degree: "Bachelor of Engineering - BE, Computer Science and Engineering",
    },
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn0QyxLnPv2QEue2JJaEpQq4faY9tch_1lEw&s",
      school: "Saraswati College of Engineering Kharghar (University of Mumbai)",
      date: "May 2020 - May 2024",
      grade: "8.18 CGPA",
      desc: "Honours degree in Blockchain Technology.",
      degree: "Honours Degree of Blockchain Technology",
    },
    {
      id: 2,
      img: "https://brainfeedmagazine.com/wp-content/uploads/2024/05/Maharashtra-State-Board-of-Secondary-Higher-Secondary-Education.png",
      school: "ICLes Motilal Jhunjhunwala College, Vashi",
      date: "Apr 2019 - Apr 2020",
      grade: "68.46%",
      desc: "Class 12 - Science stream.",
      degree: "HSC(XII), Science",
    },
    {
      id: 3,
      img: "https://brainfeedmagazine.com/wp-content/uploads/2024/05/Maharashtra-State-Board-of-Secondary-Higher-Secondary-Education.png",
      school: "ICL High School, Vashi",
      date: "Apr 2017 - Apr 2018",
      grade: "80%",
      desc: "Class 10.",
      degree: "SSC(X), Semi-English Medium",
    },
  ],

  projects: [
    // Example: Web App
    {
      id: 0,
      title: "Your Project Name",
      date: "Jan 2024 - Mar 2024",
      description: "Short description of what this project does and why you built it.",
      image: "https://via.placeholder.com/600x400?text=Project+Screenshot",
      tags: ["React", "Node.js", "MongoDB"],
      category: "web app",
      github: "https://github.com/your-username/your-repo",
      webapp: "https://your-live-demo.netlify.app/",
    },
    // Example: Mobile App
    {
      id: 1,
      title: "Your Mobile App",
      date: "Jun 2024",
      description: "Short description of your mobile app.",
      image: "https://via.placeholder.com/600x400?text=Mobile+App",
      tags: ["React Native", "Firebase"],
      category: "android app",
      github: "https://github.com/your-username/your-app",
      webapp: "https://play.google.com/store/apps/details?id=com.yourapp",
    },
    // Example: ML Project (with team members)
    {
      id: 2,
      title: "Your ML Project",
      date: "2024",
      description: "Short description of your machine learning project.",
      image: "https://via.placeholder.com/600x400?text=ML+Project",
      tags: ["Python", "TensorFlow", "Flask"],
      category: "machine learning",
      github: "https://github.com/your-username/your-ml-project",
      webapp: "https://your-ml-demo.netlify.app/",
      member: [
        { name: "Your Name", img: "https://via.placeholder.com/100", linkedin: "https://linkedin.com/in/you", github: "https://github.com/you" },
        { name: "Teammate", img: "https://via.placeholder.com/100", linkedin: "https://linkedin.com/in/teammate", github: "https://github.com/teammate" },
      ],
    },
  ],
};

export default siteConfig;
