import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import ResourceCard from '../components/ResourceCard'

const resourcesData = [
  '董事会资源中心', 'AI资源中心', '亚洲基金ESG报告', '企业透明度法案',
  '网络安全资源中心', '完整披露', 'GDPR隐私中心', '影响力投资',
  '内部权威', 'MoFo@ITC', 'MoFounders', '生殖健康隐私权',
  '私募股权中心', '隐私图书馆', 'REIT资源中心', '制裁资源中心',
  'ScaleUp创业', '稳定币中心', '可持续发展中心', '美国州隐私法'
]

function ResourcesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHeader title="资源中心" subtitle="全面的专业资源和工具" />
      
      <section className="section">
        <div className="container">
          <div className="resource-grid">
            {resourcesData.map((title, index) => (
              <ResourceCard key={index} title={title} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default ResourcesPage
