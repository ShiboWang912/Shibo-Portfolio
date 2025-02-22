import {
  programming,
  htmlicon,
  creator,
  coding,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  // timhortons,
  // OPS,
  // xty,
  threejs,
  python,
  aws,
  php,
  azure,
  server,
  vuejs,
  java,
  csharp,
  phone,
  deeplearning,
  apci,
  avondx,
  clbp,
  mobileHealth,
  rtds,
  bci,
  Centennial,
  wimtach,
  healthcare
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "JavaScript & Vue.js & React & Angular",
    icon: programming,
  },
  {
    title: "HTML & CSS",
    icon: htmlicon,
  },
  {
    title: "Python & Java & C#",
    icon: coding,
  },
  {
    title: "Aws & Azure",
    icon: server,
  },
  {
    title: "Mobile Development",
    icon: phone,
  },
  {
    title: "Machine Learning",
    icon: deeplearning,
  },
];

const technologies = [
  { name: "Vuejs", icon: vuejs },
  { name: "Python", icon: python },
  { name: "Aws", icon: aws },
  { name: "Azure", icon: azure },
  { name: "Java", icon: java },
  { name: "C#", icon: csharp },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
];

const experiences = [
  {
    title: "Software Engineering Research Assistant (Co-op)",
    company_name: "Healthcare Systems R&A Inc.\nRDTS Project",
    icon: healthcare,
    iconBg: "#454545",
    date: "May 2023 - August 2023",
    points: [
      "Scanned image files for visualization and data analysis",
      "Developed noise reduction and pixel enhancement functions to improve image clarity.",
      "Created backend algorithms for data interpretation and automated PDF report generation.",
      "Implemented Tkinter Canvas for precise manual image selection within the app interface.",
      "Developed color difference baselines to enhance image contrast, increasing accuracy by 50% through user feedback and A/B testing.",
      "Automated image processing workflows using OpenCV AI, enabling efficient scanning and data extraction.",
      "Generated user-friendly charts and downloadable reports for clear data presentation.",
      "Conducted user testing and refined the UI based on customer feedback to improve usability.",
      "Documented project processes, hosted scrum meetings, and collaborated cross-functionally.",
      "Led a team of two to successfully complete the AI automated pipeline on time, demonstrating effective leadership and teamwork.",
    ],
  },
  {
    title: "Software Engineering Research Assistant (Co-op)",
    company_name: "Healthcare Systems R&A Inc.\nBCI Project",
    icon: healthcare,
    iconBg: "#454545",
    date: "August 2023 - September 2023",
    points: [
      "Conducted research and tuned CNN, RNN, and XGBoost models to classify EEG data into motor imageries, achieving significant accuracy improvements.",
      "Analyzed limitations in existing models, particularly in capturing time series aspects of EEG signals.",
      "Experimented with various datasets (8, 16, and 64 electrodes) to enhance model performance, utilizing Python and machine learning libraries for data preprocessing and organization.",
    ],
  },
  {
    title: "Software Engineering Research Assistant (Co-op)",
    company_name: "Healthcare Systems R&A Inc.\nMobileHealth Project",
    icon: healthcare,
    iconBg: "#454545",
    date: "September 2023 - December 2023",
    points: [
      "Developed and tested multiple machine learning models, integrating predictive models into a mobile app to aid in early diagnosis.",
      "Conducted data exploration and visualization using the DUKECATHR dataset, highlighting imbalances for better understanding.",
      "Collaborated with cross-functional teams to integrate predictive models into the mobile app.",
      "Improved model reliability by 30% through advanced fine-tuning techniques, including Bayesian search hyperparameter tuning and principal component analysis (PCA)."
    ],
  },
  {
    title: "Software Engineering Research Assistant (Co-op)",
    company_name: "Healthcare Systems R&A Inc.\nCLBP Project",
    icon: healthcare,
    iconBg: "#454545",
    date: "May 2024 - September 2024",
    points: [
      "Increased 25-Landmark Model accuracy using customized data augmentation methods.",
      "Implemented custom methods to enhance masked image heatmap keypoint detection models.",
      "Coordinated with healthcare professionals to refine detection algorithms and user interfaces.",
      "Improved keypoint prediction reliability and precision from 73% to 96% by fine-tuning the model and using dataset augmentation techniques."
    ],
  },
  {
    title: "Software Developer (Part-Time)",
    company_name: "WIMTACH\nAPCI Project",
    icon: wimtach,
    iconBg: "#454545",
    date: "May 2024 - August 2024",
    points: [
      "Developed a feature for users to select a tree planting area on a map within the app.",
      "Created functionality for users to edit obstacles and choose tree types.",
      "Designed algorithms for optimal tree placement based on planting density and soil conditions.",
      "Implemented features for saving and viewing tree planting locations.",
      "Conducted user testing and UI adjustments based on feedback.",
      "Deployed the software on AWS.",
      "Integrated Google Map plug-in, enabling users to select tree planting areas and polygons on the map, enhancing interaction.",
      "Utilized image analysis technology to display obstacles and critical vegetation areas, improving planning accuracy.",
      "Employed the circle packing algorithm for efficient tree placement within designated areas, optimizing space usage.",
      "Successfully deployed the app on AWS, including authentication and establishing a comprehensive tree database.",
      "Documented project processes, hosted daily scrum meetings, and facilitated cross-functional collaboration.",
      "Led a team to deliver a Minimum Viable Product (MVP) on time within four months, demonstrating effective teamwork and leadership.",
    ],
  },
  {
    title: "Software Developer (Part-Time)",
    company_name: "WIMTACH\nAvondx Project",
    icon: wimtach,
    iconBg: "#454545",
    date: "August 2024 - October 2024",
    points: [
      "Utilized Silero and Rnnoise models for noise reduction and voice activity detection on iOS devices.",
      "Employed Pyannote’s Vosk model to transcribe audio to text subtitles.",
      "Designed and implemented real-time speech processing pipelines.",
      "Conducted performance testing to ensure transcription accuracy and speed.",
      "Reduced Word Error Rate (WER) from 0.40 to less than 0.10 percent after implementing Silero and Rnnoise models in the iOS system, significantly improving speech-to-text transcription accuracy and reliability."
    ],
  },
  {
    title: "Software Engineering Technology - Artificial Intelligence Student",
    company_name: "Centennial College",
    icon: Centennial,
    iconBg: "#454545",
    date: "September 2021 - December 2024",
    points: [
      "Finished Advanced Diploma with high honours GPA and three terms co-op experience",
    ],
  },
];



const projects1 = [
  {
    name: "Rapid Diagnostic Test (RDT) Strip Image Analyzer Desktop Software Development",
    description:
      "Implemented image processing workflows and enhanced band detection accuracy using Python and OpenCV.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "Image Processing",
        color: "pink-text-gradient",
      },
    ],
    image: rtds,  
  },
  { name: "Post-Stroke Rehabilitation System using Brain-Computer Interface Technology", 
    description: "Conducted research and tuned CNN, RNN, and XGBoost models to classify EEG data, improving motor imagery classification accuracy.", 
    tags: [ { name: "Python", color: "blue-text-gradient", }, 
      { name: "Machine Learning", color: "green-text-gradient", },      
    ], 
    image: bci,},
  {
    name: "Health Prediction Mobile APP Development",
    description:
      "Developed and tested multiple machine learning models, integrating predictive models into a mobile app to aid in early diagnosis.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Cross-Validation",
        color: "pink-text-gradient",
      },
    ],
    image: mobileHealth,  
    
  },
 ,
];
const projects2 = [
  {
    name: "Chronic Lower Back Pain Detection & Correction Mobile APP Development",
    description:
      "Enhanced keypoint detection models and developed a robust neural network for 2D landmark prediction.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Data Augmentation",
        color: "pink-text-gradient",
      },
    ],
    image: clbp,  
    
  },
  {
    name: "Tree Canopy Planning Mobile App (MVP)",
    description:
      "Developed a cross-platform mobile app using React Native and Python, integrating real-time data processing and optimizing tree placement algorithms.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image: apci,  
    
  },

  {
    name: "AI Transcription Technology Development",
    description:
      "Developed real-time speech processing pipelines, significantly reducing the Word Error Rate for speech-to-text transcription.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Silero",
        color: "green-text-gradient",
      },
      {
        name: "Speech Processing",
        color: "pink-text-gradient",
      },
    ],
    image: avondx,  
    
  },
 ,
];

export { services, technologies, experiences, projects1, projects2 };
