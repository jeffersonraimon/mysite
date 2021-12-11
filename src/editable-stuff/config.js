// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Jefferson",
  middleName: "J.",
  lastName: "Raimon",
  message: "| Student | Programmer | Network Technician | Photographer |",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/jeffersonraimon",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/jeffersonraimon",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/jeffersonraimonsilva",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/jeffersonraimon/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/me.png"),
  imageSize: 375,
  message:
    "My name is Jefferson Raimon. I’m undergraduate in License in Computer at Federal University of Bahia (UFBA) - Brazil ",
  resume: "http://lattes.cnpq.br/2769457344335075",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "jeffersonraimon", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/me.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/me.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for Internship and Juniors Jobs opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "jeffersonraimon@gmail.com",
};

const experiences = {
  show: true,
  heading: "Education & Experiences",
  data: [
    {
      role: 'License in Computer Student',
      companylogo: require('../assets/img/brasao_ufba.png'),
      name: 'UFBA',
      url: 'https://computacao.ufba.br/pt-br/licenciatura-em-computacao',
      date: 'August 2021 - Current'
    },
    {
      role: 'Project Advisor',// Here Add Company Name
      companylogo: require('../assets/img/lejcet.png'),
      name: 'Volunteer at EJC&T',
      url: 'https://ejcet.com.br/',
      date: 'April 2021 – Current',
    },
    {
      role: 'Computer Laboratory Monitor',// Here Add Company Name
      companylogo: require('../assets/img/laurodefreitas.png'),
      name: 'IFBA',
      url: 'https://portal.ifba.edu.br/lauro-de-freitas/',
      date: 'April 2018 – June 2019',
    },
    {
      role: 'Computer Network Technician',// Here Add Company Name
      companylogo: require('../assets/img/senailogo_nova.png'),
      name: 'SENAI',
      url: 'https://www.senaibahia.com.br/',
      date: 'October 2015 – March 2017',
    }
    
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };

