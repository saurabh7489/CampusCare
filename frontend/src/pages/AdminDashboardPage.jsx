import React, { useState } from 'react';
import { 
  Users, 
  Flame, 
  BookOpen, 
  Moon, 
  HeartHandshake, 
  TrendingUp, 
  Sparkles, 
  ShieldCheck, 
  Lock, 
  AlertTriangle,
  BarChart3,
  Calendar,
  Layers,
  CheckCircle2,
  HelpCircle,
  FileText
} from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell
} from 'recharts';

import StatCard from '../components/StatCard.jsx';
import { 
  AGGREGATED_METRICS, 
  WEEKLY_TRENDS_DATA, 
  COMMON_PROBLEMS_DATA, 
  OVERALL_FEELING_DISTRIBUTION, 
  AI_THEMATIC_ANALYSIS, 
  DEMO_BANNER_LABEL 
} from '../data/demoData.js';

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  // Custom chart tooltip styling
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 text-white text-xs p-3 rounded-xl shadow-xl border border-slate-700 space-y-1">
          <p className="font-bold text-campus-300 border-b border-slate-700 pb-1 mb-1">
            {label}
          </p>
          {payload.map((entry, index) => (
            <p key={`item-${index}`} className="flex justify-between space-x-4">
              <span style={{ color: entry.color }}>{entry.name}:</span>
              <span className="font-mono font-bold">{entry.value}%</span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* 1. DEMO DATA BANNER (Section 17 Requirement) */}
      <div className="bg-amber-500 text-amber-950 font-bold px-4 py-2 rounded-2xl text-xs flex flex-col sm:flex-row items-center justify-between shadow-xs border border-amber-400 gap-2">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="w-4 h-4 text-amber-900 flex-shrink-0" />
          <span>{DEMO_BANNER_LABEL} — Institutional demonstration data for Hackathon evaluation.</span>
        </div>
        <span className="text-[11px] bg-amber-600/30 px-2.5 py-0.5 rounded-full uppercase tracking-wider text-amber-900">
          Aggregated Analytics Only
        </span>
      </div>

      {/* 2. DASHBOARD HEADER & PRIVACY MANDATE (Section 3 & 12) */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-campus-50 text-campus-700 text-xs font-semibold mb-2 border border-campus-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Anonymous + Aggregated Analytics Portal</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Institutional Wellbeing & Academic Pressure Dashboard
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Campus-level aggregated insights to identify common challenges and allocate support resources effectively.
          </p>
        </div>

        {/* Strict Privacy Badge */}
        <div className="bg-slate-100 border border-slate-200 rounded-2xl px-4 py-3 text-xs text-slate-600 max-w-sm flex items-start space-x-2.5 self-start lg:self-auto">
          <Lock className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-900 block">Strict Privacy Guarantee</strong>
            <span>Zero student names, roll numbers, or individual responses are visible or stored here.</span>
          </div>
        </div>
      </div>

      {/* 3. CORE AGGREGATED METRICS (Section 12 Requirements) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Current Week Macro Indicators ({AGGREGATED_METRICS.reportingPeriod})
          </h2>
          <span className="text-xs text-slate-400 font-medium">Updated 30 mins ago</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          <StatCard
            title="Total Responses"
            value={AGGREGATED_METRICS.totalResponses.toLocaleString()}
            subtitle="Anonymous Check-ins"
            icon={Users}
            trend="+8% this week"
            trendDirection="down"
            color="campus"
          />

          <StatCard
            title="Academic Pressure"
            value={`${AGGREGATED_METRICS.academicPressureHigh}%`}
            subtitle="Reporting High Pressure"
            icon={TrendingUp}
            trend="-6% from Midterms"
            trendDirection="down"
            color="rose"
          />

          <StatCard
            title="Exam Stress"
            value={`${AGGREGATED_METRICS.examStressHigh}%`}
            subtitle="Reporting High Stress"
            icon={Flame}
            trend="+3% vs syllabus avg"
            trendDirection="up"
            color="amber"
          />

          <StatCard
            title="Assignment Load"
            value={`${AGGREGATED_METRICS.assignmentWorkloadHigh}%`}
            subtitle="Reporting High Workload"
            icon={BookOpen}
            trend="-5% vs Week 6"
            trendDirection="down"
            color="campus"
          />

          <StatCard
            title="Sleep/Study Balance"
            value={`${AGGREGATED_METRICS.sleepStudyBalancePoor}%`}
            subtitle="Reporting Poor Balance"
            icon={Moon}
            trend="Stable across weeks"
            trendDirection="neutral"
            color="calm"
          />

          <StatCard
            title="Support Requests"
            value={`${AGGREGATED_METRICS.supportRequests}`}
            subtitle="Students Requested Help"
            icon={HeartHandshake}
            trend="+12 requests logged"
            trendDirection="up"
            color="slate"
          />
        </div>
      </section>

      {/* 4. LONGITUDINAL TREND CHARTS (Section 13: Recharts) */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Longitudinal Multi-line Trend Chart */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2 mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                8-Week Academic Wellbeing Trends
              </h3>
              <p className="text-xs text-slate-500">
                Tracking academic pressure, exam stress, and assignment spikes across semester milestones.
              </p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-lg self-start sm:self-auto">
              Midterm Peak at Week 6
            </span>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={WEEKLY_TRENDS_DATA} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="week" tick={{ fontSize: 12, fill: '#64748b' }} stroke="#cbd5e1" />
                <YAxis unit="%" tick={{ fontSize: 12, fill: '#64748b' }} stroke="#cbd5e1" domain={[0, 80]} />
                <Tooltip content={<CustomTooltip />} />
                <Legend iconType="circle" wrapperStyle={{ fontSize: 12, paddingTop: 10 }} />
                <Line 
                  type="monotone" 
                  dataKey="examStress" 
                  name="Exam Stress" 
                  stroke="#ef4444" 
                  strokeWidth={3} 
                  dot={{ r: 4 }} 
                  activeDot={{ r: 6 }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="academicPressure" 
                  name="Academic Pressure" 
                  stroke="#025aa1" 
                  strokeWidth={2.5} 
                  dot={{ r: 3 }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="assignmentLoad" 
                  name="Assignment Workload" 
                  stroke="#f59e0b" 
                  strokeWidth={2} 
                  strokeDasharray="4 4" 
                />
                <Line 
                  type="monotone" 
                  dataKey="sleepDeficit" 
                  name="Poor Sleep/Study Balance" 
                  stroke="#8b5cf6" 
                  strokeWidth={2} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Donut Distribution: Overall Student Feeling */}
        <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="pb-4 border-b border-slate-100 mb-4">
            <h3 className="text-lg font-bold text-slate-900">
              Overall Student Feeling
            </h3>
            <p className="text-xs text-slate-500">
              Campus emotional climate distribution this week.
            </p>
          </div>

          <div className="h-56 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={OVERALL_FEELING_DISTRIBUTION}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {OVERALL_FEELING_DISTRIBUTION.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-xs">
            {OVERALL_FEELING_DISTRIBUTION.map((item) => (
              <div key={item.name} className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[11px] text-slate-500 block">{item.name}</span>
                <span className="font-extrabold text-sm text-slate-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MOST COMMONLY REPORTED PROBLEMS (Section 14 Requirements) */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Most Commonly Reported Problems This Week
            </h3>
            <p className="text-xs text-slate-500">
              Aggregated categorizations derived from anonymous student check-in submissions.
            </p>
          </div>
          <span className="text-xs font-semibold px-3 py-1 bg-campus-50 text-campus-700 rounded-full border border-campus-200">
            Top Concern: Exam Pressure (34%)
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Categorical Bar Chart */}
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={COMMON_PROBLEMS_DATA} layout="vertical" margin={{ top: 5, right: 30, left: 60, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis type="number" unit="%" stroke="#cbd5e1" tick={{ fontSize: 11 }} />
                <YAxis dataKey="issue" type="category" stroke="#64748b" tick={{ fontSize: 11 }} width={120} />
                <Tooltip />
                <Bar dataKey="percentage" name="Reported %" fill="#025aa1" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Ranked List View */}
          <div className="space-y-2.5">
            {COMMON_PROBLEMS_DATA.map((item) => (
              <div 
                key={item.rank}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs hover:bg-slate-100/60 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 rounded-lg bg-campus-700 text-white font-bold flex items-center justify-center text-xs">
                    {item.rank}
                  </span>
                  <span className="font-semibold text-slate-800">{item.issue}</span>
                  <span className="hidden sm:inline-block text-[10px] text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {item.category}
                  </span>
                </div>

                <div className="flex items-center space-x-3 font-mono">
                  <span className="text-slate-400 text-[11px]">{item.studentReports} reports</span>
                  <span className="font-bold text-campus-700 bg-campus-50 px-2 py-0.5 rounded border border-campus-200">
                    {item.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AI ANONYMOUS FEEDBACK ANALYSIS (Section 15 & 16 Requirements) */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-campus-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-700/80 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-campus-500/20 text-campus-300 flex items-center justify-center border border-campus-400/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-white">
                AI Anonymous Feedback Analysis
              </h3>
              <p className="text-xs text-slate-400">
                Safe, aggregated thematic extraction across 512 optional comments (Local NLP Synthesizer).
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700 text-slate-300">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>AI Safety Verification Passed</span>
          </div>
        </div>

        {/* Section 15 Synthesis Quote Output */}
        <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
          <span className="text-xs font-bold text-campus-300 uppercase tracking-wider flex items-center space-x-1.5">
            <FileText className="w-3.5 h-3.5" />
            <span>Weekly Aggregate Thematic Summary</span>
          </span>
          <blockquote className="text-sm sm:text-base text-slate-100 italic leading-relaxed">
            "{AI_THEMATIC_ANALYSIS.summary}"
          </blockquote>
        </div>

        {/* Actionable Themes Identified */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {AI_THEMATIC_ANALYSIS.actionableInsights.map((insight, idx) => (
            <div key={idx} className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-bold text-campus-300">{insight.theme}</span>
                  <span className="text-[10px] text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/60">
                    {insight.frequency}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {insight.recommendation}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section 16 AI Safety Guardrail Confirmation Box */}
        <div className="bg-slate-900/90 rounded-2xl p-4 border border-slate-700/80 text-xs text-slate-400">
          <span className="font-bold text-slate-300 block mb-2 uppercase tracking-wider text-[10px]">
            AI Safety & Ethical Architecture Audit
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
            <div className="flex items-center space-x-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
              <span>No Medical Diagnoses</span>
            </div>
            <div className="flex items-center space-x-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Zero Individual Risk Scores</span>
            </div>
            <div className="flex items-center space-x-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
              <span>No Private Quotes Leaked</span>
            </div>
            <div className="flex items-center space-x-1.5 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Open-Source Local NLP</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}