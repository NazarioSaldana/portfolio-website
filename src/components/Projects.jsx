import { useState } from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  const myProjects = [
    {
      id: 1,
      title: "Ascend ATV Embedded Firmware",
      description: "Developed and enhanced a dual-linear actuator control system using a Raspberry Pi to ensure accurate hardware synchronization and live feedback response.",
      tech: "Raspberry Pi, Embedded Control",
      fullDetails: "A complete embedded control system for high-torque linear actuators designed for aerospace applications, fully powered by a Raspberry Pi environment.",
      process: "Configured Raspberry Pi GPIO mapping to ensure accurate actuator control and enhanced the control software to synchronize actuator operation for live feedback. Introduced detailed wiring schematics and load cell documentation to streamline debugging.",
      skills: ["Raspberry Pi", "Hardware Mapping", "System Integration", "Schematic Design"],
      mediaType: "video", 
      mediaUrl: "https://www.youtube.com/embed/5Vr-ZNbFy8g" 
    },
    {
      id: 2,
      title: "Space Invaders on MSPM0G3507",
      description: "Built a real-time embedded game using low-level drivers, an interrupt system, and an ST7735 SPI LCD with optimized sprite rendering.",
      tech: "C, Game Programming",
      fullDetails: "A fully functional arcade clone built directly onto microcontroller hardware, managing all graphics, sound, and logic in C.",
      process: "Implemented low-level drivers for ADC slide-pot control, GPIO buttons, SysTick timing, and 12-bit DAC playback. Integrated the ST7735 SPI LCD with optimized sprite rendering and used UART for debugging, telemetry output, and validating driver behavior.",
      skills: ["Driver Development", "ISRs", "UART/SPI Communication", "Embedded C"],
      mediaType: "video", 
      mediaUrl: "https://www.youtube.com/embed/lTtsTbqW0g0" 
    },
    {
      id: 3,
      title: "FPGA Stopwatch Processor",
      description: "Designed a digital counter and 7-state HLSM, synthesized and validated with 100% accuracy on a Basys3 FPGA.",
      tech: "Verilog, FPGA",
      fullDetails: "A custom hardware processor designed from scratch to manage precise timing and multi-mode counting operations.",
      process: "Designed a 4-mode digital counter and a 7-state HLSM in behavioral Verilog. Built two clock dividers using 16-bit and 20-bit counters, and developed BCD arithmetic logic with 4-bit overflow/underflow detection for accurate decimal counting.",
      skills: ["Verilog", "FPGA Synthesis", "Hardware State Machines", "Timing Analysis"],
      mediaType: "image",
      mediaUrl: "/public/FPGA-PlaceHolder.png"
    },
    {
      id: 4,
      title: "Dungeon Crawler RPG",
      description: "Engineered a robust C++ application using deep class hierarchies, custom destructors, and dynamic memory safety validated via Valgrind.",
      tech: "C++, OOP",
      fullDetails: "A terminal-based role-playing game focused on dynamic inventory management, enemy encounters, and strict memory safety.",
      process: "Managed dynamic object ownership across inventories via custom destructors. Validated dynamic memory allocation to achieve zero leaks using Valgrind, and utilized dynamic_cast and C++ STL vectors to securely process type-safe runtime logic.",
      skills: ["OOP Architecture", "Dynamic Memory Management", "Debugging (Valgrind)", "C++ STL"],
      mediaType: "video",
      mediaUrl: "https://www.youtube.com/embed/OvL9C99AwjQ"
    },
    {
      id: 5,
      title: "Learning Animal Guessing Game",
      description: "Developed an interactive engine utilizing binary decision trees, hash tables, and BFS-based validation logic to manage complex memory states.",
      tech: "C, Data Structures",
      fullDetails: "An algorithm-heavy C application that uses decision trees to dynamically learn and guess user inputs.",
      process: "Implemented a hash table for stats and an undo/redo system with dual stacks. Developed BFS-based validation logic to verify tree integrity and ensure no cycles or unreachable nodes existed in memory.",
      skills: ["Data Structures (Trees, Hash Tables)", "Algorithm Design (BFS)", "Memory Tracking"],
      mediaType: "video",
      mediaUrl: "https://www.youtube.com/embed/3BWkinqXRr4"
    }
  ]

  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      
      <div className="project-grid">
        {myProjects.map((proj) => (
          <div key={proj.id} onClick={() => setActiveProject(proj)}>
            <ProjectCard 
              title={proj.title} 
              description={proj.description} 
              tech={proj.tech} 
            />
          </div>
        ))}
      </div>

      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div className="modal-content expanded" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActiveProject(null)}>✕</button>

            <div className="modal-scroll-area">
              
              <div className="media-container-expanded">
                {activeProject.mediaType === 'video' ? (
                   <iframe 
                      width="100%" 
                      height="100%" 
                      src={activeProject.mediaUrl} 
                      title={activeProject.title} 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                   ></iframe>
                ) : (
                   <img 
                      src={activeProject.mediaUrl} 
                      alt={activeProject.title} 
                   />
                )}
              </div>

              <div className="modal-body">
                <h2 className="modal-title">{activeProject.title}</h2>
                <p className="modal-intro">{activeProject.description}</p>
                
                <p className="modal-affiliation">
                  <strong>Affiliation:</strong> The University of Texas at Austin
                </p>

                <div className="skills-container primary-tags">
                  {activeProject.tech.split(', ').map((techItem, index) => (
                    <span key={index} className="skill-tag black-tag">{techItem}</span>
                  ))}
                </div>

                <div className="modal-section">
                  <h4>Overview</h4>
                  <p>{activeProject.fullDetails}</p>
                </div>

                <div className="modal-section">
                  <h4>The Process</h4>
                  <p>{activeProject.process}</p>
                </div>

                <div className="modal-section">
                  <h4>All Skills & Technologies</h4>
                  <div className="skills-container">
                    {activeProject.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects