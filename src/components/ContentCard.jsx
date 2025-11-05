import { motion } from 'framer-motion'
import './ContentCard.css'

function ContentCard({ badge, title, date, href = '#', imagePlaceholder }) {
  return (
    <motion.article
      className="content-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <div className="card-image">
        <div className="card-badge">{badge}</div>
        <img src={imagePlaceholder} alt={title} loading="lazy" />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p className="card-date">{date}</p>
        <a href={href} className="card-link">
          了解更多 →
        </a>
      </div>
    </motion.article>
  )
}

export default ContentCard
