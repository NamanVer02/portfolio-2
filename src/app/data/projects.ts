export interface Project {
  id: string;
  title: string;
  image: string;
  technologies: string[];
  description?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "personal-finance-tracker",
    title: "Personal Finance Tracker",
    image: "/pfa-1.png",
    technologies: ["React.js", "Spring Boot"],
    description: "A personal finance tracker with a user-friendly interface and a focus on simplicity and ease of use.",
  },
  {
    id: "pdf-partner",
    title: "PDF Partner",
    image: "/pdf-1.png",
    technologies: ["Python", "Streamlit", "Langchain"],
    description: "A simple RAG application that allows you to upload a PDF and ask questions about it.",    
  },
  {
    id: "magic-eq",
    title: "Magic EQ",
    image: "/eq-1.png",
    technologies: ["React Native", "Python", "FastAPI"],
    description: "An AI powered EQ app that changes the mood of the music you listen to.",
  },
  {
    id: "music-mover",
    title: "Music Mover",
    image: "/mm-1.png",
    technologies: ["React.js", "Supabase", "Vite.js"],
    description: "A music tool that allows you to move the music to a different streaming platforms.",
    liveUrl: "https://music-mover-seven.vercel.app/",
  },
]; 