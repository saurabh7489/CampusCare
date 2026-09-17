/**
 * CampusCare Support & Resources Catalog
 * 
 * Fulfills Section 10 & Section 11:
 * Non-medical academic support resources, mentorship programs, counselling pathways,
 * and time-management guides.
 * 
 * IMPORTANT: All contact details are demo placeholders and are explicitly labeled:
 * "Demo Contact — Replace with College Information"
 */

export const SUPPORT_SERVICES = [
  {
    id: 'counselling',
    title: 'Talk to Counsellor',
    role: 'Student Wellbeing Advisory',
    description: 'Confidential, non-clinical conversations with certified college mental wellbeing advisors to navigate academic stress, adjustment, or burnout.',
    hours: 'Mon – Fri, 9:00 AM – 5:00 PM',
    location: 'Student Health & Wellness Wing, Room 204',
    contactPerson: 'Dr. Sarah Jenkins (Demo)',
    email: 'counselling-demo@campus.edu',
    phone: '+1 (555) 019-4821',
    badge: 'Confidential & Free',
    isDemo: true,
  },
  {
    id: 'mentor',
    title: 'Contact Academic Mentor',
    role: 'Peer & Senior Mentorship Program',
    description: 'Get matched with an experienced senior peer mentor or graduate student for coursework guidance, study routines, and department advice.',
    hours: 'Mon – Sat, 10:00 AM – 6:00 PM',
    location: 'Learning Commons, 2nd Floor Hub',
    contactPerson: 'Alex Rivera (Demo Student Lead)',
    email: 'peermentors-demo@campus.edu',
    phone: '+1 (555) 019-3320',
    badge: 'Peer-to-Peer',
    isDemo: true,
  },
  {
    id: 'faculty',
    title: 'Talk to Faculty Support',
    role: 'Department Academic Liaison',
    description: 'Liaison faculty members who can help arrange assignment extensions, attendance reconciliations, or course load adjustments in difficult times.',
    hours: 'Walk-in hours: Tue & Thu, 2:00 PM – 4:00 PM',
    location: 'Academic Affairs Dean’s Office, Suite 110',
    contactPerson: 'Prof. Marcus Vance (Demo Liaison)',
    email: 'academics-demo@campus.edu',
    phone: '+1 (555) 019-7744',
    badge: 'Academic Advocacy',
    isDemo: true,
  },
  {
    id: 'request_support',
    title: 'Request Support Directly',
    role: 'Central Campus Support Request',
    description: 'Submit an anonymous or confidential support request ticket to have a coordinator connect you with the right campus resource within 24 hours.',
    hours: 'Digital submissions active 24/7',
    location: 'Online Dispatch Portal',
    contactPerson: 'Student Support Coordination Team',
    email: 'support-dispatch-demo@campus.edu',
    phone: '+1 (555) 019-0010',
    badge: 'Fast Response',
    isDemo: true,
  }
];

export const RESOURCE_CATEGORIES = [
  {
    id: 'study_planning',
    title: 'Study Planning & Time Management',
    summary: 'Evidence-based academic workflows to overcome procrastination and assignment pile-ups.',
    items: [
      {
        name: 'The Pomodoro Academic Technique for Dense Reading',
        type: 'Guide',
        readTime: '4 min read',
        description: 'How to break multi-chapter reading and revision into 25-minute high-focus blocks with structured recovery periods.',
      },
      {
        name: 'Weekly Assignment Backlog Prioritization Matrix',
        type: 'Template',
        readTime: 'Downloadable Sheet',
        description: 'A 2x2 urgency-vs-impact framework designed specifically for students balancing 4+ simultaneous term projects.',
      },
      {
        name: 'Syllabus Reverse-Engineering Framework',
        type: 'Strategy',
        readTime: '5 min read',
        description: 'Map major deadlines 6 weeks in advance to identify crunch weeks before midterms begin.',
      }
    ]
  },
  {
    id: 'exam_prep',
    title: 'Practical Exam Preparation',
    summary: 'Non-stressful revision frameworks, past-paper pacing, and memorization strategies.',
    items: [
      {
        name: 'Active Recall & Spaced Repetition Protocol',
        type: 'Methodology',
        readTime: '6 min read',
        description: 'Why passive highlighting creates an illusion of competence, and how self-quizzing triples retention in STEM courses.',
      },
      {
        name: '48-Hour Pre-Exam Calming Checklist',
        type: 'Checklist',
        readTime: '3 min read',
        description: 'Nutritional pacing, sleep boundary rules, and formula sheet condensation guidelines for the final 2 days.',
      },
      {
        name: 'Simulated Timed Practice Strategies',
        type: 'Guide',
        readTime: '5 min read',
        description: 'Overcome in-exam freezing by replicating classroom testing constraints during home revisions.',
      }
    ]
  },
  {
    id: 'stress_management',
    title: 'General Stress Management (Non-Medical)',
    summary: 'Practical everyday lifestyle adjustments for maintaining focus and energy.',
    items: [
      {
        name: 'Sleep Hygiene Protocols for Night Owls',
        type: 'Wellness Guide',
        readTime: '5 min read',
        description: 'Simple blue-light reduction and evening wind-down habits that protect deep sleep during heavy assignment cycles.',
      },
      {
        name: 'The 4-7-8 Breathing Technique Before Presentations',
        type: 'Exercise',
        readTime: '2 min exercise',
        description: 'A physiologically proven respiratory pacing exercise to steady heart rate before oral exams or symposium pitches.',
      },
      {
        name: 'Setting Boundaries with Group Projects',
        type: 'Social Guide',
        readTime: '4 min read',
        description: 'Constructive scripts to divide workload fairly without creating peer hostility or taking on all the work yourself.',
      }
    ]
  },
  {
    id: 'emergency_contacts',
    title: 'Emergency & Urgent Campus Contacts',
    summary: 'Immediate contact numbers for students requiring immediate safety or crisis assistance.',
    isEmergency: true,
    items: [
      {
        name: 'Campus Safety & Emergency Security',
        contact: 'Emergency Demo: +1 (555) 019-9111',
        description: 'Available 24/7 for on-campus physical security, medical transport dispatch, or night escorts.',
        disclaimer: 'Demo Contact — Replace with College Information',
      },
      {
        name: 'National Mental Health Support Lifeline (USA)',
        contact: 'Dial or Text 988',
        description: 'Free, confidential 24/7 crisis lifeline providing support for distress or emotional crisis.',
        disclaimer: 'Real Public Service (USA)',
      },
      {
        name: 'Crisis Text Line',
        contact: 'Text HOME to 741741',
        description: 'Free, confidential 24/7 text support with trained crisis volunteers.',
        disclaimer: 'Real Public Service (USA)',
      }
    ]
  }
];