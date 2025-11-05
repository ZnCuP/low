import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import ContentCard from '../components/ContentCard'

const podcastsData = [
  { badge: '播客', title: 'MTL和货币传输入门', date: '2025年10月23日' },
  { badge: '播客', title: '从法庭到合规：FCPA挑战与策略', date: '2025年10月13日' },
  { badge: '播客', title: '第24集 - 2025气候周NYC总结', date: '2025年9月30日' },
  { badge: '播客', title: '当你的生命科学岌岌可危：FDA政策', date: '2025年9月17日' },
  { badge: '播客', title: '从政策到实践：AI、隐私和风险导航', date: '2025年9月15日' },
  { badge: '播客', title: 'AI胜利，AI失败', date: '2025年8月18日' }
]

function PodcastsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHeader title="播客" subtitle="专家访谈和行业讨论" />
      
      <section className="section">
        <div className="container">
          <div className="content-grid">
            {podcastsData.map((item, index) => (
              <ContentCard
                key={index}
                badge={item.badge}
                title={item.title}
                date={item.date}
                imagePlaceholder={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect fill='%23a0a0a0' width='400' height='200'/%3E%3Ctext fill='%23333' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='48'%3E🎙️%3C/text%3E%3C/svg%3E`}
              />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default PodcastsPage
