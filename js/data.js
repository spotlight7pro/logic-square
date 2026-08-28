/**
 * CampusVibe - Central Data Store
 * Contains structured mock data for events, clubs, gallery, and announcements.
 */

const CAMPUS_DATA = {
  // Announcements for the homepage ticker
  announcements: [
    { id: 1, text: "🚀 Hackathon 2026 registration closes October 8 — Limited team slots remaining!", tag: "Urgent" },
    { id: 2, text: "🎭 Cultural Fest 'Euphoria' auditions begin Monday at the Main Auditorium", tag: "Auditions" },
    { id: 3, text: "⚽ Annual Inter-College Football League registrations are now open!", tag: "Sports" },
    { id: 4, text: "📸 LensCraft Photography competition submissions close October 15", tag: "Contest" },
    { id: 5, text: "🤖 Robotics Club Workshop on Autonomous Drones scheduled for this Saturday", tag: "Workshop" }
  ],

  // Statistics for about page and hero section
  stats: {
    eventsCount: "50+",
    studentsCount: "1,000+",
    clubsCount: "15+",
    workshopsCount: "20+",
    participantsThisMonth: "650+"
  },

  // Comprehensive Events Catalog (10+ realistic events)
  events: [
    {
      id: "hackathon-2026",
      name: "Hackathon 2026",
      category: "Technical",
      date: "October 12, 2026",
      isoDate: "2026-10-12T10:00:00",
      time: "10:00 AM – 5:00 PM",
      venue: "Computer Science Block, Innovation Lab",
      shortDescription: "A 24-hour sprint to build innovative software solutions tackling real-world sustainability and campus challenges.",
      fullDescription: "Hackathon 2026 is CampusVibe's flagship annual coding marathon! Gather your team of developers, designers, and problem solvers to build groundbreaking web, mobile, AI, and IoT solutions over 24 thrilling hours. Enjoy mentorship from industry experts, free meals, high-speed Wi-Fi, and exclusive sponsor swag bags.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      gradient: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
      status: "Registration Open",
      statusClass: "status-open",
      featured: true,
      teamSize: "2–4 Members",
      registrationDeadline: "October 8, 2026",
      club: "Coding Club",
      eligibility: [
        "Enrolled college/university students with valid ID",
        "Open to all engineering, science, and arts departments",
        "Basic programming knowledge recommended (any language)",
        "Teams must have 2 to 4 registered participants"
      ],
      prizes: [
        { rank: "🥇 First Prize", amount: "₹10,000", badge: "Winner Trophy + Internship Opportunity" },
        { rank: "🥈 Second Prize", amount: "₹5,000", badge: "Runner-Up Trophy + Certificate of Excellence" },
        { rank: "🥉 Third Prize", amount: "₹2,500", badge: "Special Mention + Goodies" }
      ],
      rules: [
        "All code, designs, and assets must be created during the hackathon timeline.",
        "Use of open-source libraries and public APIs is permitted and encouraged.",
        "Plagiarism or pre-built complete projects will lead to immediate disqualification.",
        "Every team must submit a GitHub repository link and a 3-minute video demo.",
        "Respect fellow hackers and adhere strictly to the CampusVibe Code of Conduct.",
        "Final presentations to the judges will take place in the Main Auditorium at 4:00 PM."
      ],
      schedule: [
        { time: "09:30 AM", title: "Check-in & Team Badge Collection" },
        { time: "10:00 AM", title: "Opening Ceremony & Problem Statement Reveal" },
        { time: "11:00 AM", title: "Hacking Begins & Mentor Round 1" },
        { time: "01:00 PM", title: "Networking Lunch" },
        { time: "03:30 PM", title: "Project Submission Deadline" },
        { time: "04:00 PM", title: "Final Pitching & Award Ceremony" }
      ]
    },
    {
      id: "techfest-2026",
      name: "TECHFEST 2026",
      category: "Technical",
      date: "October 12, 2026",
      isoDate: "2026-10-12T10:00:00",
      time: "10:00 AM – 5:00 PM",
      venue: "Computer Science Block, Main Auditorium",
      shortDescription: "The premier technological symposium featuring keynote talks, project expos, robot battles, and drone racing.",
      fullDescription: "TECHFEST 2026 brings together the brightest minds in engineering, design, and computing. Experience live robot combat arenas, next-gen hardware exhibitions, technical paper presentations, and masterclasses from leading tech innovators.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      gradient: "linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)",
      status: "Registration Open",
      statusClass: "status-open",
      featured: true,
      teamSize: "Solo or Teams up to 3",
      registrationDeadline: "October 10, 2026",
      club: "Robotics Club",
      eligibility: [
        "Open to all college students and tech enthusiasts",
        "Participants can register for multiple sub-events on site",
        "Project displays must have faculty advisor endorsement"
      ],
      prizes: [
        { rank: "🥇 Best Project Expo", amount: "₹15,000", badge: "Innovation Cup" },
        { rank: "🥈 RoboWars Champion", amount: "₹8,000", badge: "Gold Medal" },
        { rank: "🥉 Tech Paper Presentation", amount: "₹4,000", badge: "Certificate of Merit" }
      ],
      rules: [
        "Robots must comply with weight and voltage safety specifications.",
        "Exhibitors must set up posters and prototypes before 9:30 AM.",
        "Presentation time is strictly capped at 7 minutes followed by 3 mins Q&A."
      ]
    },
    {
      id: "cultural-fest-euphoria",
      name: "Euphoria Cultural Fest",
      category: "Cultural",
      date: "October 18, 2026",
      isoDate: "2026-10-18T16:00:00",
      time: "4:00 PM – 10:00 PM",
      venue: "University Open-Air Amphitheatre",
      shortDescription: "A vibrant evening celebrating music, classical & western dance, theatrical drama, and fashion runway.",
      fullDescription: "Euphoria is the grandest cultural carnival on campus! Featuring synchronized group dances, soulful acoustic battles, street theatre (Nukkad Natak), fashion walkthroughs, and a guest celebrity musical night. Come immerse yourself in pulsating beats and pure artistic brilliance.",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
      gradient: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
      status: "Almost Full",
      statusClass: "status-warning",
      featured: false,
      teamSize: "Solo to 12 Members",
      registrationDeadline: "October 14, 2026",
      club: "Cultural Club",
      eligibility: [
        "All registered students of undergraduate and postgraduate programs",
        "Shortlisted teams from preliminary auditions"
      ],
      prizes: [
        { rank: "🥇 Star of Euphoria (Overall)", amount: "₹12,000", badge: "Rolling Trophy" },
        { rank: "🥈 Best Dance Troupe", amount: "₹6,000", badge: "Trophy + Badges" },
        { rank: "🥉 Best Vocalist", amount: "₹3,000", badge: "Medal & Studio Session" }
      ],
      rules: [
        "Performers must submit audio/soundtracks 24 hours in advance.",
        "Stage time: Solo (4 mins max), Groups (8 mins max).",
        "Vulgarity or inappropriate content will lead to disqualification."
      ]
    },
    {
      id: "football-tournament",
      name: "Inter-College Football Tournament",
      category: "Sports",
      date: "October 24, 2026",
      isoDate: "2026-10-24T08:00:00",
      time: "8:00 AM – 6:00 PM",
      venue: "Campus Sports Complex & Football Stadium",
      shortDescription: "High-octane knockout football championship featuring top college squads competing for the Campus Cup.",
      fullDescription: "Lace up your cleats and represent your department or college in the annual 11-a-side CampusVibe Football Championship. Matches follow FIFA standard guidelines with certified referees, live commentator coverage, and energetic student crowds.",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      status: "Registration Open",
      statusClass: "status-open",
      featured: false,
      teamSize: "11 Players + 5 Substitutes",
      registrationDeadline: "October 20, 2026",
      club: "Sports Club",
      eligibility: [
        "Valid college student athletic card required",
        "Each department can field a maximum of 2 squads"
      ],
      prizes: [
        { rank: "🥇 Champions", amount: "₹15,000", badge: "Golden Boot & Championship Cup" },
        { rank: "🥈 Runners-Up", amount: "₹7,500", badge: "Silver Medals" },
        { rank: "🥉 Golden Ball (MVP)", amount: "₹2,000", badge: "Individual Trophy" }
      ],
      rules: [
        "Knockout matches: 30 minutes each half with 10 minutes interval.",
        "Shin guards and official team jerseys are mandatory.",
        "Yellow & red card penalties strictly enforced per FIFA rules."
      ]
    },
    {
      id: "web-dev-workshop",
      name: "Web Development Workshop",
      category: "Workshops",
      date: "October 28, 2026",
      isoDate: "2026-10-28T11:00:00",
      time: "11:00 AM – 3:30 PM",
      venue: "Seminar Hall 2, IT Department",
      shortDescription: "Hands-on masterclass mastering modern CSS Grid, Flexbox, responsive layouts, and modern JavaScript APIs.",
      fullDescription: "Level up your web craft! This interactive workshop will guide you step-by-step through constructing responsive, accessible, and fast web experiences without reliance on bloated frameworks. Learn CSS variables, animations, DOM manipulation, and deployment tricks from senior frontend engineers.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      gradient: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",
      status: "Almost Full",
      statusClass: "status-warning",
      featured: false,
      teamSize: "Individual Registration",
      registrationDeadline: "October 26, 2026",
      club: "Coding Club",
      eligibility: [
        "Open to all beginners and intermediate web developers",
        "Bring your own laptop with VS Code or any text editor installed"
      ],
      prizes: [
        { rank: "🎖️ Completion", amount: "Free", badge: "Verified Certificate of Attendance" },
        { rank: "🏆 Best UI Challenge", amount: "₹3,000", badge: "Pro Dev Course Voucher" }
      ],
      rules: [
        "Active participation required during live coding exercises.",
        "Certificate issued only upon successful workshop project submission."
      ]
    },
    {
      id: "photography-competition",
      name: "LensCraft Photography Competition",
      category: "Competitions",
      date: "November 04, 2026",
      isoDate: "2026-11-04T09:00:00",
      time: "9:00 AM – 5:00 PM",
      venue: "Campus-wide & Central Library Gallery",
      shortDescription: "Capture the essence of campus life, architectural shadows, and raw human emotions through your lens.",
      fullDescription: "LensCraft challenges student photographers to see beauty in everyday campus moments. Submit high-resolution RAW or JPEG photographs across three themes: 'Architecture & Geometry', 'Portraits of Campus Life', and 'Abstract Street Art'.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
      status: "Registration Open",
      statusClass: "status-open",
      featured: false,
      teamSize: "Solo (1 Photographer)",
      registrationDeadline: "November 01, 2026",
      club: "Photography Club",
      eligibility: [
        "Open to all DSLR, Mirrorless, and Smartphone photographers",
        "Images must be original and taken within the college campus premises"
      ],
      prizes: [
        { rank: "🥇 Best Picture", amount: "₹6,000", badge: "Camera Gear Kit + Photo Exhibition" },
        { rank: "🥈 Second Place", amount: "₹3,000", badge: "Framed Print + Certificate" },
        { rank: "🥉 People's Choice", amount: "₹1,500", badge: "Instagram Feature & Medal" }
      ],
      rules: [
        "Submissions must be minimum 3000px resolution.",
        "Basic color correction is permitted; heavy composite manipulation or AI generation is strictly prohibited.",
        "Maximum 3 entries per registered photographer."
      ]
    },
    {
      id: "coding-challenge",
      name: "CodeClash Speed Challenge",
      category: "Technical",
      date: "November 10, 2026",
      isoDate: "2026-11-10T14:00:00",
      time: "2:00 PM – 5:00 PM",
      venue: "Computer Lab 4 & Online Portal",
      shortDescription: "Fast-paced algorithmic duel testing data structures, rapid debugging, and algorithmic efficiency under the clock.",
      fullDescription: "Test your algorithmic reflexes against the campus's top problem solvers. 10 algorithmic problems ranging from dynamic programming to graph traversals with real-time live leaderboards.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
      status: "Registration Open",
      statusClass: "status-open",
      featured: false,
      teamSize: "Solo / Individual",
      registrationDeadline: "November 08, 2026",
      club: "Coding Club",
      eligibility: [
        "Students of all batches and disciplines",
        "Supported languages: C++, Java, Python, JavaScript"
      ],
      prizes: [
        { rank: "🥇 1st Place", amount: "₹8,000", badge: "Code Master Trophy + Mech Keyboard" },
        { rank: "🥈 2nd Place", amount: "₹4,000", badge: "Wireless Earbuds + Certificate" },
        { rank: "🥉 3rd Place", amount: "₹2,000", badge: "Certificate of Merit" }
      ],
      rules: [
        "Plagiarism detection algorithms are automatically executed on all test submissions.",
        "Time complexity and execution efficiency determine ties."
      ]
    },
    {
      id: "battle-of-the-bands",
      name: "Battle of the Bands",
      category: "Cultural",
      date: "November 15, 2026",
      isoDate: "2026-11-15T17:30:00",
      time: "5:30 PM – 9:30 PM",
      venue: "Central Lawns Amphitheatre",
      shortDescription: "Electric riffs, explosive drum solos, and roaring vocals as college music bands battle for the Rock Crown.",
      fullDescription: "CampusVibe's legendary musical showdown! Experience rock, indie, fusion, and jazz bands performing original compositions and explosive cover medleys under concert-grade stage lights and sound systems.",
      image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
      gradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
      status: "Almost Full",
      statusClass: "status-warning",
      featured: false,
      teamSize: "3–8 Band Members",
      registrationDeadline: "November 10, 2026",
      club: "Cultural Club",
      eligibility: [
        "Bands must consist of at least 3 members",
        "Acoustic and electric setups supported (drums provided on stage)"
      ],
      prizes: [
        { rank: "🥇 Champions of Rock", amount: "₹15,000", badge: "Studio Recording Voucher + Trophy" },
        { rank: "🥈 Runner-Up Band", amount: "₹7,500", badge: "Trophy + Guitar Accessories" },
        { rank: "🎸 Best Soloist", amount: "₹2,500", badge: "Individual Medal" }
      ],
      rules: [
        "15 minutes total stage time (including 3 minutes sound check).",
        "Original compositions earn extra judging points."
      ]
    },
    {
      id: "robotics-bootcamp",
      name: "Autonomous Drones & Robotics BootCamp",
      category: "Workshops",
      date: "November 20, 2026",
      isoDate: "2026-11-20T10:00:00",
      time: "10:00 AM – 4:00 PM",
      venue: "Mechanical Engineering Workshop & Arena",
      shortDescription: "Build, configure, and fly micro quadcopters while learning flight controllers, sensors, and telemetry.",
      fullDescription: "Immerse yourself into hands-on aerospace and robotics engineering. Participants will assemble hardware flight controllers, configure PID loops, write sensor algorithms, and navigate obstacle courses.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      gradient: "linear-gradient(135deg, #06b6d4 0%, #0284c7 100%)",
      status: "Registration Closed",
      statusClass: "status-closed",
      featured: false,
      teamSize: "Teams of 2",
      registrationDeadline: "November 15, 2026",
      club: "Robotics Club",
      eligibility: [
        "Engineering students across any year",
        "Hardware kits provided for the duration of the workshop"
      ],
      prizes: [
        { rank: "🥇 Best Obstacle Flight", amount: "₹5,000", badge: "FPV Drone Kit" },
        { rank: "🎖️ All Participants", amount: "Free", badge: "Hands-on Kit Certificate" }
      ],
      rules: [
        "Safety goggles mandatory during flight tests.",
        "Kits must be returned in good condition after the session."
      ]
    },
    {
      id: "badminton-championship",
      name: "Campus Smash Badminton Open",
      category: "Sports",
      date: "November 25, 2026",
      isoDate: "2026-11-25T09:00:00",
      time: "9:00 AM – 5:00 PM",
      venue: "Indoor Badminton Courts, Sports Complex",
      shortDescription: "Singles and doubles knockout badminton matches on synthetic courts with feather shuttles.",
      fullDescription: "Smash your way to glory! The Campus Smash Badminton Open welcomes passionate players for high-paced singles and mixed-doubles tournaments.",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=800&q=80",
      gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
      status: "Registration Open",
      statusClass: "status-open",
      featured: false,
      teamSize: "Singles (1) or Doubles (2)",
      registrationDeadline: "November 22, 2026",
      club: "Sports Club",
      eligibility: [
        "Valid student identification",
        "Non-marking indoor sports shoes required"
      ],
      prizes: [
        { rank: "🥇 Men's & Women's Singles", amount: "₹5,000", badge: "Pro Racket + Trophy" },
        { rank: "🥇 Mixed Doubles", amount: "₹6,000", badge: "Trophies + Kit Bags" }
      ],
      rules: [
        "BWF rally scoring system (best of 3 sets of 21 points).",
        "Yonex feather shuttles provided for all matches."
      ]
    },
    {
      id: "art-and-canvas-expo",
      name: "Canvas & Colors Art Expo",
      category: "Competitions",
      date: "November 28, 2026",
      isoDate: "2026-11-28T10:00:00",
      time: "10:00 AM – 3:00 PM",
      venue: "Student Activity Center Courtyard",
      shortDescription: "Live canvas painting, digital sketching, and clay modeling competition expressing social themes.",
      fullDescription: "Unleash your artistic expression! Bring blank canvases to life through oil painting, watercolors, charcoal sketches, or digital tablet illustrations on the theme 'Visions of a Greener Tomorrow'.",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80",
      gradient: "linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)",
      status: "Registration Open",
      statusClass: "status-open",
      featured: false,
      teamSize: "Solo Artist",
      registrationDeadline: "November 25, 2026",
      club: "Cultural Club",
      eligibility: [
        "Open to all student artists",
        "Standard drawing boards & easels provided"
      ],
      prizes: [
        { rank: "🥇 Master Artist", amount: "₹5,000", badge: "Winsor & Newton Art Hamper + Trophy" },
        { rank: "🥈 Runner-Up", amount: "₹2,500", badge: "Art Supplies Kit" }
      ],
      rules: [
        "Participants must bring their own paints, brushes, or drawing tablets.",
        "Artworks will be exhibited in the central corridor for 3 days."
      ]
    },
    {
      id: "literary-debate-duel",
      name: "The Great Campus Parliamentary Debate",
      category: "Competitions",
      date: "December 02, 2026",
      isoDate: "2026-12-02T13:00:00",
      time: "1:00 PM – 6:00 PM",
      venue: "Moot Court Hall, Humanities Wing",
      shortDescription: "Asian Parliamentary style debate on geopolitics, artificial intelligence ethics, and campus policies.",
      fullDescription: "Sharpen your rhetoric, logic, and persuasion. The Great Campus Debate brings together top student orators in a rigorous 3-on-3 parliamentary format with rebuttal rounds and adjudication.",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
      gradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
      status: "Registration Open",
      statusClass: "status-open",
      featured: false,
      teamSize: "3 Members per Team",
      registrationDeadline: "November 29, 2026",
      club: "Literary Club",
      eligibility: [
        "Open to all undergraduate and postgraduate students",
        "Teams of Government and Opposition"
      ],
      prizes: [
        { rank: "🥇 Best Delegation", amount: "₹7,500", badge: "Debate Shield + Books Voucher" },
        { rank: "🥈 Best Speaker", amount: "₹2,500", badge: "Individual Trophy" }
      ],
      rules: [
        "7 minutes constructive speech per speaker, 4 minutes reply speech.",
        "Points of Information (POIs) allowed between 1st and 6th minute."
      ]
    }
  ],

  // 6 Student Clubs
  clubs: [
    {
      id: "coding-club",
      name: "Coding Club",
      category: "Technical",
      icon: "💻",
      lead: "Aarav Sharma (President)",
      email: "codingclub@campusvibe.edu",
      description: "Organizes 24-hour hackathons, algorithmic coding competitions, competitive programming drills, and practical web/mobile app development workshops.",
      upcomingEventsCount: 3,
      eventsFilter: "Technical",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      meetingSchedule: "Every Wednesday & Friday at 5:00 PM (Lab 3)",
      membersCount: "250+ Members"
    },
    {
      id: "cultural-club",
      name: "Cultural Club",
      category: "Cultural",
      icon: "🎭",
      lead: "Priya Nair (Secretary)",
      email: "culturalclub@campusvibe.edu",
      description: "The creative heartbeat of the campus — hosting music concerts, traditional & western dance troupes, theatre productions, drama festivals, and art exhibitions.",
      upcomingEventsCount: 3,
      eventsFilter: "Cultural",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
      meetingSchedule: "Tuesday & Thursday at 4:30 PM (Amphitheatre)",
      membersCount: "320+ Members"
    },
    {
      id: "photography-club",
      name: "Photography Club",
      category: "Arts & Media",
      icon: "📸",
      lead: "Rohan Varma (Lead Visualist)",
      email: "photography@campusvibe.edu",
      description: "Passionate visual storytellers capturing every campus event, organizing photo walks, darkroom workshops, and annual multi-theme photography competitions.",
      upcomingEventsCount: 1,
      eventsFilter: "Competitions",
      image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=800&q=80",
      meetingSchedule: "Saturdays at 10:00 AM (Central Courtyard)",
      membersCount: "140+ Members"
    },
    {
      id: "robotics-club",
      name: "Robotics Club",
      category: "Technical & Hardware",
      icon: "🤖",
      lead: "Ananya Patel (Technical Head)",
      email: "robotics@campusvibe.edu",
      description: "Dedicated to designing combat robots, autonomous drones, IoT embedded systems, and representing the university in national hardware challenges.",
      upcomingEventsCount: 2,
      eventsFilter: "Workshops",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      meetingSchedule: "Monday & Friday at 4:00 PM (Robotics Lab)",
      membersCount: "180+ Members"
    },
    {
      id: "literary-club",
      name: "Literary Club",
      category: "Literary & Debate",
      icon: "📖",
      lead: "Kavya Menon (Debate Captain)",
      email: "literaryclub@campusvibe.edu",
      description: "Fostering vibrant discourse through parliamentary debates, creative writing anthologies, poetry slams, book clubs, and public speaking bootcamps.",
      upcomingEventsCount: 1,
      eventsFilter: "Competitions",
      image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80",
      meetingSchedule: "Thursdays at 5:00 PM (Library Conference Room)",
      membersCount: "110+ Members"
    },
    {
      id: "sports-club",
      name: "Sports Club",
      category: "Athletics",
      icon: "🏆",
      lead: "Vikram Chauhan (Sports Secretary)",
      email: "sportsclub@campusvibe.edu",
      description: "Promotes fitness, teamwork, and athletic excellence through inter-department leagues, coaching camps, annual athletics meets, and varsity tournaments.",
      upcomingEventsCount: 2,
      eventsFilter: "Sports",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
      meetingSchedule: "Daily 6:00 AM & 5:00 PM (Sports Complex)",
      membersCount: "400+ Athletes"
    }
  ],

  // Gallery Photos (with categories & descriptions)
  gallery: [
    {
      id: "gal-1",
      title: "Euphoria Musical Night",
      category: "Cultural",
      date: "Spring 2025",
      description: "Live concert performance under the open amphitheatre lights with over 800 students cheering.",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "gal-2",
      title: "Hackathon Sprint Final Demos",
      category: "Technical",
      date: "Winter 2025",
      description: "Students presenting their 24-hour prototypes to the industry judges panel.",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "gal-3",
      title: "Inter-College Football Final Goal",
      category: "Sports",
      date: "Fall 2025",
      description: "Thrilling final penalty shootout in the university football championship.",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "gal-4",
      title: "Robotics Hardware Drone Testing",
      category: "Workshops",
      date: "Spring 2025",
      description: "Students calibrating micro-drone sensors during the hands-on engineering lab.",
      image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "gal-5",
      title: "Annual Campus Fest Carnival",
      category: "Festivals",
      date: "Autumn 2025",
      description: "Vibrant campus fest with food trucks, neon decorations, and music stages.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "gal-6",
      title: "Traditional Dance Troupe Showcase",
      category: "Cultural",
      date: "Spring 2025",
      description: "Synchronized classical dance performance at the cultural symposium.",
      image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "gal-7",
      title: "AI & Fullstack Workshop",
      category: "Workshops",
      date: "Winter 2025",
      description: "Interactive coding session exploring modern frontend architectures and APIs.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "gal-8",
      title: "Basketball Championship Match",
      category: "Sports",
      date: "Winter 2025",
      description: "Fast break and slam dunk during the inter-departmental sports tournament.",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "gal-9",
      title: "Photography Exhibition Showcase",
      category: "Festivals",
      date: "Fall 2025",
      description: "Curated display of award-winning student photography in the Central Library.",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "gal-10",
      title: "Battle of the Bands Rock Night",
      category: "Cultural",
      date: "Spring 2025",
      description: "Electrifying guitar solo during the battle of the bands finals.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "gal-11",
      title: "Robotics Combat Arena Clash",
      category: "Technical",
      date: "Fall 2025",
      description: "High-power robot combat tournament in the engineering quad.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "gal-12",
      title: "Sprint Athletics 100m Dash",
      category: "Sports",
      date: "Spring 2025",
      description: "Athletes competing in the final sprint of the annual university track meet.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80"
    }
  ]
};

// Helper methods for easy querying
window.CampusDataStore = {
  getAllEvents: () => CAMPUS_DATA.events,
  getEventById: (id) => CAMPUS_DATA.events.find(e => e.id === id),
  getFeaturedEvents: () => CAMPUS_DATA.events.filter(e => e.featured),
  getUpcomingEvents: (limit = 6) => CAMPUS_DATA.events.slice(0, limit),
  getClubs: () => CAMPUS_DATA.clubs,
  getClubById: (id) => CAMPUS_DATA.clubs.find(c => c.id === id),
  getGallery: () => CAMPUS_DATA.gallery,
  getAnnouncements: () => CAMPUS_DATA.announcements,
  getStats: () => CAMPUS_DATA.stats,
  
  // Registration LocalStorage helpers
  getSavedRegistrations: () => {
    try {
      return JSON.parse(localStorage.getItem('campusvibe_registrations') || '[]');
    } catch (e) {
      return [];
    }
  },
  saveRegistration: (registration) => {
    try {
      const current = JSON.parse(localStorage.getItem('campusvibe_registrations') || '[]');
      const newEntry = {
        ...registration,
        id: 'REG-' + Date.now().toString(36).toUpperCase(),
        timestamp: new Date().toISOString()
      };
      current.push(newEntry);
      localStorage.setItem('campusvibe_registrations', JSON.stringify(current));
      return newEntry;
    } catch (e) {
      console.error("Error saving to localStorage", e);
      return null;
    }
  }
};
