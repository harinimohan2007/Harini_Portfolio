import React, { useState } from 'react';
import { Leaf, Factory, Navigation, Radio, Activity, Check, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectPreviewProps {
  project: Project;
}

export default function ProjectPreviews({ project }: ProjectPreviewProps) {
  switch (project.previewDetails.mockupType) {
    case 'sustainability':
      return <EcoLensInteractivePreview />;
    case 'manufacturing':
      return <FactoraInteractivePreview />;
    case 'navigation':
      return <AssistiveNavigationInteractivePreview />;
    case 'traffic':
      return <TrafficCongestionInteractivePreview />;
    default:
      return null;
  }
}

// ----------------------------------------------------------------------
// 1. ECOLENS: SUSTAINABILITY ANALYSIS (Warm Sage & Emerald Scrapbook)
// ----------------------------------------------------------------------
function EcoLensInteractivePreview() {
  const [selectedProduct, setSelectedProduct] = useState<'bio' | 'pet'>('bio');

  return (
    <div className="flex flex-col gap-4 font-typewriter text-xs text-[#4A3B37] bg-[#F7FAF4] p-4 rounded-xl border-1.5 border-[#8BA878]">
      {/* Top Header & Mode Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#8BA878]/30 gap-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-[#DDE8D4] text-[#557345] border border-[#8BA878]/40">
            <Leaf className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[#2F4225] font-bold tracking-wide">EcoLens Impact Matrix</span>
            <span className="block text-[10px] text-[#557345]">Life Cycle Assessment (LCA)</span>
          </div>
        </div>

        {/* Interactive Comparison Switcher */}
        <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-[#8BA878]/40 self-start sm:self-auto shadow-2xs">
          <button
            type="button"
            onClick={() => setSelectedProduct('bio')}
            className={`px-2.5 py-1 rounded text-[11px] font-bold transition-colors cursor-pointer ${
              selectedProduct === 'bio'
                ? 'bg-[#DDE8D4] text-[#2F4225] border border-[#8BA878]'
                : 'text-[#6B5550] hover:text-[#2F4225]'
            }`}
          >
            Bio-Pulp
          </button>
          <button
            type="button"
            onClick={() => setSelectedProduct('pet')}
            className={`px-2.5 py-1 rounded text-[11px] font-bold transition-colors cursor-pointer ${
              selectedProduct === 'pet'
                ? 'bg-[#F9DDD6] text-[#7E2231] border border-[#7E2231]/40'
                : 'text-[#6B5550] hover:text-[#7E2231]'
            }`}
          >
            Virgin PET
          </button>
        </div>
      </div>

      {/* Comparative Metrics Panel */}
      <div className="grid grid-cols-3 gap-2.5">
        <div className={`p-3 rounded-xl border transition-all ${
          selectedProduct === 'bio'
            ? 'bg-white border-[#8BA878] shadow-xs'
            : 'bg-white border-[#F9DDD6] shadow-xs'
        }`}>
          <span className="text-[10px] text-[#6B5550] block mb-1">Eco-Score</span>
          <span className={`text-lg font-bold font-display ${
            selectedProduct === 'bio' ? 'text-[#3E6B27]' : 'text-[#9E2A2B]'
          }`}>
            {selectedProduct === 'bio' ? '94.8 / 100' : '38.2 / 100'}
          </span>
          <span className="text-[10px] text-[#6B5550] block mt-0.5">
            {selectedProduct === 'bio' ? 'Class A Verified' : 'Elevated Waste'}
          </span>
        </div>

        <div className="p-3 rounded-xl bg-white border border-[#8BA878]/25 shadow-xs">
          <span className="text-[10px] text-[#6B5550] block mb-1">Carbon Emitted</span>
          <span className="text-lg font-bold font-display text-[#332624]">
            {selectedProduct === 'bio' ? '12.4g CO₂' : '84.6g CO₂'}
          </span>
          <span className="text-[10px] text-[#3E6B27] font-bold block mt-0.5">
            {selectedProduct === 'bio' ? '-85% Footprint' : 'High Baseline'}
          </span>
        </div>

        <div className="p-3 rounded-xl bg-white border border-[#8BA878]/25 shadow-xs">
          <span className="text-[10px] text-[#6B5550] block mb-1">Degradation</span>
          <span className="text-lg font-bold font-display text-[#332624]">
            {selectedProduct === 'bio' ? '180 Days' : '450 Years'}
          </span>
          <span className="text-[10px] text-[#6B5550] block mt-0.5">
            {selectedProduct === 'bio' ? 'Compostable' : 'Persistent Waste'}
          </span>
        </div>
      </div>

      {/* Material Decomposition Bar Breakdown */}
      <div className="p-3 rounded-xl bg-white border border-[#8BA878]/30 space-y-2">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-[#332624] font-bold">Material Composition Breakdown</span>
          <span className={selectedProduct === 'bio' ? 'text-[#3E6B27] font-bold' : 'text-[#9E2A2B] font-bold'}>
            {selectedProduct === 'bio' ? 'Plant Pulp (100%)' : 'Polyethylene (PET)'}
          </span>
        </div>
        <div className="w-full bg-[#E5EFE0] h-2 rounded-full overflow-hidden flex">
          {selectedProduct === 'bio' ? (
            <>
              <div className="bg-[#8BA878] h-full w-[75%]" title="Natural Fiber" />
              <div className="bg-[#B4D3A2] h-full w-[25%]" title="Plant Binder" />
            </>
          ) : (
            <>
              <div className="bg-[#E8AFA4] h-full w-[85%]" title="Fossil Polyethylene" />
              <div className="bg-[#C85A54] h-full w-[15%]" title="Plasticizers" />
            </>
          )}
        </div>
        <div className="flex items-center justify-between text-[10px] text-[#6B5550] pt-1">
          <span>Comparative sustainability intelligence</span>
          <span className="text-[#3E6B27] font-bold">● Live Prototype Active</span>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 2. FACTORA: MANUFACTURING DECISION INTELLIGENCE (Pastel Sky & Slate)
// ----------------------------------------------------------------------
function FactoraInteractivePreview() {
  const [scenario, setScenario] = useState<'nominal' | 'stress' | 'mitigated'>('nominal');

  return (
    <div className="flex flex-col gap-4 font-typewriter text-xs text-[#332624] bg-[#F0F7FF] p-4 rounded-xl border-1.5 border-[#93C5FD]">
      {/* Cockpit Header & Scenario Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#93C5FD]/40 gap-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-[#DBEAFE] text-[#1D4ED8] border border-[#93C5FD]">
            <Factory className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[#1E3A8A] font-bold tracking-wide">FACTORA Telemetry Cockpit</span>
            <span className="block text-[10px] text-[#2563EB]">Operational Risk &amp; Simulation Engine</span>
          </div>
        </div>

        {/* Simulation Scenario Buttons */}
        <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-[#93C5FD]/50 self-start sm:self-auto shadow-2xs">
          <button
            type="button"
            onClick={() => setScenario('nominal')}
            className={`px-2 py-1 rounded text-[10px] font-bold transition-colors cursor-pointer ${
              scenario === 'nominal'
                ? 'bg-[#DBEAFE] text-[#1E3A8A] border border-[#93C5FD]'
                : 'text-[#6B5550] hover:text-[#1E3A8A]'
            }`}
          >
            Nominal
          </button>
          <button
            type="button"
            onClick={() => setScenario('stress')}
            className={`px-2 py-1 rounded text-[10px] font-bold transition-colors cursor-pointer ${
              scenario === 'stress'
                ? 'bg-[#FEE2E2] text-[#991B1B] border border-[#FCA5A5]'
                : 'text-[#6B5550] hover:text-[#991B1B]'
            }`}
          >
            Stress Spike
          </button>
          <button
            type="button"
            onClick={() => setScenario('mitigated')}
            className={`px-2 py-1 rounded text-[10px] font-bold transition-colors cursor-pointer ${
              scenario === 'mitigated'
                ? 'bg-[#DCFCE7] text-[#166534] border border-[#86EFAC]'
                : 'text-[#6B5550] hover:text-[#166534]'
            }`}
          >
            AI Buffer
          </button>
        </div>
      </div>

      {/* Industrial KPI Matrix */}
      <div className="grid grid-cols-3 gap-2.5">
        <div className="p-3 rounded-xl bg-white border border-[#93C5FD]/30 shadow-xs">
          <span className="text-[10px] text-[#6B5550] block mb-1">OEE Efficiency</span>
          <span className="text-lg font-bold font-display text-[#1E3A8A]">
            {scenario === 'nominal' && '88.4%'}
            {scenario === 'stress' && '62.1%'}
            {scenario === 'mitigated' && '91.6%'}
          </span>
          <span className={`text-[10px] block mt-0.5 font-bold ${
            scenario === 'stress' ? 'text-[#B91C1C]' : 'text-[#2563EB]'
          }`}>
            {scenario === 'nominal' && 'Balanced throughput'}
            {scenario === 'stress' && 'Critical Bottleneck'}
            {scenario === 'mitigated' && 'Optimized re-route'}
          </span>
        </div>

        <div className={`p-3 rounded-xl border transition-all ${
          scenario === 'stress'
            ? 'bg-[#FEF2F2] border-[#F87171] shadow-xs'
            : 'bg-white border-[#93C5FD]/30 shadow-xs'
        }`}>
          <span className="text-[10px] text-[#6B5550] block mb-1">Failure Risk</span>
          <span className={`text-lg font-bold font-display ${
            scenario === 'stress' ? 'text-[#DC2626]' : 'text-[#1E40AF]'
          }`}>
            {scenario === 'nominal' && 'Low (4.2%)'}
            {scenario === 'stress' && 'High (48.7%)'}
            {scenario === 'mitigated' && 'Safe (1.8%)'}
          </span>
          <span className="text-[10px] text-[#6B5550] block mt-0.5">
            {scenario === 'stress' ? 'Action Required' : 'Guarded Tolerance'}
          </span>
        </div>

        <div className="p-3 rounded-xl bg-white border border-[#93C5FD]/30 shadow-xs">
          <span className="text-[10px] text-[#6B5550] block mb-1">Decision Action</span>
          <span className="text-xs font-bold text-[#1E3A8A] block truncate">
            {scenario === 'nominal' && 'Maintain Flow'}
            {scenario === 'stress' && 'Downtime Alert'}
            {scenario === 'mitigated' && 'Shift Load B3'}
          </span>
          <span className="text-[10px] text-[#6B5550] block mt-1">What-If Prediction</span>
        </div>
      </div>

      {/* Simulated Production Risk Curve */}
      <div className="p-3 rounded-xl bg-white border border-[#93C5FD]/30">
        <div className="flex items-center justify-between text-[11px] mb-2">
          <span className="text-[#1E3A8A] font-bold">Predictive Line Horizon</span>
          <span className="text-[#2563EB] text-[10px]">What-If Simulation</span>
        </div>
        
        {/* Dynamic Waveform Graph */}
        <div className="h-10 w-full flex items-end gap-1.5 px-1 py-1 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
          {[35, 40, 38, 45, 42, 50, 48, 52, scenario === 'stress' ? 95 : 46, scenario === 'stress' ? 90 : 44, scenario === 'mitigated' ? 30 : 48, scenario === 'mitigated' ? 25 : 42].map((height, i) => (
            <div
              key={i}
              style={{ height: `${height}%` }}
              className={`flex-1 rounded-sm transition-all duration-300 ${
                height > 80
                  ? 'bg-[#EF4444]'
                  : height < 35
                  ? 'bg-[#10B981]'
                  : 'bg-[#3B82F6]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 3. ASSISTIVE NAVIGATION (Pastel Lavender & Rose)
// ----------------------------------------------------------------------
function AssistiveNavigationInteractivePreview() {
  return (
    <div className="flex flex-col gap-3 font-typewriter text-xs text-[#332624] bg-[#FDF4FF] p-4 rounded-xl border-1.5 border-[#E879F9]/50">
      <div className="flex items-center justify-between pb-2 border-b border-[#E879F9]/30">
        <div className="flex items-center gap-2 text-[#86198F] font-bold">
          <Navigation className="w-4 h-4 text-[#A21CAF]" />
          <span>Spatial Depth &amp; Audio Telemetry</span>
        </div>
        <span className="text-[#86198F] text-[10px] font-bold bg-[#FAE8FF] px-2 py-0.5 rounded border border-[#E879F9]/40">
          3RD PRIZE HACKATHON
        </span>
      </div>

      {/* Radar Scan Screen */}
      <div className="p-3 rounded-xl bg-white border border-[#E879F9]/40 flex items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full border border-[#C026D3]/40 bg-[#FDF4FF] flex items-center justify-center shrink-0">
            <span className="absolute inset-1 rounded-full border border-[#E879F9] animate-ping" />
            <Radio className="w-4 h-4 text-[#A21CAF]" />
          </div>
          <div>
            <p className="text-[#701A75] font-bold text-xs">Obstacle Vector: 0.9m Front-Right</p>
            <p className="text-[11px] text-[#6B5550]">
              Voice alert cue: &ldquo;Pavement barrier ahead, step left 20°&rdquo;
            </p>
          </div>
        </div>

        <div className="text-right shrink-0">
          <span className="text-[10px] text-[#6B5550] block">Scan Speed</span>
          <span className="text-xs font-bold text-[#86198F]">30 FPS Real-Time</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[10px]">
        <div className="p-2.5 rounded-lg bg-white border border-[#E879F9]/30">
          <span className="text-[#6B5550] block">Latency</span>
          <span className="text-[#701A75] font-bold text-xs">&lt; 180ms Response</span>
        </div>
        <div className="p-2.5 rounded-lg bg-white border border-[#E879F9]/30">
          <span className="text-[#6B5550] block">Audio Mode</span>
          <span className="text-[#701A75] font-bold text-xs">Spatial Binaural Speech</span>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// 4. AI TRAFFIC CONGESTION (Pastel Butter & Terracotta)
// ----------------------------------------------------------------------
function TrafficCongestionInteractivePreview() {
  return (
    <div className="flex flex-col gap-3 font-typewriter text-xs text-[#332624] bg-[#FFFBEB] p-4 rounded-xl border-1.5 border-[#FCD34D]">
      <div className="flex items-center justify-between pb-2 border-b border-[#FCD34D]/50">
        <div className="flex items-center gap-2 text-[#92400E] font-bold">
          <Activity className="w-4 h-4 text-[#D97706]" />
          <span>Urban Grid Adaptive Flow Matrix</span>
        </div>
        <span className="text-[#92400E] text-[10px] font-bold bg-[#FEF3C7] px-2 py-0.5 rounded border border-[#FCD34D]">
          2ND PRIZE IDEATHON
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <div className="p-3 rounded-xl bg-white border border-[#FCD34D]/60 shadow-xs">
          <span className="text-[10px] text-[#6B5550] block mb-1">Peak Queue Delay</span>
          <span className="text-base font-bold font-display text-[#B45309]">-34% Travel Latency</span>
          <span className="text-[10px] text-[#6B5550] block mt-0.5">Adaptive phase cycle</span>
        </div>

        <div className="p-3 rounded-xl bg-white border border-[#FCD34D]/60 shadow-xs">
          <span className="text-[10px] text-[#6B5550] block mb-1">Corridor Nodes</span>
          <span className="text-base font-bold font-display text-[#332624]">4 Arterial Corridors</span>
          <span className="text-[10px] text-[#B45309] font-bold block mt-0.5">Dynamic phase timing</span>
        </div>
      </div>

      <div className="p-2.5 rounded-xl bg-white border border-[#FCD34D]/50 text-[10px] text-[#6B5550] flex items-center justify-between">
        <span>Smarter approaches to municipal transit load</span>
        <span className="text-[#92400E] font-bold">Algorithmic Prototype</span>
      </div>
    </div>
  );
}
