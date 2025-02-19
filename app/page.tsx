"use client"

import type React from "react"
import Image from "next/image"
import {
  Briefcase,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Code2,
  Binary,
  Brain,
  Braces,
  FolderKanban,
  Server,
  Layout,
  Database,
} from "lucide-react"
import { useLanguage } from "./contexts/LanguageContext"
import { useTheme } from "./contexts/ThemeContext"
import { LanguageToggle } from "./components/LanguageToggle"
import { ThemeToggle } from "./components/ThemeToggle"
import GitHubToggle from "./components/GithubToggle"

const translations = {
  es: {
    name: "David Alejandro Cabeza Cabrera",
    title: "ING. CIENCIAS INFORMÁTICAS",
    age: "26 años | cubana",
    contact: "Contacto",
    education: "Educación",
    experience: "Experiencia Laboral",
    skills: "Habilidades",
    languages: "Idiomas",
    university: "Universidad de las Ciencias Informáticas",
    jobTitle: "Especialista B en Ciencias Informáticas",
   // jobTitle1:"",
    company: "Centro de Informatización de la Gestión Documental (CIGED)",
    currentJob: "Actualmente",
    english: "Inglés: Intermedio",
    spanish: "Español: Lengua materna",
    jobDescriptions: [
      "Creación y desarrollo de programas y sistemas.",
      "Despliegue de programas y sistemas.",
      "Mantenimiento y soporte de las soluciones de software implementadas.",
      "Revisión de códigos existentes para la detección de errores.",
    ],
  },
  en: {
    name: "David Alejandro Cabeza Cabrera",
    title: "COMPUTER SCIENCE ENGINEER",
    age: "26 years old | Cuban",
    contact: "Contact",
    education: "Education",
    experience: "Work Experience",
    skills: "Skills",
    languages: "Languages",
    university: "University of Computer Sciences",
    jobTitle: "Computer Science Specialist B",
    company: "Center for Computerization of Document Management (CIGED)",
    currentJob: "Present",
    english: "English: Intermediate",
    spanish: "Spanish: Native",
    jobDescriptions: [
      "Creation and development of programs and systems.",
      "Development of programs and systems.",
      "Maintenance and support of implemented software solutions.",
      "Review of existing code for error detection.",
    ],
  },
}

export default function Home() {
  const { language } = useLanguage()
  const { theme } = useTheme()
  const t = translations[language]

  return (
    <div
      className={`min-h-screen py-10 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-fixed transition-colors ${
        theme === "light" ? "bg-gray-100" : ""
      }`}
      style={{
        backgroundImage:
          theme === "dark"
             ? `url('/463798.jpg')`
            : "none",
      }}
    >
      <div
        className={`max-w-4xl mx-auto ${theme === "light" ? "bg-white" : "bg-black/40"} backdrop-blur-md shadow-2xl rounded-lg overflow-hidden border ${theme === "light" ? "border-gray-200" : "border-white/10"}`}
      >
        <div className="p-8">
          <div className="flex justify-end space-x-4 mb-4">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          <div className="flex flex-col md:flex-row md:items-center">
            <Image
              src= "/perfil.png"             
              alt="Profile Picture"
              width={150}
              height={150}
              className={`rounded-full aspect-square mb-4 md:mb-0 md:mr-8 object-cover ring-4 ${theme === "light" ? "ring-gray-200" : "ring-white/20"}`}
              priority
            />
            <div>
              <h1
                className={`text-3xl font-bold ${theme === "light" ? "text-gray-900" : "text-white"} font-poppins tracking-tight ${theme === "dark" ? "drop-shadow-lg" : ""}`}
              >
                {t.name}
              </h1>
              <p className={`text-xl ${theme === "light" ? "text-blue-600" : "text-blue-300"} mt-1 font-poppins`}>
                {t.title}
              </p>
              <p className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-300"} mt-2`}>
                {t.age}</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2
                className={`text-2xl font-semibold ${theme === "light" ? "text-gray-900" : "text-white"} mb-4 font-poppins ${theme === "dark" ? "drop-shadow-lg" : ""}`}
              >
                {t.contact}
              </h2>
              <ul className="space-y-2">
                <li className={`flex items-center ${theme === "light" ? "text-gray-700" : "text-gray-200"}`}>
                  <Phone className={`w-5 h-5 mr-2 ${theme === "light" ? "text-blue-600" : "text-blue-300"}`} />
                  <span>(53) 5 4884554</span>
                </li>
                <li className="flex items-center">
                  <Mail className={`w-5 h-5 mr-2 ${theme === "light" ? "text-blue-600" : "text-blue-300"}`} />
                  <a
                    href="mailto:davidcabeza326@gmail.com"
                    className={`${theme === "light" ? "text-blue-600 hover:text-blue-700" : "text-blue-300 hover:text-blue-400"} transition-colors`}
                  >
                    davidcabeza326@gmail.com
                  </a>
                </li>
                <li className={`flex items-center ${theme === "light" ? "text-gray-700" : "text-gray-200"}`}>
                  <MapPin className={`w-5 h-5 mr-2 ${theme === "light" ? "text-blue-600" : "text-blue-300"}`} />
                  <span>La Habana, Cuba</span>
                </li>
              </ul>

            </div>

            <div>
              <h2
                className={`text-2xl font-semibold ${theme === "light" ? "text-gray-900" : "text-white"} mb-4 font-poppins ${theme === "dark" ? "drop-shadow-lg" : ""}`}
              >
                {t.education}
              </h2>
              <div className="flex items-start">
                <GraduationCap
                  className={`w-5 h-5 mr-2 ${theme === "light" ? "text-blue-600" : "text-blue-300"} mt-1`}
                />
                <div>
                  <h3 className={`font-semibold ${theme === "light" ? "text-gray-800" : "text-gray-200"}`}>
                    {t.title}
                  </h3>
                  <p className={theme === "light" ? "text-gray-600" : "text-gray-300"}>{t.university}</p>
                  <p className={`text-sm ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>
                    Sep 2018 - Dec 2023
                  </p>
                  <p className={`text-sm ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>La Habana, Cuba</p>
                </div>
              </div>
            </div>
          </div>
          <GitHubToggle />

          <div className="mt-10">
            <h2
              className={`text-2xl font-semibold ${theme === "light" ? "text-gray-900" : "text-white"} mb-4 font-poppins ${theme === "dark" ? "drop-shadow-lg" : ""}`}
            >
              {t.experience}
            </h2>
            <div className="flex items-start">
              <Briefcase className={`w-5 h-5 mr-2 ${theme === "light" ? "text-blue-600" : "text-blue-300"} mt-1`} />
              <div>
                <h3 className={`font-semibold ${theme === "light" ? "text-gray-800" : "text-gray-200"}`}>
                  {t.jobTitle}
                </h3>
                <p className={theme === "light" ? "text-gray-600" : "text-gray-300"}>{t.company}</p>
                <p className={`text-sm ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>
                  Feb 2023 - {t.currentJob}
                </p>
                <p className={`text-sm ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}>La Habana, Cuba</p>
                <ul
                  className={`list-disc list-inside mt-2 text-sm ${theme === "light" ? "text-gray-600" : "text-gray-300"}`}
                >
                  {t.jobDescriptions.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
            <div className="mt-8">
  <h2
    className={`text-2xl font-semibold ${theme === "light" ? "text-gray-900" : "text-white"} mb-4 font-poppins ${theme === "dark" ? "drop-shadow-lg" : ""}`}
  >
    {t.skills}
  </h2>
  <div className="space-y-3">
    <SkillItem
      icon={Binary}
      text={language === "es" ? "Programación orientada a objetos (POO)" : "Object-oriented programming (OOP)"}
      tooltip={language === "es" ? "Paradigma de programación" : "Programming paradigm"}
      percentage="92%"
    />
    <SkillItem
      icon={Code2}
      text="JavaScript, TypeScript, SQL, Python, HTML, CSS, Java"
      tooltip={language === "es" ? "Lenguajes de programación" : "Programming languages"}
      percentage="90%"
    />
    <SkillItem
      icon={Brain}
      text="Machine Learning y Deep Learning"
      tooltip={language === "es" ? "Inteligencia Artificial" : "Artificial Intelligence"}
      percentage="95%"
    />
    <SkillItem
      icon={Braces}
      text="JSON"
      tooltip={language === "es" ? "Formato de intercambio de datos" : "Data interchange format"}
      percentage="95%"
    />
    <SkillItem
      icon={FolderKanban}
      text={language === "es" ? "Desarrollo de proyectos" : "Project development"}
      tooltip={language === "es" ? "Gestión de proyectos" : "Project management"}
      percentage="90%"
    />
    <SkillItem
      icon={Server}
      text="Backend: Express.js, Nest.js, Flask, Django"
      tooltip={language === "es" ? "Desarrollo Backend" : "Backend development"}
      percentage="95%"
    />
    <SkillItem
      icon={Layout}
      text="Frontend: React, Tailwind CSS, Bootstrap, Next.js"
      tooltip={language === "es" ? "Desarrollo Frontend" : "Frontend development"}
      percentage="85%"
    />
    <SkillItem
      icon={Database}
      text={language === "es" ? "Base de datos y contenedores: PostgreSQL, MySQL, SQLite, Docker" : "Database and containers: PostgreSQL, MySQL, SQLite, Docker"}
      tooltip={language === "es" ? "Bases de datos y contenedores" : "Databases and containers"}
      percentage="90%"
    />
  </div>
</div>

          <div className="mt-8">
            <h2
              className={`text-2xl font-semibold ${theme === "light" ? "text-gray-900" : "text-white"} mb-4 font-poppins ${theme === "dark" ? "drop-shadow-lg" : ""}`}
            >
              {t.languages}
            </h2>
            <ul className={`space-y-2 ${theme === "light" ? "text-gray-700" : "text-gray-200"}`}>
              <li>{t.english}</li>
              <li>{t.spanish}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function SkillItem({
  icon: Icon,
  text,
  tooltip,
  percentage,
}: {
  icon: React.ElementType
  text: string
  tooltip: string
  percentage: string
}) {
  const { theme } = useTheme()
  return (
    <div
      className={`group relative flex items-center p-2 rounded-lg ${theme === "light" ? "hover:bg-gray-100" : "hover:bg-white/5"} transition-colors`}
    >
      <div className="flex items-center">
        <div className={`p-2 rounded-full ${theme === "light" ? "bg-blue-100" : "bg-blue-500/10"} mr-3`}>
          <Icon className={`w-5 h-5 ${theme === "light" ? "text-blue-600" : "text-blue-300"}`} />
        </div>
        <span className={theme === "light" ? "text-gray-700" : "text-gray-200"}>{text}</span>
      </div>
      <div
        className={`absolute left-0 -top-8 hidden group-hover:block ${theme === "light" ? "bg-gray-800" : "bg-black/80"} text-white text-xs px-2 py-1 rounded`}
      >
        {tooltip}
      </div>
      <div 
      className={`p-2 rounded-[50%] ${theme === "light" ? "bg-blue-100" : "bg-blue-500/10"} mr-3`}
      ><span className={`w-5 h-5 ${theme === "light" ? "text-blue-600" : "text-blue-300"}`}>{percentage}</span>
        <div/>
    </div>
    </div>
  )
}

