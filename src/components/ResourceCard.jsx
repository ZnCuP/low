import { motion } from 'framer-motion'
import './ResourceCard.css'

function ResourceCard({ title, href = '#' }) {
  return (
    <motion.a
      href={href}
      className="resource-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <h3>{title}</h3>
      <span className="arrow">→</span>
    </motion.a>
  )
}

export default ResourceCard
