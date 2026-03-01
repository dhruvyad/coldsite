import useInView from '../hooks/useInView'
import './WorkflowAnimation.css'

const nodes = [
  {
    label: 'Form Submitted',
    icon: (
      <svg className="w-5 h-5 text-emerald" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'AI Processes',
    icon: (
      <svg className="w-5 h-5 text-emerald" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
  {
    label: 'CRM Updated',
    icon: (
      <svg className="w-5 h-5 text-emerald" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    label: 'Team Notified',
    icon: (
      <svg className="w-5 h-5 text-emerald" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
      </svg>
    ),
  },
]

// Delay stagger for each segment's dot (in seconds)
// Segment 0 (between node 0-1): 0s delay
// Segment 1 (between node 1-2): 1.5s delay
// Segment 2 (between node 2-3): 3s delay
const dotDelays = [0, 1.5, 3]

// Node glow delays — each node glows when the dot arrives at it
// Node 0 glows at start, node 1 after dot 0 finishes, etc.
const nodeGlowDelays = [0, 1.5, 3, 4.5]

function WorkflowNode({ node, index, isInView }) {
  return (
    <div
      className={`
        relative flex flex-col items-center justify-center
        w-full md:w-36 h-20 md:h-24
        rounded-xl bg-white/[0.02] border border-white/[0.06]
        transition-opacity duration-700 ease-out
        ${isInView ? 'opacity-100' : 'opacity-0'}
        ${isInView ? 'workflow-node-glow' : ''}
      `}
      style={{
        transitionDelay: `${index * 120}ms`,
        animationDelay: isInView ? `${nodeGlowDelays[index]}s` : '0s',
      }}
    >
      {node.icon}
      <span className="text-xs text-zinc-400 mt-2 select-none">{node.label}</span>
    </div>
  )
}

function ConnectorDesktop({ index, isInView }) {
  return (
    <div className="hidden md:flex flex-1 items-center relative min-w-[3rem]">
      {/* Dashed line */}
      <div className="w-full border-t border-dashed border-white/[0.08]" />
      {/* Traveling dot */}
      {isInView && (
        <div
          className="workflow-dot-x"
          style={{ animationDelay: `${dotDelays[index]}s` }}
        />
      )}
    </div>
  )
}

function ConnectorMobile({ index, isInView }) {
  return (
    <div className="flex md:hidden justify-center relative h-8">
      {/* Dashed line */}
      <div className="h-full border-l border-dashed border-white/[0.08]" />
      {/* Traveling dot */}
      {isInView && (
        <div
          className="workflow-dot-y"
          style={{ animationDelay: `${dotDelays[index]}s` }}
        />
      )}
    </div>
  )
}

export default function WorkflowAnimation() {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="py-12 md:py-16 px-6 overflow-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Desktop: horizontal flow */}
        <div className="hidden md:flex items-center">
          {nodes.map((node, i) => (
            <div key={node.label} className="contents">
              <WorkflowNode node={node} index={i} isInView={isInView} />
              {i < nodes.length - 1 && (
                <ConnectorDesktop index={i} isInView={isInView} />
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical flow */}
        <div className="flex md:hidden flex-col items-center">
          {nodes.map((node, i) => (
            <div key={node.label} className="contents">
              <WorkflowNode node={node} index={i} isInView={isInView} />
              {i < nodes.length - 1 && (
                <ConnectorMobile index={i} isInView={isInView} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
