import useInView from '../hooks/useInView'
import './WorkflowAnimation.css'

const nodes = [
  { label: 'New Lead', x: 20, y: 98, w: 100, h: 44 },
  { label: 'Enrich Data', x: 200, y: 98, w: 110, h: 44 },
  { label: 'Route to Rep', x: 400, y: 33, w: 120, h: 44 },
  { label: 'Send Slack', x: 405, y: 163, w: 110, h: 44 },
  { label: 'Update CRM', x: 605, y: 98, w: 120, h: 44 },
]

const connections = [
  { d: 'M120,120 L200,120', phase: 'flow-phase-1' },
  { d: 'M310,120 C355,120 380,55 400,55', phase: 'flow-phase-2' },
  { d: 'M310,120 C355,120 385,185 405,185', phase: 'flow-phase-2' },
  { d: 'M520,55 C555,55 580,120 605,120', phase: 'flow-phase-3' },
  { d: 'M515,185 C550,185 580,120 605,120', phase: 'flow-phase-3' },
]

export default function WorkflowAnimation() {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="py-6 md:py-10 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <div
          className={`workflow-card rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Card header */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
            <span className="text-[11px] text-zinc-600 font-medium tracking-wide">workflow</span>
          </div>

          {/* SVG diagram */}
          <div className="px-2 py-4 md:px-6 md:py-8">
            <svg
              viewBox="0 0 740 240"
              className="w-full h-auto"
              fill="none"
              role="img"
              aria-label="Automation workflow diagram showing data flowing from new lead through enrichment, routing, and CRM update"
            >
              {/* Base connection lines */}
              {connections.map((c, i) => (
                <path
                  key={`base-${i}`}
                  d={c.d}
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth={1.5}
                />
              ))}

              {/* Animated flow pulses */}
              {isInView &&
                connections.map((c, i) => (
                  <path
                    key={`flow-${i}`}
                    d={c.d}
                    stroke="#10b981"
                    strokeWidth={2}
                    strokeLinecap="round"
                    pathLength="1"
                    strokeDasharray="0.15 2"
                    className={c.phase}
                  />
                ))}

              {/* Nodes */}
              {nodes.map((node) => (
                <g key={node.label}>
                  <rect
                    x={node.x}
                    y={node.y}
                    width={node.w}
                    height={node.h}
                    rx={8}
                    fill="rgba(255,255,255,0.03)"
                    stroke="rgba(255,255,255,0.07)"
                    strokeWidth={1}
                  />
                  <circle
                    cx={node.x + 14}
                    cy={node.y + node.h / 2}
                    r={3}
                    fill="#10b981"
                    opacity={0.5}
                  />
                  <text
                    x={node.x + 24}
                    y={node.y + node.h / 2 + 4}
                    fill="#a1a1aa"
                    fontSize={11}
                    fontFamily="'Space Grotesk', sans-serif"
                  >
                    {node.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
