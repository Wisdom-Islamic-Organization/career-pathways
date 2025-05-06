export const careerPathwaysData = {
  domains: [
    {
      id: "pure-science",
      icon: "🔬",
      name: "Pure Science",
      description: "Explore careers in fundamental scientific disciplines that form the basis of our understanding of the natural world.",
      subdomains: [
        {
          id: "physics",
          name: "Physics",
          description: "Study of matter, energy, and the interaction between them.",
          careerOptions: [
            "Research Scientist",
            "Space Scientist",
            "Scientific Officer",
            "Professor",
            "Data Analyst",
            "Medical Physicist",
            "Astrophysicist",
            "Nuclear Scientist",
            "Optics Engineer"
          ],
          educationPath: {
            undergraduate: {
              name: "B.Sc. Physics / Astrophysics / Integrated M.Sc. Physics",
              duration: "3-5 years",
              institutions: [
                "St. Stephen’s College, Delhi",
                "Loyola College, Chennai",
                "Hindu College, Delhi",
                "Fergusson College, Pune",
                "IISER Pune",
                "IISc Bangalore"
              ]
            },
            postgraduate: {
              name: "M.Sc. Physics / Astrophysics",
              duration: "2 years",
              institutions: [
                "IIT Bombay",
                "JNU Delhi",
                "BHU Varanasi",
                "University of Delhi",
                "IISER Pune",
                "TIFR Mumbai"
              ]
            },
            advanced: {
              name: "Ph.D. in Physics / Astrophysics",
              duration: "3-5 years",
              institutions: [
                "IISc Bangalore",
                "TIFR Mumbai",
                "IIT Delhi",
                "IISER Pune",
                "Indian Institute of Astrophysics, Bangalore"
              ]
            }
          }
        },
        {
          id: "chemistry",
          name: "Chemistry",
          description: "Study of substances, their properties, structure, and the changes they undergo.",
          careerOptions: [
            "Analytical Chemist",
            "Research Chemist",
            "Pharmacologist",
            "Chemical Scientist",
            "Forensic Expert",
            "Polymer Scientist",
            "Environmental Chemist",
            "Materials Scientist",
            "Biochemist"
          ],
          educationPath: {
            undergraduate: {
              name: "B.Sc. Chemistry / Integrated M.Sc. Chemistry",
              duration: "3-5 years",
              institutions: [
                "St. Stephen’s College, Delhi",
                "Presidency College, Kolkata",
                "Christ University, Bangalore",
                "Loyola College, Chennai",
                "IISER Bhopal",
                "IISER Mohali"
              ]
            },
            postgraduate: {
              name: "M.Sc. Chemistry",
              duration: "2 years",
              institutions: [
                "IIT Madras",
                "JNU Delhi",
                "BHU Varanasi",
                "University of Delhi"
              ]
            },
            advanced: {
              name: "Ph.D. in Chemistry",
              duration: "3-5 years",
              institutions: [
                "IISc Bangalore",
                "TIFR Mumbai",
                "IIT Kanpur",
                "JNU Delhi"
              ]
            }
          }
        },
        {
          id: "mathematics",
          name: "Mathematics",
          description: "Study of numbers, quantity, structure, space, and change, including statistical analysis.",
          careerOptions: [
            "Mathematician",
            "Data Scientist",
            "Actuary",
            "Operations Research Analyst",
            "Quantitative Analyst",
            "Cryptographer",
            "Statistician",
            "Mathematical Modeler",
            "Academic Researcher",
            "Biostatistician"
          ],
          educationPath: {
            undergraduate: {
              name: "B.Sc. Mathematics / Statistics / Integrated M.Sc. Mathematics",
              duration: "3-5 years",
              institutions: [
                "Hindu College, Delhi",
                "St. Stephen’s College, Delhi",
                "Chennai Mathematical Institute",
                "Indian Statistical Institute, Kolkata",
                "IISER Pune",
                "NISER Bhubaneswar"
              ]
            },
            postgraduate: {
              name: "M.Sc. Mathematics / Statistics",
              duration: "2 years",
              institutions: [
                "IIT Bombay",
                "JNU Delhi",
                "CMI Chennai",
                "ISI Kolkata",
                "IIT Kanpur",
                "BHU Varanasi"
              ]
            },
            advanced: {
              name: "Ph.D. in Mathematics / Statistics",
              duration: "3-5 years",
              institutions: [
                "TIFR Mumbai",
                "IIT Delhi",
                "ISI Bangalore",
                "CMI Chennai",
                "IIT Bombay",
                "JNU Delhi"
              ]
            }
          }
        },
        {
          id: "biology",
          name: "Biology",
          description: "Study of living organisms, their interactions, and their environment, encompassing microbiology, biotechnology, zoology, botany, and environmental science.",
          careerOptions: [
            "Biologist",
            "Microbiologist",
            "Biotechnologist",
            "Zoologist",
            "Botanist",
            "Environmental Scientist",
            "Wildlife Biologist",
            "Geneticist",
            "Bioinformatician",
            "Plant Scientist",
            "Marine Biologist",
            "Academic Researcher",
            "Conservation Scientist"
          ],
          educationPath: {
            undergraduate: {
              name: "B.Sc. Biology / Microbiology / Biotechnology / Zoology / Botany / Environmental Science / Integrated M.Sc. Biology",
              duration: "3-5 years",
              institutions: [
                "St. Xavier’s College, Mumbai",
                "Christ University, Bangalore",
                "Loyola College, Chennai",
                "Hindu College, Delhi",
                "IISER Thiruvananthapuram",
                "IISER Bhopal"
              ]
            },
            postgraduate: {
              name: "M.Sc. Biology / Microbiology / Biotechnology / Zoology / Botany / Environmental Science",
              duration: "2 years",
              institutions: [
                "JNU Delhi",
                "BHU Varanasi",
                "University of Delhi",
                "IISER Thiruvananthapuram",
                "IIT Bombay",
                "IISER Pune"
              ]
            },
            advanced: {
              name: "Ph.D. in Biological Sciences / Biotechnology / Environmental Science",
              duration: "3-5 years",
              institutions: [
                "NCBS Bangalore",
                "IISc Bangalore",
                "TIFR Mumbai",
                "JNU Delhi",
                "IIT Delhi",
                "NEERI Nagpur"
              ]
            }
          }
        },
        {
          id: "geology",
          name: "Geology",
          description: "Study of Earth's structure, composition, processes, and resource exploration.",
          careerOptions: [
            "Geologist",
            "Environmental Consultant",
            "Mining Geologist",
            "Petroleum Geologist",
            "Geophysicist",
            "Seismologist",
            "Oil and Gas Exploration Scientist",
            "Academic Researcher",
            "Geoscientist"
          ],
          educationPath: {
            undergraduate: {
              name: "B.Sc. Geology / Exploration Geophysics",
              duration: "3-4 years",
              institutions: [
                "Presidency College, Kolkata",
                "Fergusson College, Pune",
                "St. Xavier’s College, Mumbai",
                "Hansraj College, Delhi",
                "IIT Kharagpur"
              ]
            },
            postgraduate: {
              name: "M.Sc. Geology / Exploration Geophysics",
              duration: "2 years",
              institutions: [
                "IIT Kharagpur",
                "BHU Varanasi",
                "JNU Delhi",
                "University of Pune",
                "IIT Bombay"
              ]
            },
            advanced: {
              name: "Ph.D. in Geology / Exploration Geophysics",
              duration: "3-5 years",
              institutions: [
                "IIT Bombay",
                "IISc Bangalore",
                "JNU Delhi",
                "TIFR Mumbai",
                "IIT Kharagpur"
              ]
            }
          }
        },
        {
          id: "interdisciplinary-sciences",
          name: "Interdisciplinary Sciences",
          description: "Integration of multiple scientific disciplines to address complex problems, including biochemistry, biomedical science, forensic science, and food science.",
          careerOptions: [
            "Research Scientist",
            "Data Scientist",
            "Environmental Consultant",
            "Professor",
            "Science Policy Advisor",
            "Forensic Scientist",
            "Biomedical Scientist",
            "Food Scientist",
            "Biochemist",
            "Medical Researcher",
            "Clinical Diagnostics Specialist",
            "Quality Control Specialist"
          ],
          educationPath: {
            undergraduate: {
              name: "B.Sc. Biochemistry / Biomedical Science / Forensic Science / Food Science / BS Research / Integrated M.Sc. Interdisciplinary Sciences",
              duration: "3-5 years",
              institutions: [
                "St. Stephen’s College, Delhi",
                "Loyola College, Chennai",
                "Madras Christian College, Chennai",
                "Christ University, Bangalore",
                "IISc Bangalore",
                "IISER Pune"
              ]
            },
            postgraduate: {
              name: "M.Sc. Biochemistry / Biomedical Science / Forensic Science / Food Science / Interdisciplinary Sciences",
              duration: "2 years",
              institutions: [
                "JNU Delhi",
                "BHU Varanasi",
                "University of Delhi",
                "IISER Kolkata",
                "CFTRI Mysore",
                "Gujarat Forensic Sciences University"
              ]
            },
            advanced: {
              name: "Ph.D. in Biochemistry / Biomedical Science / Forensic Science / Food Science / Interdisciplinary Sciences",
              duration: "3-5 years",
              institutions: [
                "IISc Bangalore",
                "NCBS Bangalore",
                "TIFR Mumbai",
                "JNU Delhi",
                "CFTRI Mysore",
                "Gujarat Forensic Sciences University"
              ]
            }
          }
        }
      ]
    },
    {
      id: "engineering-technology",
      icon: "🔧",
      name: "Engineering & Technology",
      description: "Curious about how things work? Good at Math & Science? Love solving problems & building things? Interested in innovation, machines, coding, or design? You are an engineer inside!",
      subdomains: [
        {
          id: "mechanical",
          name: "Mechanical Engineering",
          description: "Study of machines, vehicles, and mechanical systems.",
          careerOptions: [
            "Automotive Engineer",
            "Robotics Engineer",
            "Mechanical Design Engineer",
            "Manufacturing Engineer"
          ],
          educationPath: {
            undergraduate: {
              name: "B.Tech / B.E. in Mechanical Engineering / Polytechnic Diploma (Mechanical)",
              duration: "3-4 years",
              institutions: [
                "IIT Bombay",
                "NIT Calicut",
                "BITS Pilani",
                "VIT Vellore",
                "College of Engineering Trivandrum",
                "TKM College of Engineering, Kollam"
              ]
            },
            postgraduate: {
              name: "M.Tech in Mechanical Engineering",
              duration: "2 years",
              institutions: [
                "IIT Madras",
                "IIT Delhi",
                "NIT Calicut",
                "CUSAT Kochi"
              ]
            },
            advanced: {
              name: "Ph.D. in Mechanical Engineering",
              duration: "3-5 years",
              institutions: [
                "IISc Bangalore",
                "IIT Bombay",
                "IIT Palakkad",
                "NIT Calicut"
              ]
            }
          }
        },
        {
          id: "civil",
          name: "Civil Engineering",
          description: "Study of infrastructure, buildings, and construction systems.",
          careerOptions: [
            "Site Engineer",
            "Structural Analyst",
            "Construction Manager",
            "Urban Planner"
          ],
          educationPath: {
            undergraduate: {
              name: "B.Tech / B.E. in Civil Engineering / Polytechnic Diploma (Civil)",
              duration: "3-4 years",
              institutions: [
                "IIT Madras",
                "NIT Calicut",
                "Government Engineering College, Thrissur",
                "SRM University",
                "Manipal Institute of Technology",
                "Rajagiri School of Engineering & Technology"
              ]
            },
            postgraduate: {
              name: "M.Tech in Civil Engineering",
              duration: "2 years",
              institutions: [
                "IIT Delhi",
                "IIT Bombay",
                "NIT Calicut",
                "CUSAT Kochi"
              ]
            },
            advanced: {
              name: "Ph.D. in Civil Engineering",
              duration: "3-5 years",
              institutions: [
                "IISc Bangalore",
                "IIT Madras",
                "IIT Palakkad",
                "NIT Calicut"
              ]
            }
          }
        },
        {
          id: "electrical",
          name: "Electrical Engineering",
          description: "Study of circuits, power systems, and electrical equipment.",
          careerOptions: [
            "Power Engineer",
            "Control Systems Engineer",
            "Electrical Design Engineer",
            "Renewable Energy Specialist"
          ],
          educationPath: {
            undergraduate: {
              name: "B.Tech / B.E. in Electrical Engineering / Polytechnic Diploma (Electrical)",
              duration: "3-4 years",
              institutions: [
                "IIT Delhi",
                "NIT Calicut",
                "IIST Thiruvananthapuram",
                "VIT Vellore",
                "Mar Athanasius College of Engineering, Kothamangalam",
                "Saintgits College of Engineering"
              ]
            },
            postgraduate: {
              name: "M.Tech in Electrical Engineering",
              duration: "2 years",
              institutions: [
                "IIT Kanpur",
                "IIT Bombay",
                "NIT Calicut",
                "CUSAT Kochi"
              ]
            },
            advanced: {
              name: "Ph.D. in Electrical Engineering",
              duration: "3-5 years",
              institutions: [
                "IISc Bangalore",
                "IIT Delhi",
                "IIT Palakkad",
                "NIT Calicut"
              ]
            }
          }
        },
        {
          id: "electronics-communication",
          name: "Electronics & Communication Engineering",
          description: "Study of electronic devices, signals, and communication systems.",
          careerOptions: [
            "Embedded Systems Engineer",
            "Telecom Engineer",
            "VLSI Designer",
            "Signal Processing Engineer"
          ],
          educationPath: {
            undergraduate: {
              name: "B.Tech / B.E. in Electronics & Communication Engineering / Polytechnic Diploma (Electronics)",
              duration: "3-4 years",
              institutions: [
                "IIT Bombay",
                "NIT Calicut",
                "BITS Pilani",
                "College of Engineering Trivandrum",
                "TKM College of Engineering, Kollam",
                "Rajagiri School of Engineering & Technology"
              ]
            },
            postgraduate: {
              name: "M.Tech in Electronics & Communication Engineering",
              duration: "2 years",
              institutions: [
                "IIT Madras",
                "IIT Delhi",
                "NIT Calicut",
                "CUSAT Kochi"
              ]
            },
            advanced: {
              name: "Ph.D. in Electronics & Communication Engineering",
              duration: "3-5 years",
              institutions: [
                "IISc Bangalore",
                "IIT Bombay",
                "IIT Palakkad",
                "NIT Calicut"
              ]
            }
          }
        },
        {
          id: "computer-science",
          name: "Computer Science / IT",
          description: "Study of software, data, and computational systems.",
          careerOptions: [
            "Software Developer",
            "Data Analyst",
            "Cybersecurity Specialist",
            "Cloud Architect"
          ],
          educationPath: {
            undergraduate: {
              name: "B.Tech / B.E. in Computer Science / IT / B.C.A / B.Sc. Computer Science",
              duration: "3-4 years",
              institutions: [
                "IIT Bombay",
                "NIT Calicut",
                "IIIT Hyderabad",
                "BITS Pilani",
                "CUSAT Kochi",
                "Saintgits College of Engineering"
              ],
              specializations: [
                "Software Engineering",
                "Data Science",
                "Cybersecurity"
              ]
            },
            postgraduate: {
              name: "M.Tech / MS in Computer Science / MCA",
              duration: "2 years",
              institutions: [
                "IIT Madras",
                "IIT Delhi",
                "NIT Calicut",
                "IIIT Bangalore"
              ],
              specializations: [
                "Machine Learning",
                "Data Analytics",
                "Cloud Computing"
              ]
            },
            advanced: {
              name: "Ph.D. in Computer Science",
              duration: "3-5 years",
              institutions: [
                "IISc Bangalore",
                "IIT Bombay",
                "IIT Palakkad",
                "IIIT Hyderabad"
              ],
              researchAreas: [
                "Artificial Intelligence",
                "Distributed Systems",
                "Cybersecurity"
              ]
            }
          }
        },
        {
          id: "chemical",
          name: "Chemical Engineering",
          description: "Study of chemical processes and materials.",
          careerOptions: [
            "Process Engineer",
            "R&D Chemist",
            "Petrochemical Engineer",
            "Environmental Engineer"
          ],
          educationPath: {
            undergraduate: {
              name: "B.Tech / B.E. in Chemical Engineering / Polytechnic Diploma (Chemical)",
              duration: "3-4 years",
              institutions: [
                "IIT Madras",
                "NIT Calicut",
                "VIT Vellore",
                "Manipal Institute of Technology",
                "Government Engineering College, Thrissur",
                "TKM College of Engineering, Kollam"
              ]
            },
            postgraduate: {
              name: "M.Tech in Chemical Engineering",
              duration: "2 years",
              institutions: [
                "IIT Bombay",
                "IIT Delhi",
                "NIT Calicut",
                "CUSAT Kochi"
              ]
            },
            advanced: {
              name: "Ph.D. in Chemical Engineering",
              duration: "3-5 years",
              institutions: [
                "IISc Bangalore",
                "IIT Madras",
                "IIT Palakkad",
                "NIT Calicut"
              ]
            }
          }
        },
        {
          id: "ai-robotics",
          name: "AI / Robotics",
          description: "Study of artificial intelligence, machine learning, and robotic systems.",
          careerOptions: [
            "AI Engineer",
            "Robotics Expert",
            "Machine Learning Engineer",
            "Automation Specialist"
          ],
          educationPath: {
            undergraduate: {
              name: "B.Tech / B.E. in AI / Robotics / Computer Science / B.Sc. Computer Science",
              duration: "3-4 years",
              institutions: [
                "IIT Bombay",
                "NIT Calicut",
                "IIIT Hyderabad",
                "IIST Thiruvananthapuram",
                "CUSAT Kochi",
                "Rajagiri School of Engineering & Technology"
              ],
              specializations: [
                "Artificial Intelligence",
                "Robotics",
                "Machine Learning"
              ]
            },
            postgraduate: {
              name: "M.Tech in AI / Robotics / Machine Learning",
              duration: "2 years",
              institutions: [
                "IIT Madras",
                "IIT Delhi",
                "NIT Calicut",
                "IIIT Bangalore"
              ],
              specializations: [
                "Deep Learning",
                "Robotics",
                "Computer Vision"
              ]
            },
            advanced: {
              name: "Ph.D. in AI / Robotics",
              duration: "3-5 years",
              institutions: [
                "IISc Bangalore",
                "IIT Bombay",
                "IIT Palakkad",
                "IIIT Hyderabad"
              ],
              researchAreas: [
                "Natural Language Processing",
                "Autonomous Systems",
                "Reinforcement Learning"
              ]
            }
          }
        },
        {
          id: "design-technology",
          name: "Design with Technology Focus",
          description: "Study of design integrated with technology, focusing on user experience and product innovation.",
          careerOptions: [
            "Product Designer",
            "UI/UX Designer",
            "Industrial Designer",
            "Interaction Designer"
          ],
          educationPath: {
            undergraduate: {
              name: "B.Des. (Design with Tech Focus) / B.Tech in Design Engineering",
              duration: "4 years",
              institutions: [
                "NID Ahmedabad",
                "IIT Bombay",
                "VIT Vellore",
                "CUSAT Kochi",
                "Saintgits College of Engineering",
                "Mar Athanasius College of Engineering, Kothamangalam"
              ]
            },
            postgraduate: {
              name: "M.Des. in Design",
              duration: "2 years",
              institutions: [
                "NID Ahmedabad",
                "IIT Delhi",
                "NIT Calicut",
                "CUSAT Kochi"
              ]
            },
            advanced: {
              name: "Ph.D. in Design",
              duration: "3-5 years",
              institutions: [
                "IIT Bombay",
                "NID Ahmedabad",
                "IIT Palakkad",
                "NIT Calicut"
              ]
            }
          }
        },
        {
          id: "iti-apprenticeship",
          name: "ITI and Apprenticeship",
          description: "Vocational training and apprenticeships leading to industry jobs in engineering and technology.",
          careerOptions: [
            "Technician",
            "Machinist",
            "Electrician",
            "Maintenance Engineer"
          ],
          educationPath: {
            undergraduate: {
              name: "ITI Courses (e.g., Fitter, Electrician, Welder) + Apprenticeship",
              duration: "1-2 years",
              institutions: [
                "Government ITI, Calicut",
                "Government ITI, Thiruvananthapuram",
                "Government ITI, Kochi",
                "Private ITIs in Kerala"
              ]
            },
            postgraduate: {
              name: "Diploma in Engineering (via Lateral Entry) / Advanced Certifications",
              duration: "2-3 years",
              institutions: [
                "Government Polytechnic College, Calicut",
                "Government Polytechnic College, Thrissur",
                "CUSAT Kochi"
              ]
            },
            advanced: {
              name: "B.Tech (via Lateral Entry) / Industry Certifications",
              duration: "3-4 years",
              institutions: [
                "College of Engineering Trivandrum",
                "NIT Calicut",
                "CUSAT Kochi",
                "Government Engineering College, Thrissur"
              ]
            }
          }
        }
      ]
    },
    {
      id: "medicine",
      icon: "🏥",
      name: "Medicine",
      description: "- Fascinated by the human body and health? Strong in Biology and Chemistry? Passionate about helping people and caring for others? Interested in healing, diagnosis, treatment, or healthcare technology? Have the patience and dedication required for long-term study and practice? Then a career in the Medical Field is for YOU!",
      subdomains: [
        {
          id: "allied_health_diploma",
          "name": "Diploma courses after Class 10th ",
          "description": "Short-term diploma and certificate courses in healthcare fields that prepare students for support roles in medical services, diagnostics, and emergency care.",
          "careerOptions": [
            "Nursing Assistant",
            "Medical Laboratory Technician",
            "Radiology Technician",
            "Operation Theatre Assistant",
            "Optometry Assistant",
            "Dental Hygienist",
            "Emergency Medical Technician",
            "ECG/X-ray Technician"
          ],
          "educationPath": {
            "afterClass10": {
              "name": "Diploma/Certificate in Allied Health Sciences",
              "duration": "1-3 years",
              "institutions": [
                "Christian Medical College, Vellore",
                "Tata Memorial Hospital, Mumbai",
                "Amrita Institute of Medical Sciences, Kochi",
                "St. John's Medical College, Bangalore"
              ]
            }
          }
        },
        {
          id: "mbbs",
          name: "MBBS",
          description: "Bachelor of Medicine and Bachelor of Surgery, the primary medical degree for clinical practice, research, and specialized medicine.",
          careerOptions: [
            "Clinical Practitioner",
            "Government Medical Officer",
            "Research Scientist",
            "Academic Faculty"
          ],
          educationPath: {
            undergraduate: {
              name: "MBBS",
              duration: "5.5 years",
              institutions: [
                "AIIMS New Delhi",
                "CMC Vellore",
                "JIPMER Puducherry",
                "Maulana Azad Medical College, Delhi",
                "Government Medical College, (Thiruvananthapuram, Kottayam, Kozhikode)"
              ]
            },
            postgraduate: {
              name: "MD/MS/DNB",
              duration: "3 years",
              institutions: [
                "AIIMS New Delhi",
                "PGIMER Chandigarh",
                "CMC Vellore",
                "Kasturba Medical College, Manipal"
              ]
            },
            advanced: {
              name: "DM/MCh / Ph.D. in Medical Sciences / MBA/MHA/MPH",
              duration: "2-5 years",
              institutions: [
                "AIIMS New Delhi",
                "PGIMER Chandigarh",
                "SCTIMST Trivandrum",
                "CMC Vellore",
                "IISc Bangalore",
                "IIM Ahmedabad"
              ]
            }
          }
        },
        {
          id: "bds",
          name: "BDS",
          description: "Bachelor of Dental Surgery, focusing on dental care, surgery, and oral health.",
          careerOptions: [
            "Private Dental Practitioner",
            "Hospital Consultant",
            "Academic Faculty"
          ],
          educationPath: {
            undergraduate: {
              name: "BDS",
              duration: "5 years",
              institutions: [
                "Manipal College of Dental Sciences",
                "Maulana Azad Institute of Dental Sciences, Delhi",
                "Government Dental College, Mumbai",
                "Christian Dental College, Ludhiana"
              ]
            },
            postgraduate: {
              name: "MDS",
              duration: "3 years",
              institutions: [
                "Manipal College of Dental Sciences",
                "AIIMS New Delhi",
                "Government Dental College, Chennai",
                "Maulana Azad Institute of Dental Sciences, Delhi"
              ]
            },
            advanced: {
              name: "Ph.D. in Dental Sciences / MPH in Dental Public Health",
              duration: "2-5 years",
              institutions: [
                "AIIMS New Delhi",
                "JNU Delhi",
                "Manipal University",
                "TISS Mumbai"
              ]
            }
          }
        },
        {
          id: "bams",
          name: "BAMS",
          description: "Bachelor of Ayurvedic Medicine and Surgery, focusing on traditional Indian medicine and holistic healthcare.",
          careerOptions: [
            "Ayurvedic Practitioner",
            "Panchakarma Therapist",
            "Integrative Medicine Consultant"
          ],
          educationPath: {
            undergraduate: {
              name: "BAMS",
              duration: "5.5 years",
              institutions: [
                "Banaras Hindu University, Varanasi",
                "Government Ayurvedic College, Nagpur",
                "National Institute of Ayurveda, Jaipur",
                "SDM College of Ayurveda, Udupi"
              ]
            },
            postgraduate: {
              name: "MD/MS in Ayurveda",
              duration: "3 years",
              institutions: [
                "BHU Varanasi",
                "National Institute of Ayurveda, Jaipur",
                "Government Ayurvedic College, Bangalore"
              ]
            },
            advanced: {
              name: "Ph.D. in Ayurveda",
              duration: "3-5 years",
              institutions: [
                "BHU Varanasi",
                "JNU Delhi",
                "CCRAS Research Institutes"
              ]
            }
          }
        },
        {
          id: "bhms",
          name: "BHMS",
          description: "Bachelor of Homeopathic Medicine and Surgery, focusing on homeopathic treatment and pharmacology.",
          careerOptions: [
            "Homeopathic Consultant",
            "Researcher in Homeopathic Pharmacology",
            "Teaching Faculty"
          ],
          educationPath: {
            undergraduate: {
              name: "BHMS",
              duration: "5.5 years",
              institutions: [
                "National Institute of Homeopathy, Kolkata",
                "Nehru Homeopathic Medical College, Delhi",
                "JSPS Government Homeopathic College, Hyderabad",
                "Bakson Homeopathy Medical College, Noida"
              ]
            },
            postgraduate: {
              name: "MD in Homeopathy",
              duration: "3 years",
              institutions: [
                "National Institute of Homeopathy, Kolkata",
                "Nehru Homeopathic Medical College, Delhi"
              ]
            },
            advanced: {
              name: "Ph.D. in Homeopathic Sciences",
              duration: "3-5 years",
              institutions: [
                "JNU Delhi",
                "CCRH Research Institutes",
                "National Institute of Homeopathy, Kolkata"
              ]
            }
          }
        },
        {
          id: "bums",
          name: "BUMS",
          description: "Bachelor of Unani Medicine and Surgery, focusing on traditional Unani medicine and herbal pharmacology.",
          careerOptions: [
            "Unani Practitioner",
            "Integrative Medicine Consultant"
          ],
          educationPath: {
            undergraduate: {
              name: "BUMS",
              duration: "5.5 years",
              institutions: [
                "Aligarh Muslim University, Aligarh",
                "Jamia Hamdard, New Delhi",
                "Government Nizamia Tibbiya College, Hyderabad",
                "Ajmal Khan Tibbiya College, Aligarh"
              ]
            },
            postgraduate: {
              name: "MD in Unani",
              duration: "3 years",
              institutions: [
                "Aligarh Muslim University, Aligarh",
                "Jamia Hamdard, New Delhi"
              ]
            },
            advanced: {
              name: "Ph.D. in Unani Medicine",
              duration: "3-5 years",
              institutions: [
                "Jamia Hamdard, New Delhi",
                "CCRUN Research Institutes",
                "JNU Delhi"
              ]
            }
          }
        },
        {
          id: "nursing",
          name: "Nursing",
          description: "Training in patient care, specialty nursing, and community health nursing.",
          careerOptions: [
            "Staff Nurse",
            "Charge Nurse",
            "Specialty Nurse (ICU, OT, ER)",
            "Community Health Nurse"
          ],
          educationPath: {
            undergraduate: {
              name: "B.Sc. Nursing / Post-Basic B.Sc. Nursing",
              duration: "2-4 years",
              institutions: [
                "AIIMS New Delhi",
                "CMC Vellore",
                "JIPMER Puducherry",
                "Manipal College of Nursing",
                "IGNOU"
              ]
            },
            postgraduate: {
              name: "M.Sc. Nursing",
              duration: "2 years",
              institutions: [
                "AIIMS New Delhi",
                "CMC Vellore",
                "PGIMER Chandigarh",
                "Manipal College of Nursing"
              ]
            },
            advanced: {
              name: "Ph.D. in Nursing / MBA/MHA",
              duration: "2-5 years",
              institutions: [
                "AIIMS New Delhi",
                "CMC Vellore",
                "Manipal University",
                "TISS Mumbai",
                "IIM Ahmedabad"
              ]
            }
          }
        },
        {
          id: "physiotherapy",
          name: "Physiotherapy",
          description: "Rehabilitation and physical therapy for injury recovery and mobility improvement.",
          careerOptions: [
            "Physiotherapist",
            "Community Physiotherapist",
            "Sports Physiotherapist"
          ],
          educationPath: {
            undergraduate: {
              name: "BPT",
              duration: "4.5 years",
              institutions: [
                "CMC Vellore",
                "Manipal College of Health Professions",
                "Jamia Millia Islamia, New Delhi",
                "SRM Institute, Chennai"
              ]
            },
            postgraduate: {
              name: "MPT",
              duration: "2 years",
              institutions: [
                "CMC Vellore",
                "Manipal College of Health Professions",
                "Jamia Millia Islamia, New Delhi"
              ]
            },
            advanced: {
              name: "Ph.D. in Physiotherapy",
              duration: "3-5 years",
              institutions: [
                "Manipal University",
                "Jamia Millia Islamia, New Delhi",
                "CMF’s College of Physiotherapy, Pune"
              ]
            }
          }
        },
        {
          id: "occupational-therapy",
          name: "Occupational Therapy",
          description: "Therapy to improve daily living and work skills in patients with physical or mental challenges.",
          careerOptions: [
            "Occupational Therapist",
            "Special Education Therapist",
            "Community Health Therapist"
          ],
          educationPath: {
            undergraduate: {
              name: "BOT",
              duration: "4.5 years",
              institutions: [
                "AIIMS New Delhi",
                "Manipal College of Health Professions",
                "Jamia Millia Islamia, New Delhi",
                "Seth GS Medical College, Mumbai"
              ]
            },
            postgraduate: {
              name: "M.O.T.",
              duration: "2 years",
              institutions: [
                "AIIMS New Delhi",
                "Manipal College of Health Professions",
                "Jamia Millia Islamia, New Delhi"
              ]
            },
            advanced: {
              name: "Ph.D. in Occupational Therapy",
              duration: "3-5 years",
              institutions: [
                "Manipal University",
                "Jamia Millia Islamia, New Delhi",
                "AIIMS New Delhi"
              ]
            }
          }
        },
        {
          id: "pharmacy",
          name: "Pharmacy",
          description: "Study of drug development, dispensing, and pharmaceutical care.",
          careerOptions: [
            "Hospital Pharmacist",
            "Clinical Pharmacist",
            "Regulatory Affairs Specialist",
            "Pharmaceutical Researcher"
          ],
          educationPath: {
            undergraduate: {
              name: "B.Pharm / PharmD",
              duration: "4-6 years",
              institutions: [
                "Manipal College of Pharmaceutical Sciences",
                "Jamia Hamdard, New Delhi",
                "JSS College of Pharmacy, Mysore",
                "BITS Pilani",
                "SRM Institute, Chennai"
              ]
            },
            postgraduate: {
              name: "M.Pharm",
              duration: "2 years",
              institutions: [
                "Manipal College of Pharmaceutical Sciences",
                "Jamia Hamdard, New Delhi",
                "NIPER Mohali",
                "JSS College of Pharmacy, Mysore"
              ]
            },
            advanced: {
              name: "Ph.D. in Pharmaceutical Sciences / MBA in Pharmaceutical Management",
              duration: "2-5 years",
              institutions: [
                "NIPER Mohali",
                "Jamia Hamdard, New Delhi",
                "Manipal University",
                "NMIMS Mumbai"
              ]
            }
          }
        },
        {
          id: "allied-health-sciences",
          name: "Allied Health Sciences",
          description: "Technical and diagnostic support roles in healthcare, including lab technology, radiography, and emergency care.",
          careerOptions: [
            "Medical Lab Technologist",
            "Radiographer",
            "Anaesthesia Technologist",
            "Cardiovascular Technologist",
            "Emergency Medical Technician"
          ],
          educationPath: {
            undergraduate: {
              name: "B.Sc. Medical Lab Technology / Radiography & Imaging Technology / Anaesthesia Technology / Cardiovascular Technology",
              duration: "3-4 years",
              institutions: [
                "AIIMS New Delhi",
                "CMC Vellore",
                "Manipal College of Health Professions",
                "JIPMER Puducherry",
                "SRM Institute, Chennai"
              ]
            },
            postgraduate: {
              name: "M.Sc. Medical Lab Technology / Radiography / Anaesthesia Technology / Cardiovascular Technology",
              duration: "2 years",
              institutions: [
                "AIIMS New Delhi",
                "CMC Vellore",
                "Manipal University"
              ]
            },
            advanced: {
              name: "Ph.D. in Allied Health Sciences / MBA in Hospital Administration",
              duration: "2-5 years",
              institutions: [
                "Manipal University",
                "AIIMS New Delhi",
                "JNU Delhi",
                "TISS Mumbai",
                "IIM Ahmedabad"
              ]
            }
          }
        },
        {
          id: "public-health",
          name: "Public Health & Health Management",
          description: "Study of population health, epidemiology, and healthcare management.",
          careerOptions: [
            "Public Health Specialist",
            "Epidemiologist",
            "Health Program Manager",
            "Policy Analyst",
            "Community Health Coordinator"
          ],
          educationPath: {
            undergraduate: {
              name: "B.Sc. Public Health",
              duration: "3-4 years",
              institutions: [
                "Manipal University",
                "SRM Institute, Chennai",
                "Amity University, Noida",
                "Christ University, Bangalore"
              ]
            },
            postgraduate: {
              name: "Master of Public Health (MPH) / Master of Health Administration (MHA)",
              duration: "2 years",
              institutions: [
                "TISS Mumbai",
                "JNU Delhi",
                "Manipal University",
                "AIIMS New Delhi",
                "FMS Delhi"
              ]
            },
            advanced: {
              name: "Ph.D. in Public Health / MBA in Healthcare Management",
              duration: "2-5 years",
              institutions: [
                "TISS Mumbai",
                "JNU Delhi",
                "AIIMS New Delhi",
                "IIM Ahmedabad"
              ]
            }
          }
        },
        {
          id: "research-medical-sciences",
          name: "Research & Basic Medical Sciences",
          description: "Research in fundamental medical sciences like anatomy, biochemistry, and genetics.",
          careerOptions: [
            "Medical Research Scientist",
            "Clinical Trials Researcher",
            "Teaching Faculty"
          ],
          educationPath: {
            undergraduate: {
              name: "B.Sc. Medical Sciences",
              duration: "3-4 years",
              institutions: [
                "AIIMS New Delhi",
                "JNU Delhi",
                "BHU Varanasi",
                "Manipal University"
              ]
            },
            postgraduate: {
              name: "M.Sc. Medical Sciences",
              duration: "2 years",
              institutions: [
                "AIIMS New Delhi",
                "JNU Delhi",
                "BHU Varanasi",
                "Manipal University"
              ]
            },
            advanced: {
              name: "Ph.D. in Medical Sciences / Integrated Ph.D. Programs",
              duration: "3-6 years",
              institutions: [
                "IISc Bangalore",
                "TIFR Mumbai",
                "JNU Delhi",
                "AIIMS New Delhi"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "intl_licensing_paths",
      "icon": "🌏",
      "name": "International Licensing Exams (USMLE, PLAB, AMC)",
      "description": "Pathways for Indian MBBS graduates to practice medicine in the USA, UK, and Australia through internationally recognized licensing exams like USMLE, PLAB, and AMC.",
      "subdomains": [
        {
          "id": "intl_licensing_paths",
          "name": "International Licensing Exams (USMLE, PLAB, AMC)",
          "description": "Pathways for Indian MBBS graduates to practice medicine in the USA, UK, and Australia through internationally recognized licensing exams like USMLE, PLAB, and AMC.",
          "careerOptions": [
            "Licensed Medical Practitioner (USA/UK/Australia)",
            "Clinical Researcher",
            "Hospital Resident or Fellow",
            "Public Health Specialist",
            "Medical Consultant in Global Health"
          ],
          "educationPath": {
            "undergraduate": {
              "name": "MBBS (India or Abroad)",
              "duration": "5.5 years",
              "institutions": [
                "AIIMS New Delhi",
                "JIPMER Puducherry",
                "CMC Vellore",
                "Tbilisi State Medical University",
                "AMA School of Medicine, Philippines"
              ]
            },
            "postgraduate": {
              "name": "Residency / Fellowship via Licensing Exams",
              "duration": "2-6 years",
              "institutions": [
                "USMLE Pathway - USA: Step 1, Step 2 CK, Step 3 → Residency via NRMP",
                "PLAB Pathway - UK: PLAB 1 & PLAB 2 → GMC Registration → Foundation Training",
                "AMC Pathway - Australia: AMC MCQ + Clinical Exam → Internship → General Registration"
              ]
            },
            "advanced": {}
          }
        }
      ]
    },
    {
      id: "commerce-management",
      icon: "💰",
      name: "Commerce and Management",
      description: "Commerce is the study of trade, finance, business, and economics. It equips students with knowledge about how the economy works, how businesses run, and how money flows in the real world. If you're interested in numbers, markets, law, or entrepreneurship—this is your stream! ",
      subdomains: [
        {
          id: "numbers-finance",
          name: "Numbers & Finance",
          description: "Courses focusing on financial analysis, accounting, and investment strategies.",
          careerOptions: [
            "Chartered Accountant",
            "Financial Analyst",
            "Investment Banker",
            "Cost Accountant",
            "Tax Consultant"
          ],
          educationPath: {
            undergraduate: {
              name: "B.Com / B.Com (Hons) / BBA (Finance)",
              duration: "3 years",
              institutions: [
                "Shri Ram College of Commerce, Delhi",
                "Hindu College, Delhi",
                "Loyola College, Chennai",
                "St. Xavier’s College, Mumbai",
                "Christ University, Bangalore"
              ]
            },
            postgraduate: {
              name: "M.Com / MBA (Finance)",
              duration: "2 years",
              institutions: [
                "University of Delhi",
                "Jamia Millia Islamia, New Delhi",
                "Christ University, Bangalore",
                "IIM Ahmedabad",
                "IIM Bangalore"
              ]
            },
            advanced: {
              name: "Professional Courses (CA, CMA, ACCA)",
              duration: "2-5 years",
              institutions: [
                "Institute of Chartered Accountants of India",
                "Institute of Cost Accountants of India",
                "ACCA Global"
              ]
            }
          }
        },
        {
          id: "business-leadership",
          name: "Business & Leadership",
          description: "Courses focusing on managing organizations, entrepreneurship, and strategic leadership.",
          careerOptions: [
            "Business Manager",
            "Entrepreneur",
            "Marketing Manager",
            "HR Manager",
            "Operations Manager"
          ],
          educationPath: {
            undergraduate: {
              name: "BBA / BMS / Integrated Management Program",
              duration: "3-5 years",
              institutions: [
                "Christ University, Bangalore",
                "Loyola College, Chennai",
                "St. Xavier’s College, Mumbai",
                "IIM Indore",
                "IIM Kozhikode"
              ]
            },
            postgraduate: {
              name: "MBA (Marketing, HR, Operations)",
              duration: "2 years",
              institutions: [
                "IIM Calcutta",
                "IIM Lucknow",
                "XLRI Jamshedpur",
                "Symbiosis Institute of Business Management, Pune"
              ]
            },
            advanced: {
              name: "Ph.D. in Management",
              duration: "3-5 years",
              institutions: [
                "IIM Ahmedabad",
                "IIM Bangalore",
                "XLRI Jamshedpur",
                "IIT Delhi"
              ]
            }
          }
        },
        {
          id: "law",
          name: "Law",
          description: "Analytical Thinking, Integrity, Attention to Detail, Persuasive Communication, Emotional Intelligence, Sounds you? You can be a lawyer!",
          careerOptions: [
            "Corporate Lawyer",
            "Legal Consultant",
            "Compliance Officer",
            "Tax Lawyer",
            "Intellectual Property Lawyer"
          ],
          educationPath: {
            undergraduate: {
              name: "B.Com + LLB / BBA + LLB / LL.B (3-Year Law Program for Graduates)",
              duration: "3-5 years",
              institutions: [
                "NLU Delhi",
                "Symbiosis Law School, Pune",
                "Christ University, Bangalore",
                "Amity University, Noida",
                "NLU Bangalore",
                "NUALS Kochi",
                "Government Law College, Ernakulam",
                "Government Law College, Thiruvananthapuram",
                "Government Law College, Kozhikode",
                "Government Law College, Thrissur",
                "Faculty of Law, University of Delhi (DU)",
                "Faculty of Law, Banaras Hindu University (BHU)",
                "Government Law College, Mumbai",
                "Symbiosis Law School, Pune",
                "ILS Law College, Pune",
                "University of Mumbai, Dept. of Law",
                "Dr. Ambedkar Government Law College, Chennai",
                "Punjab University, Chandigarh",
                "Kerala Law Academy Law College, Thiruvananthapuram",
                "School of Indian Legal Thought, Kottayam (MG University)"
              ]
            },
            postgraduate: {
              name: "LLM",
              duration: "1-2 years",
              institutions: [
                "NLU Delhi",
                "NUALS Kochi",
                "Government law colleges, Calicut, trivandrum",
                "Indian Law Institute (ILI), Delhi",
                "Faculty of Law, University of Delhi (DU)",
                "National Academy of Legal Studies and Research (NALSAR), Hyderabad",
                "JNU Delhi",
                "Symbiosis Law School, Pune",
                "Christ University, Bangalore"
              ]
            },
            advanced: {
              name: "Ph.D. in Law",
              duration: "3-5 years",
              institutions: [
                "NLU Delhi",
                "NUALS Kochi",
                "JNU Delhi",
                "NLU Bangalore",
                "Symbiosis Law School, Pune"
              ]
            }
          }
        },
        {
          id: "banking-insurance",
          name: "Banking & Insurance",
          description: "Courses focusing on financial services, banking operations, and insurance management.",
          careerOptions: [
            "Bank Manager",
            "Insurance Underwriter",
            "Risk Analyst",
            "Financial Advisor",
            "Loan Officer"
          ],
          educationPath: {
            undergraduate: {
              name: "B.Com (Banking) / BBA (Banking & Insurance) / Integrated Management Programs (BBA+MBA) / Bachelor of Management Studies (BMS)",
              duration: "3-5 years",
              institutions: [
                "Shri Ram College of Commerce, Delhi",
                "Christ University, Bangalore",
                "Loyola College, Chennai",
                "St. Xavier’s College, Mumbai",
                "Amity University, Noida",
                "IIM Indore",
                "IIM Rohtak",
                "IIM Ranchi",
                "IIM Jammu",
                "IIM Bodh Gaya",
                "IIM Kozhikode"
              ]
            },
            postgraduate: {
              name: "MBA (Banking & Finance)",
              duration: "2 years",
              institutions: [
                "IIM Ahmedabad",
                "IIM Bangalore",
                "Symbiosis Institute of Business Management, Pune",
                "Jamia Millia Islamia, New Delhi"
              ]
            },
            advanced: {
              name: "Ph.D. in Finance",
              duration: "3-5 years",
              institutions: [
                "IIM Ahmedabad",
                "IIM Bangalore",
                "XLRI Jamshedpur",
                "IIT Delhi"
              ]
            }
          }
        },
        {
          id: "technology-commerce",
          name: "Technology + Commerce",
          description: "Courses integrating technology with commerce for digital business and analytics.",
          careerOptions: [
            "Business Analyst",
            "Digital Marketing Manager",
            "E-commerce Specialist",
            "Data Analyst",
            "IT Consultant"
          ],
          educationPath: {
            undergraduate: {
              name: "BBA (Digital Marketing) / B.Com with Computer Applications / BCA",
              duration: "3 years",
              institutions: [
                "Christ University, Bangalore",
                "Amity University, Noida",
                "Symbiosis Institute of Business Management, Pune",
                "IIM Indore",
                "Loyola College, Chennai",
                "St. Xavier’s College, Mumbai"
              ]
            },
            postgraduate: {
              name: "MCA / MBA (Business Analytics, IT & Systems)",
              duration: "2 years",
              institutions: [
                "NIT Trichy",
                "JNU Delhi",
                "Christ University, Bangalore",
                "Symbiosis Institute of Computer Studies, Pune",
                "IIM Bangalore",
                "IIM Calcutta"
              ]
            },
            advanced: {
              name: "Ph.D. in Business Analytics",
              duration: "3-5 years",
              institutions: [
                "IIM Bangalore",
                "IIM Calcutta",
                "XLRI Jamshedpur",
                "IIT Delhi"
              ]
            }
          }
        },
        {
          id: "emerging-careers",
          name: "Emerging Careers",
          description: "Courses supporting innovative and trending career paths in commerce and management.",
          careerOptions: [
            "FinTech Specialist ",
            "Media Manager",
            "Economist",
            "Sustainability Consultant (ESG) ",
            "Advertising Specialist",
            "Forensic Accountant",
            "Startup Consultant"
          ],
          educationPath: {
            undergraduate: {
              name: "BBA in Hospitality / BHM / BMM / B.A. Economics",
              duration: "3-4 years",
              institutions: [
                "Christ University, Bangalore",
                "Amity University, Noida",
                "IHM Mumbai",
                "IHM Delhi",
                "St. Xavier’s College, Mumbai",
                "Shri Ram College of Commerce, Delhi"
              ]
            },
            postgraduate: {
              name: "MBA (Hospitality Management, Media & Advertising, International Business) / M.A. Economics / M.Com / MBA / M.Sc / PGDM in Forensic Accounting, Fraud Detection, Financial Forensics / PGDM in Sustainability, ESG, Environmental Management, CSR / M.Tech in FinTech, Data Science, Blockchain, Digital Finance /  M.A. in Entrepreneurship, Startup Consulting, Innovation Management",
              duration: "2 years",
              institutions: [
                "IIM Lucknow",
                "Symbiosis Institute of Business Management, Pune",
                "Christ University, Bangalore",
                "Delhi School of Economics",
                "JNU Delhi"
              ]
            },
            advanced: {
              name: "Ph.D. in Economics / Management | PhD in Forensic Accounting / Financial Crime / Accounting & Law | PhD in Sustainability, ESG, Environmental Economics, CSR",
              duration: "3-5 years",
              institutions: [
                "IIM Calcutta",
                "XLRI Jamshedpur",
                "Delhi School of Economics",
                "JNU Delhi"
              ]
            },
          }
        }]
    },
    {
      id: "social-science-humanities",
      icon: "👥",
      name: "Social Sciences and Humanities",
      description: "Explore career pathways in social sciences and humanities, offering diverse academic and vocational options after Class 10 and 12, with structured progression and career opportunities.",
      subdomains: [
        {
          id: "social-sciences",
          name: "Social Sciences",
          description: "Study of human society, behavior, and institutions, with flexible academic and career pathways.",
          careerOptions: [
            "Social Researcher",
            "Policy Analyst",
            "NGO Worker",
            "Academic Researcher",
            "Community Development Officer",
            "Public Administrator"
          ],
          educationPath: {
            undergraduate: {
              name: "B.A. Social Sciences / Integrated M.A. Social Sciences",
              duration: "3-5 years",
              institutions: [
                "Hindu College, Delhi",
                "St. Stephen’s College, Delhi",
                "Lady Shri Ram College, Delhi",
                "Loyola College, Chennai",
                "TISS Mumbai",
                "Ashoka University, Sonipat"
              ]
            },
            postgraduate: {
              name: "M.A. Social Sciences",
              duration: "2 years",
              institutions: [
                "JNU Delhi",
                "TISS Mumbai",
                "Delhi School of Economics",
                "Jadavpur University, Kolkata"
              ]
            },
            advanced: {
              name: "Ph.D. in Social Sciences",
              duration: "3-5 years",
              institutions: [
                "JNU Delhi",
                "TISS Mumbai",
                "University of Delhi",
                "IIT Bombay"
              ]
            }
          }
        },
        {
          id: "humanities",
          name: "Humanities",
          description: "Study of culture, history, and human thought, with diverse academic and creative career paths.",
          careerOptions: [
            "Academic Researcher",
            "Content Writer",
            "Educator",
            "Cultural Analyst",
            "Heritage Manager",
            "Civil Services Officer"
          ],
          educationPath: {
            undergraduate: {
              name: "B.A. Humanities / Integrated M.A. Humanities",
              duration: "3-5 years",
              institutions: [
                "St. Stephen’s College, Delhi",
                "Hindu College, Delhi",
                "Presidency University, Kolkata",
                "Loyola College, Chennai",
                "Ashoka University, Sonipat",
                "Shiv Nadar University, Greater Noida"
              ]
            },
            postgraduate: {
              name: "M.A. Humanities",
              duration: "2 years",
              institutions: [
                "JNU Delhi",
                "University of Delhi",
                "Jadavpur University, Kolkata",
                "Hyderabad Central University"
              ]
            },
            advanced: {
              name: "Ph.D. in Humanities",
              duration: "3-5 years",
              institutions: [
                "JNU Delhi",
                "University of Delhi",
                "Jadavpur University, Kolkata",
                "TISS Mumbai"
              ]
            }
          }
        },
        {
          id: "social-work",
          name: "Social Work",
          description: "Study and practice of addressing social issues and community welfare.",
          careerOptions: [
            "Social Worker",
            "NGO Coordinator",
            "Community Development Officer",
            "Counselor",
            "Policy Advocate",
            "Academic Researcher"
          ],
          educationPath: {
            undergraduate: {
              name: "B.S.W. (Bachelor of Social Work) / Diploma in Social Work",
              duration: "1-4 years",
              institutions: [
                "TISS Mumbai",
                "Madras School of Social Work, Chennai",
                "Christ University, Bangalore",
                "Jamia Millia Islamia, Delhi",
                "IGNOU, Delhi"
              ]
            },
            postgraduate: {
              name: "M.S.W. (Master of Social Work)",
              duration: "2 years",
              institutions: [
                "TISS Mumbai",
                "JNU Delhi",
                "Delhi School of Social Work",
                "Christ University, Bangalore"
              ]
            },
            advanced: {
              name: "Ph.D. in Social Work",
              duration: "3-5 years",
              institutions: [
                "TISS Mumbai",
                "JNU Delhi",
                "University of Delhi",
                "BHU Varanasi"
              ]
            }
          }
        },
        {
          id: "journalism-mass-communication",
          name: "Journalism and Mass Communication",
          description: "Study of media, communication, and journalism practices.",
          careerOptions: [
            "Journalist",
            "Media Producer",
            "Public Relations Specialist",
            "Content Creator",
            "Academic Researcher",
            "Advertising Professional"
          ],
          educationPath: {
            undergraduate: {
              name: "B.J.M.C. (Bachelor of Journalism and Mass Communication) / Certificate Course in Journalism",
              duration: "6 months-4 years",
              institutions: [
                "IIMC Delhi",
                "Symbiosis Institute of Media and Communication, Pune",
                "Christ University, Bangalore",
                "Manipal Institute of Communication",
                "Xavier Institute of Communications, Mumbai"
              ]
            },
            postgraduate: {
              name: "M.J.M.C. (Master of Journalism and Mass Communication)",
              duration: "2 years",
              institutions: [
                "IIMC Delhi",
                "JNU Delhi",
                "Symbiosis Institute of Media and Communication, Pune",
                "Jamia Millia Islamia, Delhi"
              ]
            },
            advanced: {
              name: "Ph.D. in Mass Communication",
              duration: "3-5 years",
              institutions: [
                "JNU Delhi",
                "Jamia Millia Islamia, Delhi",
                "University of Delhi",
                "TISS Mumbai"
              ]
            }
          }
        },
        {
          id: "liberal-arts",
          name: "Liberal Arts",
          description: "Interdisciplinary study of humanities, social sciences, and arts, fostering critical thinking and creativity.",
          careerOptions: [
            "Academic Researcher",
            "Content Strategist",
            "Policy Analyst",
            "Cultural Analyst",
            "Educator",
            "Social Entrepreneur"
          ],
          educationPath: {
            undergraduate: {
              name: "B.A. Liberal Arts / Integrated M.A. Liberal Arts",
              duration: "3-5 years",
              institutions: [
                "Ashoka University, Sonipat",
                "Shiv Nadar University, Greater Noida",
                "FLAME University, Pune",
                "Symbiosis School for Liberal Arts, Pune"
              ]
            },
            postgraduate: {
              name: "M.A. Liberal Arts / Interdisciplinary Studies",
              duration: "2 years",
              institutions: [
                "Ashoka University, Sonipat",
                "Shiv Nadar University, Greater Noida",
                "JNU Delhi",
                "TISS Mumbai"
              ]
            },
            advanced: {
              name: "Ph.D. in Liberal Arts / Interdisciplinary Studies",
              duration: "3-5 years",
              institutions: [
                "JNU Delhi",
                "TISS Mumbai",
                "Ashoka University, Sonipat",
                "IIT Bombay"
              ]
            }
          }
        },
        {
          id: "psychology",
          name: "Psychology",
          description: "Study of human behavior and mental processes, with academic and professional pathways.",
          careerOptions: [
            "Clinical Psychologist",
            "Counseling Psychologist",
            "Industrial Psychologist",
            "Academic Researcher",
            "HR Consultant",
            "School Counselor"
          ],
          educationPath: {
            undergraduate: {
              name: "B.A. Psychology / B.Sc. Psychology / Integrated M.A. Psychology",
              duration: "3-5 years",
              institutions: [
                "Lady Shri Ram College, Delhi",
                "Christ University, Bangalore",
                "St. Xavier’s College, Mumbai",
                "Fergusson College, Pune",
                "TISS Mumbai",
                "Ashoka University, Sonipat"
              ]
            },
            postgraduate: {
              name: "M.A. Psychology / M.Sc. Psychology",
              duration: "2 years",
              institutions: [
                "JNU Delhi",
                "University of Delhi",
                "TISS Mumbai",
                "Ambedkar University, Delhi"
              ]
            },
            advanced: {
              name: "Ph.D. in Psychology",
              duration: "3-5 years",
              institutions: [
                "NIMHANS Bangalore",
                "JNU Delhi",
                "TISS Mumbai",
                "University of Delhi"
              ]
            }
          }
        },
        {
          id: "anthropology",
          name: "Anthropology",
          description: "Study of human societies, cultures, and their development.",
          careerOptions: [
            "Anthropologist",
            "Cultural Resource Manager",
            "Academic Researcher",
            "NGO Consultant",
            "Ethnographer",
            "Museum Curator"
          ],
          educationPath: {
            undergraduate: {
              name: "B.A. Anthropology",
              duration: "3-4 years",
              institutions: [
                "Hindu College, Delhi",
                "Hansraj College, Delhi",
                "Fergusson College, Pune",
                "St. Xavier’s College, Mumbai"
              ]
            },
            postgraduate: {
              name: "M.A. Anthropology",
              duration: "2 years",
              institutions: [
                "JNU Delhi",
                "University of Delhi",
                "BHU Varanasi",
                "Hyderabad Central University"
              ]
            },
            advanced: {
              name: "Ph.D. in Anthropology",
              duration: "3-5 years",
              institutions: [
                "JNU Delhi",
                "University of Delhi",
                "TISS Mumbai",
                "BHU Varanasi"
              ]
            }
          }
        },
        {
          id: "communication-design",
          name: "Communication Design",
          description: "Study of visual and creative communication through design and media.",
          careerOptions: [
            "Graphic Designer",
            "Visual Communication Specialist",
            "Art Director",
            "UI/UX Designer",
            "Advertising Professional",
            "Creative Consultant"
          ],
          educationPath: {
            undergraduate: {
              name: "B.Des. Communication Design / Visual Arts",
              duration: "4 years",
              institutions: [
                "NID Ahmedabad",
                "NIFT Delhi",
                "Srishti Institute of Art, Design and Technology, Bangalore",
                "MIT Institute of Design, Pune"
              ]
            },
            postgraduate: {
              name: "M.Des. Communication Design",
              duration: "2 years",
              institutions: [
                "NID Ahmedabad",
                "NIFT Delhi",
                "IIT Bombay",
                "Srishti Institute of Art, Design and Technology, Bangalore"
              ]
            },
            advanced: {
              name: "Ph.D. in Design",
              duration: "3-5 years",
              institutions: [
                "IIT Bombay",
                "NID Ahmedabad",
                "JNU Delhi",
                "TISS Mumbai"
              ]
            }
          }
        },
        {
          id: "vocational-studies",
          name: "Vocational Studies",
          description: "Practical and skill-based training in arts, communication, and languages for immediate career or further studies.",
          careerOptions: [
            "Freelance Writer",
            "Language Trainer",
            "Content Creator",
            "Media Assistant",
            "Community Organizer",
            "Event Coordinator"
          ],
          educationPath: {
            undergraduate: {
              name: "Vocational Course in Arts / Certificate Course in Journalism / Communication / Languages",
              duration: "6 months-2 years",
              institutions: [
                "IGNOU, Delhi",
                "YMCA Institute for Media Studies, Delhi",
                "Annamalai University, Tamil Nadu",
                "Madras Christian College, Chennai",
                "IIMC Delhi",
                "Xavier Institute of Communications, Mumbai"
              ]
            },
            postgraduate: {
              name: "B.A. Social Sciences / Humanities / B.J.M.C.",
              duration: "3-4 years",
              institutions: [
                "Hindu College, Delhi",
                "St. Stephen’s College, Delhi",
                "Lady Shri Ram College, Delhi",
                "Loyola College, Chennai",
                "IIMC Delhi",
                "Symbiosis Institute of Media and Communication, Pune"
              ]
            },
            advanced: {
              name: "M.A. Social Sciences / Humanities / M.J.M.C.",
              duration: "2 years",
              institutions: [
                "JNU Delhi",
                "TISS Mumbai",
                "University of Delhi",
                "Jadavpur University, Kolkata",
                "IIMC Delhi",
                "Jamia Millia Islamia, Delhi"
              ]
            }
          }
        }
      ]
    },
    {
      id: "short-term-career-programs",
      icon: "💼",
      name: "Short-Term Career Programs",
      description: "Explore short-term, skill-based programs after 10th/12th for quick entry into high-demand industries like technology, marketing, logistics, and skilled trades.",
      subdomains: [
        {
          id: "artificial-intelligence-machine-learning",
          name: "Artificial Intelligence & Machine Learning",
          description: "Study of AI and machine learning for developing intelligent systems, suitable for 12th pass students with a math background.",
          careerOptions: [
            "AI Developer",
            "Machine Learning Engineer",
            "Data Scientist",
            "AI Analyst"
          ],
          educationPath: {
            undergraduate: {
              name: "Certificate in Intro to AI, Python for AI, Applied ML",
              duration: "6-12 months",
              institutions: [
                "IIT Madras (Online Diploma)",
                "NIELIT Delhi"
              ]
            },
            postgraduate: {
              name: "Further Certifications in AI/ML",
              duration: "6-12 months",
              institutions: [
                "IIT Madras",
                "NIELIT Delhi"
              ]
            },
            advanced: {
              name: "Advanced Diplomas in AI/ML / Industry Experience",
              duration: "1-2 years",
              institutions: [
                "IIT Madras",
                "NIELIT Delhi"
              ]
            }
          }
        },
        {
          id: "data-science",
          name: "Data Science",
          description: "Study of data analysis, statistics, and machine learning for data-driven decision-making, suitable for 12th pass students.",
          careerOptions: [
            "Data Analyst",
            "Data Scientist",
            "Business Intelligence Analyst",
            "Data Engineer"
          ],
          educationPath: {
            undergraduate: {
              name: "Certificate in Python, Data Analysis, Statistics, Machine Learning",
              duration: "6-12 months",
              institutions: [
                "IIT Guwahati (Online)",
                "NIELIT Calicut",
                "NIELIT Chandigarh"
              ]
            },
            postgraduate: {
              name: "Further Certifications in Data Science",
              duration: "6-12 months",
              institutions: [
                "IIT Guwahati",
                "NIELIT Calicut"
              ]
            },
            advanced: {
              name: "Advanced Diplomas in Data Science / Industry Experience",
              duration: "1-2 years",
              institutions: [
                "IIT Guwahati",
                "NIELIT Calicut"
              ]
            }
          }
        },
        {
          id: "digital-marketing",
          name: "Digital Marketing",
          description: "Study of online marketing strategies including SEO, SEM, and social media, suitable for 12th pass students.",
          careerOptions: [
            "Digital Marketer",
            "SEO Specialist",
            "Social Media Manager",
            "Content Marketing Specialist"
          ],
          educationPath: {
            undergraduate: {
              name: "Certificate in SEO, SEM, SMM, Content Creation, Analytics",
              duration: "3-6 months",
              institutions: [
                "NIELIT Delhi",
                "NIELIT Calicut",
                "One Team Solutions (Kerala)"
              ]
            },
            postgraduate: {
              name: "Further Certifications in Digital Marketing",
              duration: "3-6 months",
              institutions: [
                "NIELIT Delhi",
                "One Team Solutions (Kerala)"
              ]
            },
            advanced: {
              name: "Advanced Diplomas in Digital Marketing / Industry Experience",
              duration: "6-12 months",

              institutions: [
                "NIELIT Delhi",
                "One Team Solutions (Kerala)"
              ]
            }
          }
        },
        {
          id: "logistics-supply-chain",
          name: "Logistics & Supply Chain Management",
          description: "Study of warehouse management, inventory, and shipping for efficient supply chains, suitable for 12th pass students.",
          careerOptions: [
            "Logistics Coordinator",
            "Supply Chain Analyst",
            "Warehouse Manager",
            "Trade Specialist"
          ],
          educationPath: {
            undergraduate: {
              name: "Certificate in Warehouse Management, Inventory, Shipping & Trade",
              duration: "6-9 months",
              institutions: [
                "IIT Delhi (CEP Certificate)",
                "Kerala Logistics Academy (Govt. of Kerala)"
              ]
            },
            postgraduate: {
              name: "Further Certifications in Logistics",
              duration: "6-9 months",
              institutions: [
                "IIT Delhi",
                "Kerala Logistics Academy"
              ]
            },
            advanced: {
              name: "Advanced Diplomas in Supply Chain Management / Industry Experience",
              duration: "1-2 years",
              institutions: [
                "IIT Delhi",
                "Kerala Logistics Academy"
              ]
            }
          }
        },
        {
          id: "embedded-systems-electronics",
          name: "Embedded Systems & Electronics",
          description: "Study of microcontroller programming, PCB design, and IoT for electronic systems, suitable for 12th pass students with science/math background.",
          careerOptions: [
            "Embedded Systems Engineer",
            "Electronics Technician",
            "IoT Developer",
            "PCB Designer"
          ],
          educationPath: {
            undergraduate: {
              name: "Certificate in Microcontroller Programming, PCB Design, IoT Basics",
              duration: "4-6 months",
              institutions: [
                "NIELIT Calicut"
              ]
            },
            postgraduate: {
              name: "Further Certifications in Embedded Systems",
              duration: "4-6 months",
              institutions: [
                "NIELIT Calicut"
              ]
            },
            advanced: {
              name: "Advanced Diplomas in Embedded Systems / Industry Experience",
              duration: "6-12 months",
              institutions: [
                "NIELIT Calicut"
              ]
            }
          }
        },
        {
          id: "web-app-development",
          name: "Web Development & App Development",
          description: "Study of web and app development using modern frameworks and languages, suitable for 12th pass students.",
          careerOptions: [
            "Web Developer",
            "Mobile App Developer",
            "Frontend Developer",
            "Full-Stack Developer"
          ],
          educationPath: {
            undergraduate: {
              name: "Certificate in HTML, CSS, JavaScript, React, Angular, Flutter, Java, Python",
              duration: "6-12 months",
              institutions: [
                "NIELIT Delhi",
                "NIELIT Calicut",
                "Brototype (Kerala)",
                "Liminar Technolab (Kerala)",
                "TAP Academy",
                "JSpiders (Java)",
                "QSpiders (DevOps)",
                "PSpiders (Python)"
              ]
            },
            postgraduate: {
              name: "Further Certifications in Web/App Development",
              duration: "6-12 months",
              institutions: [
                "NIELIT Delhi",
                "Brototype (Kerala)"
              ]
            },
            advanced: {
              name: "Advanced Diplomas in Web/App Development / Industry Experience",
              duration: "1-2 years",
              institutions: [

                "NIELIT Delhi",
                "Brototype (Kerala)"
              ]
            }
          }
        },
        {
          id: "cybersecurity",
          name: "Cybersecurity",
          description: "Study of network security, ethical hacking, and SOC analyst training for protecting digital systems, suitable for 12th pass students with science/IT background.",
          careerOptions: [
            "Cybersecurity Analyst",
            "Ethical Hacker",
            "SOC Analyst",
            "Security Consultant"
          ],
          educationPath: {
            undergraduate: {
              name: "Certificate in Network Security, Ethical Hacking, SOC Analyst Training",
              duration: "4-6 months",
              institutions: [
                "NIELIT Calicut",
                "NIELIT Chennai",
                "National Forensic Sciences University (NFSU), Gujarat",
                "RedTeam Hacker Academy (Kerala)"
              ]
            },
            postgraduate: {
              name: "Further Certifications in Cybersecurity",
              duration: "4-6 months",
              institutions: [
                "NIELIT Calicut",
                "NFSU Gujarat"
              ]
            },
            advanced: {
              name: "Advanced Diplomas in Cybersecurity / Industry Experience",
              duration: "6-12 months",
              institutions: [
                "NIELIT Calicut",
                "NFSU Gujarat"
              ]
            }
          }
        },
        {
          id: "polytechnic-skill-diplomas",
          name: "Polytechnic & Skill-based Diplomas",
          description: "Study of technical skills like CAD, CAM, and surveying for engineering applications, suitable for 10th/12th pass students.",
          careerOptions: [
            "CAD Designer",
            "CNC Operator",
            "Surveyor",
            "Mechanical Draughtsman"
          ],
          educationPath: {
            undergraduate: {
              name: "Certificate in CAD, CAM, CNC, Surveying, Mechanical Drawing",
              duration: "6-12 months",
              institutions: [
                "Pusa Polytechnic (Delhi)",
                "GPTC Kozhikode (Kerala Govt.)",
                "GPTC Kalamassery (Kerala Govt.)"
              ]
            },
            postgraduate: {
              name: "Further Certifications in Polytechnic Skills",
              duration: "6-12 months",
              institutions: [
                "Pusa Polytechnic (Delhi)",
                "GPTC Kozhikode"
              ]
            },
            advanced: {
              name: "Advanced Diplomas in Polytechnic / Industry Experience",
              duration: "1-2 years",
              institutions: [
                "Pusa Polytechnic (Delhi)",
                "GPTC Kozhikode"
              ]
            }
          }
        },
        {
          id: "iti-skilled-trades",
          name: "ITI Skilled Trades",
          description: "Vocational training in skilled trades like electrician, fitter, and mechanic, suitable for 10th pass students.",
          careerOptions: [
            "Electrician",
            "Fitter",
            "Mechanic",
            "Draughtsman",
            "COPA Technician"
          ],
          educationPath: {
            undergraduate: {
              name: "ITI Certificate in Electrician, Fitter, COPA, Mechanic, Draughtsman",
              duration: "6 months-1 year",
              institutions: [
                "Govt. ITI Kalamassery (Kerala)",
                "Govt. ITI Kozhikode (Kerala)",
                "Govt. ITI Attingal (Kerala)",
                "Don Bosco ITI Vaduthala (Kerala)",
                "Sir C.V. Raman ITI (Delhi)",
                "MES ITC Kunnukara (Kerala)"
              ]
            },
            postgraduate: {
              name: "Further ITI Certifications / Apprenticeships",
              duration: "6 months-1 year",
              institutions: [
                "Govt. ITI Kalamassery",
                "Sir C.V. Raman ITI (Delhi)"
              ]

            },
            advanced: {
              name: "Advanced ITI Diplomas / Industry Experience",
              duration: "1-2 years",
              institutions: [
                "Govt. ITI Kalamassery",
                "Sir C.V. Raman ITI (Delhi)"
              ]
            }
          }
        }
      ]
    },
    {
      id: "islamic-studies",
      icon: "🕌",
      name: "Islamic Studies",
      description: "Programs offered by leading Islamic universities, combining Islamic studies (Quranic sciences, Sharia, theology) with secular disciplines (medicine, engineering, business) for holistic education.",
      subdomains: [
        {
          id: "al-azhar-university",
          name: "Al-Azhar University (Egypt)",
          description: "Located in Cairo, Al-Azhar is a global leader in Sunni Islamic scholarship, offering Islamic and secular programs. Arabic proficiency required for Islamic studies; language courses available. Scholarships offered, co-educational with gender segregation.",
          careerOptions: [
            "Islamic Scholar",
            "Mufti",
            "Qari",
            "Medical Professional",
            "Engineer",
            "Business Administrator"
          ],
          educationPath: {
            undergraduate: {
              name: "Theology (Usul al-Din), Sharia, Arabic Language, Da’wah, Quranic Studies, Adhan Course, Medicine, Pharmacy, Dentistry, Engineering, Science, Agriculture, Business, Arts, Education",
              duration: "4-6 years",
              institutions: ["Al-Azhar University, Cairo"]
            },
            postgraduate: {
              name: "Master’s in Islamic Studies, Medicine, Engineering, Business, Sciences",
              duration: "2-3 years",
              institutions: ["Al-Azhar University, Cairo"]
            },
            advanced: {
              name: "PhD in Islamic Studies, Medical Sciences, Engineering, Humanities",
              duration: "3-5 years",
              institutions: ["Al-Azhar University, Cairo"]
            }
          }
        },
        {
          id: "islamic-university-madinah",
          name: "Islamic University of Madinah (Saudi Arabia)",
          description: "A male-only institution in Madinah, known for Islamic studies with Salafi influence and secular programs. Full scholarships available. Arabic proficiency required; language training provided.",
          careerOptions: [
            "Islamic Jurist",
            "Quranic Scholar",
            "Engineer",
            "Computer Scientist",
            "Lawyer"
          ],
          educationPath: {
            undergraduate: {
              name: "Sharia, Qur’an, Hadith, Da’wah, Arabic Language, Science (Physics, Chemistry, Mathematics), Engineering (Civil, Mechanical, Electrical, Computer), Computer Science, Law",
              duration: "4-5 years",
              institutions: ["Islamic University of Madinah"]
            },
            postgraduate: {
              name: "Master’s in Islamic Studies, Engineering, Sciences, Law",
              duration: "2-3 years",
              institutions: ["Islamic University of Madinah"]
            },
            advanced: {
              name: "PhD in Islamic Studies, Engineering, Computer Science, Law",
              duration: "3-5 years",
              institutions: ["Islamic University of Madinah"]
            }
          }
        },
        {
          id: "international-islamic-university-malaysia",
          name: "International Islamic University Malaysia (IIUM)",
          description: "Located in Kuala Lumpur, IIUM integrates Islamic and modern education, offering programs in English (Arabic for Islamic studies). Scholarships available, co-educational with gender segregation.",
          careerOptions: [
            "Islamic Theologian",
            "Lawyer",
            "Engineer",
            "Doctor",
            "Educator"
          ],
          educationPath: {
            undergraduate: {
              name: "Islamic Revealed Knowledge, Sharia and Law, Arabic Language, Law, Economics, Engineering, Architecture, IT, Medicine, Dentistry, Nursing, Pharmacy, Education, Languages, Humanities",
              duration: "4-6 years",
              institutions: ["IIUM, Kuala Lumpur"]
            },
            postgraduate: {
              name: "Master’s in Islamic Studies, Law, Medicine, Engineering, Education",
              duration: "2-3 years",
              institutions: ["IIUM, Kuala Lumpur"]
            },
            advanced: {
              name: "PhD in Islamic Studies, Sciences, Engineering, Humanities",
              duration: "3-5 years",
              institutions: ["IIUM, Kuala Lumpur"]
            }
          }
        },
        {
          id: "umm-al-qura-university",
          name: "Umm Al-Qura University (Makkah, Saudi Arabia)",
          description: "Based in Makkah, UQU offers Islamic and secular programs with separate male/female campuses. English for most programs, Arabic for Islamic studies. Scholarships available.",
          careerOptions: [
            "Sharia Expert",
            "Hajj Consultant",
            "Doctor",
            "Engineer",
            "Business Analyst"
          ],
          educationPath: {
            undergraduate: {
              name: "Sharia, Da’wah, Arabic Language, Quranic Studies, Hajj and Umrah Research, Medicine, Pharmacy, Dentistry, Public Health, Nursing, Engineering, Applied Sciences, Computer Science, Business, Social Sciences, Education",
              duration: "4-6 years",
              institutions: ["Umm Al-Qura University, Makkah"]
            },
            postgraduate: {
              name: "Master’s in Islamic Studies, Medicine, Engineering, Business, Sciences",
              duration: "2-3 years",
              institutions: ["Umm Al-Qura University, Makkah"]
            },
            advanced: {
              name: "PhD in Islamic Studies, Medical Sciences, Engineering, Social Sciences",
              duration: "3-5 years",
              institutions: ["Umm Al-Qura University, Makkah"]
            }
          }
        },
        {
          id: "jamia-al-hind-al-islamiyya",
          name: "Jamia Al Hind Al Islamiyya (Kerala, India)",
          description: "Located in Oorakam, Kerala, Jamia Al Hind focuses on Islamic scholarship inspired by Madinah University, offering regular, distance, and certificate courses. Includes women’s campus and modern teaching methods. Admission via entrance tests; scholarships available.",
          careerOptions: [
            "Islamic Scholar",
            "Quranic Memorizer",
            "Religious Educator",
            "Islamic Researcher"
          ],
          educationPath: {
            undergraduate: {
              name: "School of Qur’an (Quran Memorization, Tajweed, Arabic), Sharia College (Quranic Sciences, Aqeeda, Fiqh, Hadith), Hifz College (Quran Memorization, Tajweed), Certificate Courses (Quranic Sciences, Fiqh, Arabic), Ladies Campus (Islamic Higher Secondary, Islamic Degree)",
              duration: "1-17 years",
              institutions: ["Jamia Al Hind Al Islamiyya, Oorakam", "Green Valley Institute, Mukkam", "Ladies Campus, Panakkad"]
            },
            postgraduate: {
              name: "Kulliyathu Thaqassus (Advanced Islamic Studies, Research), Ladies Campus (Advanced Islamic Course), Al-Hikami Degree (Islamic Sciences)",
              duration: "1-3 years",
              institutions: ["Jamia Al Hind Al Islamiyya, Oorakam", "Ladies Campus, Panakkad"]
            },
            advanced: {
              name: "Advanced Research in Islamic Studies, Distance Education (Quran, Hadith, Fiqh)",
              duration: "2-5 years",
              institutions: ["Jamia Al Hind Al Islamiyya, Oorakam"]
            }
          }
        }
      ]
    },
    {
      id: "various-competitive-exams-india",
      icon: "🏆",
      name: "Various Competitive Exams in India",
      description: "Competitive exams for admission to top educational institutions, government jobs, and professional courses in India. Covers engineering, medical, law, management, civil services, and more. Check official websites (e.g., upsc.gov.in, nta.ac.in, ssc.nic.in, ibps.in) for 2025 schedules and eligibility.",
      subdomains: [
        {
          id: "engineering-entrance-exams",
          name: "Engineering Entrance Exams",
          description: "Exams for admission to undergraduate engineering programs in IITs, NITs, and other institutes. Typically require 12th pass with Physics, Chemistry, Mathematics.",
          careerOptions: [
            "Engineer",
            "Research Scientist",
            "Technical Consultant",
            "PSU Officer"
          ],
          educationPath: {
            undergraduate: {
              name: "JEE Main, JEE Advanced, BITSAT, VITEEE, GATE",
              duration: "1 day (exam duration)",
              institutions: [
                "National Testing Agency (JEE Main)",
                "IITs (JEE Advanced, GATE)",
                "BITS Pilani (BITSAT)",
                "VIT Vellore (VITEEE)"
              ]
            },
            postgraduate: {
              name: "Further Competitive Exams (e.g., GATE for M.Tech)",
              duration: "1 day",
              institutions: ["IITs", "IISc Bangalore"]
            },
            advanced: {
              name: "Specialized Certifications / Industry Entrance Tests",
              duration: "Varies",
              institutions: ["Various Technical Boards"]
            }
          }
        },
        {
          id: "medical-entrance-exams",
          name: "Medical Entrance Exams",
          description: "Exams for MBBS, BDS, and postgraduate medical courses. Require 12th pass with Physics, Chemistry, Biology for UG, MBBS for PG.",
          careerOptions: [
            "Doctor",
            "Surgeon",
            "Medical Researcher",
            "Dentist"
          ],
          educationPath: {
            undergraduate: {
              name: "NEET UG, NEET PG",
              duration: "1 day",
              institutions: ["National Testing Agency"]
            },
            postgraduate: {
              name: "Further Medical Entrance Exams (e.g., NEET PG)",
              duration: "1 day",
              institutions: ["National Testing Agency"]
            },
            advanced: {
              name: "Specialized Medical Certifications",
              duration: "Varies",
              institutions: ["Medical Council of India"]
            }
          }
        },
        {
          id: "law-entrance-exams",
          name: "Law Entrance Exams",
          description: "Exams for undergraduate and postgraduate law programs at NLUs and other law schools. Require 12th pass for UG, LLB for PG.",
          careerOptions: [
            "Lawyer",
            "Judge",
            "Legal Consultant",
            "Corporate Counsel"
          ],
          educationPath: {
            undergraduate: {
              name: "CLAT, AILET, LSAT India, Delhi University LLB Entrance Exam",
              duration: "1 day",
              institutions: [
                "Consortium of NLUs (CLAT)",
                "NLU Delhi (AILET)",
                "Pearson VUE (LSAT India)",
                "University of Delhi"
              ]
            },
            postgraduate: {
              name: "Further Law Entrance Exams (e.g., CLAT PG)",
              duration: "1 day",
              institutions: ["Consortium of NLUs"]
            },
            advanced: {
              name: "Specialized Legal Certifications",
              duration: "Varies",
              institutions: ["Bar Council of India"]
            }
          }
        },
        {
          id: "management-entrance-exams",
          name: "Management Entrance Exams",
          description: "Exams for MBA and PGDM programs at IIMs and other B-schools. Require Bachelor’s degree with minimum percentage.",
          careerOptions: [
            "Business Manager",
            "Consultant",
            "Entrepreneur",
            "Financial Analyst"
          ],
          educationPath: {
            undergraduate: {
              name: "CAT, CMAT, IIFT, XAT",
              duration: "1 day",
              institutions: [
                "IIMs (CAT)",
                "National Testing Agency (CMAT)",
                "IIFT (IIFT)",
                "XLRI Jamshedpur (XAT)"
              ]
            },
            postgraduate: {
              name: "Further Management Entrance Exams",
              duration: "1 day",
              institutions: ["IIMs", "AICTE"]
            },
            advanced: {
              name: "Executive MBA / Specialized Certifications",
              duration: "Varies",
              institutions: ["IIMs", "Private B-Schools"]
            }
          }
        },
        {
          id: "civil-services-government-jobs",
          name: "Civil Services and Government Jobs",
          description: "Exams for IAS, IPS, banking, and other government roles. Require Bachelor’s degree for most, 12th pass for some (e.g., SSC CHSL).",
          careerOptions: [
            "Civil Servant",
            "Bank Officer",
            "Government Auditor",
            "Policy Analyst"
          ],
          educationPath: {
            undergraduate: {
              name: "UPSC CSE, UPSC IES/ISS, UPSC ESE, SSC CGL, SSC CHSL, IBPS PO/Clerk, SBI PO/Clerk, RBI Grade B, NABARD Grade A/B, FCI",
              duration: "1-2 days (varies by stage)",
              institutions: [
                "UPSC",
                "Staff Selection Commission",
                "Institute of Banking Personnel Selection",
                "State Bank of India",
                "Reserve Bank of India",
                "NABARD",
                "Food Corporation of India"
              ]
            },
            postgraduate: {
              name: "Further Government Recruitment Exams",
              duration: "1-2 days",
              institutions: ["UPSC", "SSC"]
            },
            advanced: {
              name: "Departmental Promotions / Certifications",
              duration: "Varies",
              institutions: ["Government of India"]
            }
          }
        },
        {
          id: "defense-paramilitary",
          name: "Defense and Paramilitary",
          description: "Exams for officer roles in Army, Navy, Air Force, and paramilitary forces. Require 12th pass for NDA, Bachelor’s for CDS/CAPF.",
          careerOptions: [
            "Army Officer",
            "Navy Officer",
            "Air Force Pilot",
            "Paramilitary Officer"
          ],
          educationPath: {
            undergraduate: {
              name: "UPSC CDS, UPSC NDA, AFCAT, CAPF AC",
              duration: "1-2 days",
              institutions: [
                "UPSC",
                "Indian Air Force"
              ]
            },
            postgraduate: {
              name: "Further Defense Recruitment Exams",
              duration: "1-2 days",
              institutions: ["UPSC"]
            },
            advanced: {
              name: "Specialized Defense Certifications",
              duration: "Varies",
              institutions: ["Ministry of Defence"]
            }
          }
        },
        {
          id: "teaching-research",
          name: "Teaching and Research",
          description: "Exams for teaching positions and research fellowships in schools and universities. Require Master’s for UGC NET, Bachelor’s/B.Ed for CTET.",
          careerOptions: [
            "Professor",
            "School Teacher",
            "Researcher",
            "Academic Advisor"
          ],
          educationPath: {
            undergraduate: {
              name: "UGC NET, CTET, NTSE, KVPY",
              duration: "1 day",
              institutions: [
                "National Testing Agency (UGC NET, CTET)",
                "NCERT (NTSE)",
                "IISc Bangalore (KVPY)"
              ]
            },
            postgraduate: {
              name: "Further Teaching/Research Exams",
              duration: "1 day",
              institutions: ["NTA", "NCERT"]
            },
            advanced: {
              name: "Research Fellowships / Certifications",
              duration: "Varies",
              institutions: ["UGC", "CSIR"]
            }
          }
        },
        {
          id: "design-architecture",
          name: "Design and Architecture",
          description: "Exams for architecture and design programs. Require 12th pass with Mathematics for NATA, 12th pass for NIFT/NID.",
          careerOptions: [
            "Architect",
            "Fashion Designer",
            "Product Designer",
            "Interior Designer"
          ],
          educationPath: {
            undergraduate: {
              name: "NATA, NIFT, NID DAT",
              duration: "1 day",
              institutions: [
                "Council of Architecture (NATA)",
                "National Institute of Fashion Technology (NIFT)",
                "National Institute of Design (NID)"
              ]
            },
            postgraduate: {
              name: "Further Design/Architecture Exams",
              duration: "1 day",
              institutions: ["NIFT", "NID"]
            },
            advanced: {
              name: "Specialized Design Certifications",
              duration: "Varies",
              institutions: ["NIFT", "NID"]
            }
          }
        },
        {
          id: "professional-scholarship-exams",
          name: "Professional and Scholarship Exams",
          description: "Exams for professional qualifications (e.g., CA) and scholarships. Eligibility varies from 8th pass (NMMSS) to Bachelor’s (CA).",
          careerOptions: [
            "Chartered Accountant",
            "Hotel Manager",
            "Film Director",
            "Scholar"
          ],
          educationPath: {
            undergraduate: {
              name: "CA Foundation/Intermediate/Final, CUET UG/PG, NCHM JEE, FTII JET, Olympiads, NMMSS",
              duration: "1 day to multiple stages",
              institutions: [
                "Institute of Chartered Accountants of India (ICAI)",
                "National Testing Agency (CUET)",
                "NCHM (NCHM JEE)",
                "Film and Television Institute of India (FTII)",
                "Various Boards (Olympiads)",
                "Ministry of Education (NMMSS)"
              ]
            },
            postgraduate: {
              name: "Further Professional Exams",
              duration: "1 day to multiple stages",
              institutions: ["ICAI", "NTA"]
            },
            advanced: {
              name: "Advanced Professional Certifications",
              duration: "Varies",
              institutions: ["ICAI", "Various Boards"]
            }
          }
        },
        {
          id: "international-language-exams",
          name: "International and Language Proficiency Exams",
          description: "Exams for study abroad and English proficiency. No specific eligibility for TOEFL/IELTS; Bachelor’s for GRE.",
          careerOptions: [
            "International Student",
            "Academic Researcher",
            "Professional Abroad"
          ],
          educationPath: {
            undergraduate: {
              name: "SAT, GRE, TOEFL, IELTS",
              duration: "1 day",
              institutions: [
                "College Board (SAT)",
                "ETS (GRE, TOEFL)",
                "British Council/IDP (IELTS)"
              ]
            },
            postgraduate: {
              name: "Further International Exams",
              duration: "1 day",
              institutions: ["ETS", "College Board"]
            },
            advanced: {
              name: "Specialized Language Certifications",
              duration: "Varies",
              institutions: ["ETS", "British Council"]
            }
          }
        }
      ]
    },
    {
      id: "education",
      icon: "🏫",
      name: "Education",
      description: "Explore careers in teaching and educational training that shape future generations.",
      subdomains: [
        {
          "id": "teacher-education",
          "name": "Teacher Education",
          "description": "Study of pedagogical methods and training to become qualified educators for various school levels.",
          "careerOptions": [
            "Primary School Teacher",
            "Secondary School Teacher",
            "Higher Secondary School Teacher",
            "Pre-Primary Teacher",
            "Teacher Educator",
            "School Administrator"
          ],
          "educationPath": {
            "undergraduate": {
              "name": "B.Ed, B.El.Ed, Integrated B.Ed (BA B.Ed, B.Sc B.Ed), D.El.Ed, D.Ed, DECE, NTT",
              "duration": "1-4 years",
              "specializations": [
                "Elementary Education",
                "Secondary Education",
                "Early Childhood Education",
                "Special Education"
              ],
              "institutions": [
                "Lady Shri Ram College for Women, Delhi",
                "Jamia Millia Islamia, New Delhi",
                "Regional Institute of Education, Ajmer",
                "Regional Institute of Education, Bhopal",
                "Regional Institute of Education, Bhubaneswar",
                "Regional Institute of Education, Mysore",
                "Banaras Hindu University, Varanasi",
                "Manav Rachna University, Faridabad",
                "Calicut University Teacher Education Centres, Kozhikode",
                "Mahatma Gandhi University, Kottayam",
                "Kerala University, Thiruvananthapuram",
                "National Institute of Open Schooling, New Delhi",
                "District Institute of Education and Training, Thrissur",
                "Government College of Teacher Education, Kozhikode",
                "Brennen College of Teacher Education, Thalassery",
                "Institute of Home Economics, Delhi",
                "Gargi College, Delhi",
                "Miranda House, Delhi",
                "Central University of Rajasthan, Ajmer",
                "Tata Institute of Social Sciences, Mumbai",
                "Kannur University, Kannur",
                "Delhi Teacher Training College, Delhi",
                "Government Teacher Training Institute, Thrissur",
                "Carmel Teacher Training Institute, Alappuzha",
                "Indira Gandhi National Open University, New Delhi",
                "Delhi Institute of Early Childhood Care and Education, New Delhi",
                "State Council of Educational Research and Training, Kerala",
                "Sree Narayana Training College, Nedunganda",
                "Bharatiya Shiksha Parishad, Uttar Pradesh",
                "Singhania University, Jhunjhunu",
                "Kerala Institute of Early Childhood Education, Thiruvananthapuram",
                "Holy Trinity College of Education, Kochi"
              ]
            },
            "postgraduate": {
              "name": "M.Ed",
              "duration": "2 years",
              "specializations": [
                "Educational Technology",
                "Curriculum and Instruction",
                "Educational Administration",
                "Special Education"
              ],
              "institutions": [
                "Jamia Millia Islamia, New Delhi",
                "Banaras Hindu University, Varanasi",
                "K.J. Somaiya College of Education, Mumbai",
                "Mahatma Gandhi University, Kottayam",
                "University of Kerala, Thiruvananthapuram",
                "Farook Training College, Kozhikode"
              ]
            },
            "advanced": {
              "name": "Ph.D. in Education",
              "duration": "3-5 years",
              "researchAreas": [
                "Educational Psychology",
                "Curriculum Development",
                "Teacher Education",
                "Educational Policy",
                "Inclusive Education"
              ],
              "institutions": [
                "Jamia Millia Islamia, New Delhi",
                "Banaras Hindu University, Varanasi",
                "University of Delhi, Delhi",
                "Mahatma Gandhi University, Kottayam",
                "University of Kerala, Thiruvananthapuram"
              ]
            }
          }
        }
      ]
    }
  ]
};

export type Domain = {
  id: string;
  icon: string;
  name: string;
  description: string;
  subdomains: Subdomain[];
};

export type Subdomain = {
  id: string;
  name: string;
  description: string;
  careerOptions: string[];
  educationPath: EducationPath;
  educationLevels?: EducationLevel[];
};

export type EducationLevel = {
  id: string;
  name: string;
  description: string;
  type: 'undergraduate' | 'postgraduate' | 'advanced';
};

export type EducationPath = {
  undergraduate: Education;
  postgraduate: Education;
  advanced: Education;
};

export type Education = {
  name: string;
  duration: string;
  specializations?: string[];
  institutions?: string[];
  researchAreas?: string[];
};

export default careerPathwaysData;