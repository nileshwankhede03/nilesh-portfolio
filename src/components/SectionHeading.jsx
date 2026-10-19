export default function SectionHeading({ eyebrow, title, text, number }) {
  return (
    <div className="section-heading">
      <div className="section-label">
        <span className="section-dot" />
        <span>{eyebrow}</span>
        {number && <span className="section-number">/{number}</span>}
      </div>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}
