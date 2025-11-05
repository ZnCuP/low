import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import ContentCard from '../components/ContentCard'

const eventsData = [
  { badge: '演讲活动', title: '创始人的退出策略：法律考虑与交易动态', date: '2026年1月14日 - 15日' },
  { badge: '演讲活动', title: '第12周：开放论坛回顾', date: '2025年12月12日' },
  { badge: '演讲活动', title: '数据隐私与国际合规的法律考虑', date: '2025年12月10日 - 11日' },
  { badge: '演讲活动', title: '第11周：从外国投资者融资：CFIUS基础', date: '2025年12月5日' },
  { badge: '演讲活动', title: 'ACI第42届FCPA国际会议', date: '2025年12月4日 - 5日' },
  { badge: '演讲活动', title: '第10周：首次公开募股(IPO)', date: '2025年11月20日' }
]

function EventsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHeader title="活动" subtitle="即将举行的会议、研讨会和培训" />
      
      <section className="section">
        <div className="container">
          <div className="content-grid">
            {eventsData.map((item, index) => (
              <ContentCard
                key={index}
                badge={item.badge}
                title={item.title}
                date={item.date}
                imagePlaceholder={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect fill='%23c0c0c0' width='400' height='200'/%3E%3C/svg%3E`}
              />
            ))}
          </div>
          
          <div className="cle-section">
            <h3>继续教育</h3>
            <p>从我们的CLE/MCLE课程中选择，或注册我们的CLE通讯以获取全面的CLE/MCLE机会列表。</p>
            <motion.button
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              查看CLE课程
            </motion.button>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default EventsPage
