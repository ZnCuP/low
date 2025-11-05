import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import ContentCard from '../components/ContentCard'

const newsData = [
  { badge: '新闻', title: '公司就收购EverConnect提供咨询', date: '2025年11月3日' },
  { badge: '新闻', title: '四位合伙人入选2025年"执法精英"', date: '2025年10月31日' },
  { badge: '新闻', title: '获得法律援助基金会公益服务奖', date: '2025年10月29日' },
  { badge: '媒体报道', title: '加州超加工食品法可能引发全国监管浪潮', date: '2025年10月29日' },
  { badge: '新闻', title: '被评为Benchmark Litigation USA 2026诉讼强所', date: '2025年10月29日' },
  { badge: '新闻稿', title: '前OFAC官员加入公司', date: '2025年10月28日' }
]

function NewsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHeader title="新闻" subtitle="最新的公司新闻和行业动态" />
      
      <section className="section">
        <div className="container">
          <div className="content-grid">
            {newsData.map((item, index) => (
              <ContentCard
                key={index}
                badge={item.badge}
                title={item.title}
                date={item.date}
                imagePlaceholder={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect fill='%23d0d0d0' width='400' height='200'/%3E%3C/svg%3E`}
              />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default NewsPage
