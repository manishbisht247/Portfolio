import Image from "next/image";
import React from "react";

import {
  Mail,
  ExternalLink,
  Code2,
  BarChart3,
  GraduationCap,
  Award,
  Phone,
  Brain,
  Database,
  LineChart,
  MessageSquareText,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import {
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiMysql,
  SiOpencv,
  SiStreamlit,
} from "react-icons/si";

import {
  MotionDiv,
  MotionSection,
  MotionHeader,
  MotionArticle,
  MotionH1,
  MotionH2,
  MotionP,
} from "@/components/Motion";


// ============================================================
// DATA
// ============================================================

const projects = [
  {
    title: "Movie Recommendation System",
    desc: "A content-based recommendation engine that suggests movies using metadata similarity and user preferences.",
    tech: ["Python", "Streamlit", "Pandas", "Scikit-Learn"],
    link: "https://movie-recommendation-manish.streamlit.app",
    type: "Live Project",
  },

  {
    title: "Customer Churn Prediction",
    desc: "An end-to-end machine learning project focused on understanding customer behavior, feature relationships and predicting customer churn.",
    tech: ["Python", "XGBoost", "EDA", "Scikit-Learn"],
    link: "https://github.com/manishbisht247/CustomerChurnPrediction",
    type: "Machine Learning",
  },

  {
    title: "Face Recognition Attendance",
    desc: "A computer vision application that recognizes faces in real time and automatically records attendance.",
    tech: ["Python", "OpenCV", "Pandas", "NumPy"],
    link: "https://github.com/manishbisht247/face-recognition-attendance",
    type: "Computer Vision",
  },

  {
    title: "Decision Tree Dashboard",
    desc: "An interactive machine learning dashboard for experimenting with Decision Tree hyperparameters and visualizing the resulting model.",
    tech: ["Python", "Scikit-Learn", "Streamlit", "Data Visualization"],
    link: "https://github.com/manishbisht247/decision-tree-dashboard",
    type: "Interactive ML",
  },
];


const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "Python", icon: FaPython },
      { name: "SQL", icon: SiMysql },
    ],
  },

  {
    title: "Data Analysis",
    icon: LineChart,
    skills: [
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "EDA", icon: BarChart3 },
      { name: "Excel", icon: Database },
    ],
  },

  {
    title: "Machine Learning",
    icon: Brain,
    skills: [
      { name: "Scikit-Learn", icon: SiScikitlearn },
      { name: "Model Evaluation", icon: CheckCircle2 },
      { name: "Feature Analysis", icon: LineChart },
    ],
  },

  {
    title: "NLP & Tools",
    icon: MessageSquareText,
    skills: [
      { name: "NLP", icon: MessageSquareText },
      { name: "OpenCV", icon: SiOpencv },
      { name: "Streamlit", icon: SiStreamlit },
      { name: "Git", icon: FaGitAlt },
    ],
  },
];


const journey = [
  {
    number: "01",
    title: "Python",
    desc: "Building a strong programming foundation and learning to work with data.",
  },

  {
    number: "02",
    title: "Data Analysis",
    desc: "Learning to clean, explore, visualize and understand datasets.",
  },

  {
    number: "03",
    title: "Machine Learning",
    desc: "Moving from understanding data to building predictive models.",
  },

  {
    number: "04",
    title: "NLP",
    desc: "Exploring how machine learning can understand and work with text.",
  },
];


const certifications = [
  "Kaggle Data Science Certifications",
  "Data Science Professional Certificate",
  "NPTEL: Privacy & Security",
  "NPTEL: Leadership Effectiveness",
];


const learning = [
  "Advanced SQL",
  "Natural Language Processing",
  "Machine Learning",
  "Model Deployment",
  "Data Engineering Workflows",
];


// ============================================================
// MAIN COMPONENT
// ============================================================

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans overflow-hidden">


      {/* ======================================================
          NAVIGATION
      ====================================================== */}

      <MotionHeader
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100"
      >

        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          <a
            href="#home"
            className="font-extrabold text-xl tracking-tight text-blue-600"
          >
            MB.
          </a>


          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">

            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>

            <a href="#skills" className="hover:text-blue-600 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-blue-600 transition">
              Projects
            </a>

            <a href="#journey" className="hover:text-blue-600 transition">
              Journey
            </a>

            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>

          </nav>


          <div className="flex items-center gap-4">

            <a
              href="mailto:manishbisht.tech@gmail.com"
              className="text-slate-500 hover:text-blue-600 transition"
            >
              <Mail size={19} />
            </a>

            <a
              href="https://github.com/manishbisht247"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-600 transition"
            >
              <FaGithub size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/manish-bisht-connect"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-600 transition"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

          </div>

        </div>

      </MotionHeader>



      {/* ======================================================
          HERO
      ====================================================== */}

      <section
        id="home"
        className="relative max-w-6xl mx-auto px-6 pt-24 pb-28"
      >

        <div className="absolute top-10 right-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40 -z-10" />


        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >

            <MotionDiv
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block"
            >

              <Image
                src="/profile.jpg"
                alt="Manish Bisht"
                width={140}
                height={140}
                priority
                className="rounded-full border-4 border-blue-50 shadow-xl object-cover"
              />

            </MotionDiv>

          </MotionDiv>


          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-7"
          >

            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />

            Available for Data Analyst Roles

          </MotionDiv>


          <MotionH1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-7"
          >

            I turn{" "}

            <span className="text-blue-600">
              data
            </span>

            {" "}into meaningful{" "}

            <span className="text-blue-600">
              solutions.
            </span>

          </MotionH1>


          <MotionP
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed mb-10"
          >

            B.Tech CSE student focused on{" "}

            <span className="font-semibold text-slate-800">
              Machine Learning, Data Analysis and NLP
            </span>

            {" "}— building practical projects that turn raw data into useful insights.

          </MotionP>


          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >

            <a
              href="#projects"
              className="group flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 transition-all"
            >

              View Projects

              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />

            </a>


            <a
              href="/Manish_Bisht_Resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 font-bold hover:border-blue-300 hover:bg-blue-50 transition-all"
            >

              Download Resume

            </a>

          </MotionDiv>

        </MotionDiv>

      </section>



      {/* ======================================================
          ABOUT
      ====================================================== */}

      <MotionSection
        id="about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="bg-slate-50 border-y border-slate-100"
      >

        <div className="max-w-6xl mx-auto px-6 py-24">

          <div className="grid md:grid-cols-3 gap-12 items-start">

            <div>

              <p className="text-sm uppercase tracking-widest font-bold text-blue-600 mb-3">
                About Me
              </p>

              <h2 className="text-4xl font-extrabold tracking-tight">
                Curious about how data works.
              </h2>

            </div>


            <div className="md:col-span-2 space-y-5 text-lg text-slate-600 leading-relaxed">

              <p>
                I'm a Computer Science student interested in the intersection
                of data, machine learning and real-world problem solving.
              </p>

              <p>
                My approach is to understand the data first — its structure,
                patterns, relationships and limitations — before jumping into
                model building.
              </p>

              <p>
                Through my projects, I've worked with data analysis,
                predictive modelling, recommendation systems and text
                processing while continuously expanding my understanding of
                the machine learning workflow.
              </p>

            </div>

          </div>

        </div>

      </MotionSection>



      {/* ======================================================
          WHAT I DO
      ====================================================== */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <p className="text-sm uppercase tracking-widest font-bold text-blue-600 mb-3">
            What I Work With
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight mb-12">
            From raw data to intelligent solutions.
          </h2>


          <div className="grid md:grid-cols-3 gap-6">

            {[
              {
                icon: BarChart3,
                title: "Data Analysis",
                desc: "Cleaning, exploring and understanding datasets to uncover useful patterns and relationships.",
              },

              {
                icon: Brain,
                title: "Machine Learning",
                desc: "Building and evaluating models for prediction, classification and practical problem solving.",
              },

              {
                icon: MessageSquareText,
                title: "Natural Language Processing",
                desc: "Working with text data through preprocessing, tokenization, vectorization and NLP techniques.",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (

                <MotionDiv
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -8 }}
                  className="p-7 rounded-3xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100 transition-all duration-300"
                >

                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>

                </MotionDiv>

              );

            })}

          </div>

        </MotionDiv>

      </section>



      {/* ======================================================
          SKILLS
      ====================================================== */}

      <section
        id="skills"
        className="bg-slate-50 border-y border-slate-100"
      >

        <div className="max-w-6xl mx-auto px-6 py-24">

          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <p className="text-sm uppercase tracking-widest font-bold text-blue-600 mb-3">
              Technical Skills
            </p>

            <h2 className="text-4xl font-extrabold tracking-tight mb-12">
              Tools I use to work with data.
            </h2>


            <div className="grid md:grid-cols-2 gap-6">

              {skillCategories.map((category, index) => {

                const CategoryIcon = category.icon;

                return (

                  <MotionDiv
                    key={category.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="p-7 rounded-3xl bg-white border border-slate-200"
                  >

                    <div className="flex items-center gap-3 mb-6">

                      <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                        <CategoryIcon size={20} />
                      </div>

                      <h3 className="text-xl font-bold">
                        {category.title}
                      </h3>

                    </div>


                    <div className="grid grid-cols-2 gap-3">

                      {category.skills.map((skill) => {

                        const Icon = skill.icon;

                        return (

                          <MotionDiv
                            key={skill.name}
                            whileHover={{
                              scale: 1.03,
                              y: -3,
                            }}
                            className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-100 transition-all"
                          >

                            <Icon
                              size={22}
                              className="text-slate-600"
                            />

                            <span className="font-semibold text-sm text-slate-700">
                              {skill.name}
                            </span>

                          </MotionDiv>

                        );

                      })}

                    </div>

                  </MotionDiv>

                );

              })}

            </div>

          </MotionDiv>

        </div>

      </section>



      {/* ======================================================
          JOURNEY
      ====================================================== */}

      <section
        id="journey"
        className="max-w-6xl mx-auto px-6 py-24"
      >

        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <p className="text-sm uppercase tracking-widest font-bold text-blue-600 mb-3">
            My Journey
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight mb-14">
            Learning one layer at a time.
          </h2>


          <div className="relative">

            <div className="hidden md:block absolute left-0 right-0 top-8 h-px bg-slate-200" />


            <div className="grid md:grid-cols-4 gap-8">

              {journey.map((item, index) => (

                <MotionDiv
                  key={item.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  className="relative"
                >

                  <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-6 relative z-10">
                    {item.number}
                  </div>

                  <h3 className="text-xl font-bold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>

                </MotionDiv>

              ))}

            </div>

          </div>

        </MotionDiv>

      </section>



      {/* ======================================================
          PROJECTS
      ====================================================== */}

      <section
        id="projects"
        className="bg-slate-50 border-y border-slate-100"
      >

        <div className="max-w-6xl mx-auto px-6 py-24">

          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">

              <div>

                <p className="text-sm uppercase tracking-widest font-bold text-blue-600 mb-3">
                  Featured Work
                </p>

                <h2 className="text-4xl font-extrabold tracking-tight">
                  Projects I've built.
                </h2>

              </div>


              <a
                href="https://github.com/manishbisht247"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
              >

                View GitHub

                <ArrowUpRight size={18} />

              </a>

            </div>


            <div className="grid md:grid-cols-2 gap-7">

              {projects.map((project, index) => (

                <MotionArticle
                  key={project.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -8 }}
                  className="group bg-white border border-slate-200 rounded-3xl p-7 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300"
                >

                  <div className="flex items-start justify-between gap-5 mb-7">

                    <div>

                      <span className="text-xs uppercase tracking-widest font-bold text-blue-600">
                        {project.type}
                      </span>

                      <h3 className="text-2xl font-bold mt-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>

                    </div>


                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 p-3 rounded-full bg-slate-50 text-slate-500 hover:bg-blue-600 hover:text-white transition-all"
                    >

                      <ExternalLink size={19} />

                    </a>

                  </div>


                  <p className="text-slate-600 leading-relaxed mb-7">
                    {project.desc}
                  </p>


                  <div className="flex flex-wrap gap-2">

                    {project.tech.map((tech) => (

                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 text-xs font-bold"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                </MotionArticle>

              ))}

            </div>

          </MotionDiv>

        </div>

      </section>



      {/* ======================================================
          RESULTS
      ====================================================== */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <p className="text-sm uppercase tracking-widest font-bold text-blue-600 mb-3">
            Project Results
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight mb-12">
            Measuring the model, not just building it.
          </h2>


          <div className="rounded-3xl border border-slate-200 p-8 md:p-10">

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">

              <div>

                <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">
                  Customer Churn Prediction
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  Model Performance
                </h3>

              </div>


              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                {[
                  ["Precision", "91.95%"],
                  ["Recall", "84.21%"],
                  ["F1 Score", "87.91%"],
                  ["ROC-AUC", "94.11%"],
                ].map(([label, value]) => (

                  <MotionDiv
                    key={label}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >

                    <p className="text-2xl font-extrabold text-blue-600">
                      {value}
                    </p>

                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">
                      {label}
                    </p>

                  </MotionDiv>

                ))}

              </div>

            </div>

          </div>

        </MotionDiv>

      </section>



      {/* ======================================================
          CURRENTLY LEARNING
      ====================================================== */}

      <section className="bg-slate-50 border-y border-slate-100">

        <div className="max-w-6xl mx-auto px-6 py-24">

          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <p className="text-sm uppercase tracking-widest font-bold text-blue-600 mb-3">
              Currently Learning
            </p>

            <h2 className="text-4xl font-extrabold tracking-tight mb-10">
              Still learning. Still building.
            </h2>


            <div className="flex flex-wrap gap-3">

              {learning.map((item, index) => (

                <MotionDiv
                  key={item}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.03,
                  }}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 font-semibold text-slate-700"
                >

                  <CheckCircle2
                    size={17}
                    className="text-blue-600"
                  />

                  {item}

                </MotionDiv>

              ))}

            </div>

          </MotionDiv>

        </div>

      </section>



      {/* ======================================================
          EDUCATION + CERTIFICATIONS
      ====================================================== */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 gap-16">

          {/* EDUCATION */}

          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <p className="text-sm uppercase tracking-widest font-bold text-blue-600 mb-3">
              Education
            </p>

            <h2 className="text-3xl font-extrabold mb-10">
              Academic Background
            </h2>


            <div className="border-l-2 border-blue-100 pl-7 relative">

              <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-blue-600" />

              <h3 className="text-xl font-bold">
                B.Tech in Computer Science
              </h3>

              <p className="text-slate-600 mt-2">
                JCBOSE University (Formerly YMCA)
              </p>

              <p className="text-sm italic text-slate-500 mt-1">
                Satyug Darshan Institute of Engineering and Technology
              </p>

              <div className="flex gap-4 mt-4 text-sm font-bold">

                <span className="text-blue-600">
                  CGPA: 8.0
                </span>

                <span className="text-slate-400">
                  7th Semester
                </span>

              </div>

            </div>


            <div className="border-l-2 border-slate-100 pl-7 relative mt-10">

              <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-slate-300" />

              <h3 className="text-xl font-bold">
                Class XII (CBSE)
              </h3>

              <p className="text-slate-600 mt-2">
                VM SR. SEC. School
              </p>

              <p className="text-blue-600 font-bold text-sm mt-2">
                Score: 91.2%
              </p>

            </div>

          </MotionDiv>



          {/* CERTIFICATIONS */}

          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <p className="text-sm uppercase tracking-widest font-bold text-blue-600 mb-3">
              Certifications
            </p>

            <h2 className="text-3xl font-extrabold mb-10">
              Courses & Certifications
            </h2>


            <div className="space-y-4">

              {certifications.map((cert) => (

                <MotionDiv
                  key={cert}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all"
                >

                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">

                    <Award size={20} />

                  </div>

                  <span className="font-semibold text-slate-700">
                    {cert}
                  </span>

                </MotionDiv>

              ))}

            </div>

          </MotionDiv>

        </div>

      </section>



      {/* ======================================================
          CONTACT
      ====================================================== */}

      <MotionSection
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-slate-900 text-white"
      >

        <div className="max-w-6xl mx-auto px-6 py-24">

          <div className="text-center">

            <p className="text-sm uppercase tracking-widest font-bold text-blue-400 mb-4">
              Let's Connect
            </p>


            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Let's build something with data.
            </h2>


            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
              Interested in data analysis, machine learning or NLP?
              I'd love to connect.
            </p>


            <div className="flex flex-wrap justify-center gap-4">

              <a
                href="mailto:manishbisht.tech@gmail.com"
                className="flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-500 transition"
              >

                <Mail size={18} />

                Email Me

              </a>


              <a
                href="https://github.com/manishbisht247"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-slate-700 px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition"
              >

                <FaGithub size={18} />

                GitHub

              </a>


              <a
                href="https://www.linkedin.com/in/manish-bisht-connect"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-slate-700 px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition"
              >

                LinkedIn

              </a>

            </div>

          </div>

        </div>

      </MotionSection>



      {/* ======================================================
          FOOTER
      ====================================================== */}

      <footer className="bg-slate-950 text-slate-500">

        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm">
            © {new Date().getFullYear()} Manish Bisht. Built with Next.js.
          </p>


          <div className="flex items-center gap-6 text-sm">

            <a
              href="mailto:manishbisht.tech@gmail.com"
              className="hover:text-white transition"
            >
              <Mail size={17} />
            </a>


            <a
              href="tel:+918505899724"
              className="hover:text-white transition"
            >
              <Phone size={17} />
            </a>


            <a
              href="/Manish_Bisht_Resume.pdf"
              download
              className="text-blue-400 hover:text-blue-300 font-semibold transition"
            >
              Resume
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}