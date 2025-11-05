import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import ContentCard from '../components/ContentCard'

const insightsData = [
  { badge: '客户警报', title: '欧洲数字合规：关键数字监管与合规发展', date: '2025年11月3日' },
  { badge: '客户警报', title: '网络威胁情报共享能否在CISA 2015失效后继续？', date: '2025年10月30日' },
  { badge: '客户警报', title: 'NIH采用超越DOJ规则要求的"批量敏感数据"政策', date: '2025年10月28日' },
  { badge: '文章', title: '专利保护是化妆品未来的基础', date: '2025年10月28日' },
  { badge: '文章', title: '成为隐私律师', date: '2025年10月27日' },
  { badge: '报告', title: '超越硅谷：全球风投条款报告（2025版）', date: '2025年10月27日' },
  { badge: '客户警报', title: 'AI监管框架的最新发展', date: '2025年10月25日' },
  { badge: '文章', title: '数字资产的法律挑战', date: '2025年10月24日' },
  { badge: '报告', title: '2025年ESG合规趋势', date: '2025年10月23日' }
]

function InsightsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHeader title="洞察" subtitle="深入的法律和行业分析" />
      
      <section className="section">
        <div className="container">
          <div className="content-grid">
            {insightsData.map((item, index) => (
              <ContentCard
                key={index}
                badge={item.badge}
                title={item.title}
                date={item.date}
                imagePlaceholder={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect fill='%23e0e0e0' width='400' height='200'/%3E%3C/svg%3E`}
              />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default InsightsPage
