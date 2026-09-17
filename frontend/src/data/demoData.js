/**
 * CampusCare Fictional Demo Dataset
 * 
 * Fulfills Section 12, 13, 14, 15, 16, and 17:
 * Realistic aggregated campus metrics for hackathon evaluation and demonstration.
 * 
 * MANDATORY LABEL: All data within this module is strictly fictional.
 * Never includes real student personal information.
 */

export const DEMO_BANNER_LABEL = "Demo Data — Fictional";

/**
 * Section 12: High-level Aggregated Institutional KPIs
 */
export const AGGREGATED_METRICS = {
  totalResponses: 1248,
  academicPressureHigh: 42, // 42%
  examStressHigh: 51,       // 51%
  assignmentWorkloadHigh: 37, // 37%
  sleepStudyBalancePoor: 29,  // 29%
  supportRequests: 86,      // 86 Students Requested Support
  reportingPeriod: "Fall Semester — Week 8",
};

/**
 * Section 13: 8-Week Longitudinal Trends for Recharts Visualization
 * Tracks how pressure shifts during syllabus milestones (e.g. Midterm Week 6).
 */
export const WEEKLY_TRENDS_DATA = [
  { week: 'W1', academicPressure: 22, examStress: 18, assignmentLoad: 20, sleepDeficit: 16, label: 'Orientation' },
  { week: 'W2', academicPressure: 26, examStress: 22, assignmentLoad: 28, sleepDeficit: 19, label: 'Course Add/Drop' },
  { week: 'W3', academicPressure: 32, examStress: 29, assignmentLoad: 35, sleepDeficit: 22, label: 'First Quizzes' },
  { week: 'W4', academicPressure: 36, examStress: 34, assignmentLoad: 41, sleepDeficit: 25, label: 'Lab Deadlines' },
  { week: 'W5', academicPressure: 45, examStress: 48, assignmentLoad: 46, sleepDeficit: 31, label: 'Pre-Midterms' },
  { week: 'W6', academicPressure: 56, examStress: 64, assignmentLoad: 52, sleepDeficit: 38, label: 'Midterm Exams' },
  { week: 'W7', academicPressure: 48, examStress: 54, assignmentLoad: 42, sleepDeficit: 32, label: 'Project Review' },
  { week: 'W8', academicPressure: 42, examStress: 51, assignmentLoad: 37, sleepDeficit: 29, label: 'Current Week' },
];

/**
 * Section 14: Aggregated Most Commonly Reported Issues Breakdown
 */
export const COMMON_PROBLEMS_DATA = [
  { rank: 1, issue: 'Exam pressure', percentage: 34, studentReports: 424, category: 'Evaluations' },
  { rank: 2, issue: 'Assignment overload', percentage: 28, studentReports: 349, category: 'Coursework' },
  { rank: 3, issue: 'Time management', percentage: 16, studentReports: 200, category: 'Habits' },
  { rank: 4, issue: 'Attendance pressure', percentage: 10, studentReports: 125, category: 'Policy' },
  { rank: 5, issue: 'Faculty-related difficulties', percentage: 6, studentReports: 75, category: 'Academic' },
  { rank: 6, issue: 'Social/peer pressure', percentage: 4, studentReports: 50, category: 'Campus Life' },
  { rank: 7, issue: 'Financial concerns', percentage: 2, studentReports: 25, category: 'External' },
];

/**
 * Distribution breakdown for donut / pie charts
 */
export const OVERALL_FEELING_DISTRIBUTION = [
  { name: 'Good', value: 44, color: '#10b981' },        // emerald-500
  { name: 'Okay', value: 38, color: '#f59e0b' },        // amber-500
  { name: 'Struggling', value: 18, color: '#ef4444' },  // rose-500
];

export const WORKLOAD_DISTRIBUTION = [
  { name: 'Low', value: 24, color: '#10b981' },
  { name: 'Medium', value: 39, color: '#0ea5e9' },
  { name: 'High', value: 37, color: '#f59e0b' },
];

/**
 * Section 15 & 16: AI Anonymous Feedback Thematic Analysis
 * Strict Safety Rules Adherence:
 * - NO personal diagnoses or mental health labels (never says "depression", "anxiety", or "burnout")
 * - NO individual scoring or risk assessment
 * - NO private feedback quotations or PII
 * - Aggregated thematic summary ONLY.
 */
export const AI_THEMATIC_ANALYSIS = {
  model: "CampusCare Thematic Synthesizer (Local / Open-Source NLP)",
  lastRunTimestamp: "Generated Today at 08:30 AM",
  analyzedSampleCount: 512,
  summary: "Among the anonymous feedback received this week, the most frequently mentioned issue was exam pressure, followed by assignment workload. Students notably highlighted difficulties synchronizing lab report deadlines with upcoming midterm review schedules.",
  actionableInsights: [
    {
      theme: "Midterm Scheduling Clashes",
      frequency: "High (38% of feedback mentions)",
      recommendation: "Consider departmental coordination between STEM courses to avoid multiple high-stakes tests scheduled on identical days.",
    },
    {
      theme: "Lab Report Workload Overload",
      frequency: "Moderate (27% of feedback mentions)",
      recommendation: "Encourage academic mentors to host weekend drop-in writing and report formatting assistance hours.",
    },
    {
      theme: "Attendance Boundary Inflexibility",
      frequency: "Emerging (14% of feedback mentions)",
      recommendation: "Clarify syllabus allowances for excused health and personal days without requiring punitive documentation.",
    }
  ],
  safetyCompliance: {
    individualDiagnosisPerformed: false,
    piiSanitizationVerified: true,
    riskScoringSuppressed: true,
    anonymousBatchedOnly: true,
  }
};