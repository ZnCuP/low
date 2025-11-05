import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import ContentCard from '../components/ContentCard'

const videoAudioData = [
  { badge: '视频', title: '2025气候周NYC总结', date: '2025年9月30日' },
  { badge: '视频', title: '拥抱新挑战', date: '2025年8月14日' },
  { badge: '视频', title: '美国公共市场交易的最新趋势', date: '2025年7月28日' },
  { badge: '视频', title: '负责任的技术', date: '2025年7月25日' },
  { badge: '视频', title: '大语言模型的数据安全', date: '2025年7月16日' },
  { badge: '音频', title: '美国是世界的反贿赂警察。这会改变吗？', date: '2025年6月20日' }
]

function VideoAudioPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHeader title="视频 + 音频" subtitle="多媒体内容和录制的活动" />
      
      <section className="section">
        <div className="container">
          <div className="content-grid">
            {videoAudioData.map((item, index) => (
              <ContentCard
                key={index}
                badge={item.badge}
                title={item.title}
                date={item.date}
                imagePlaceholder={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200'%3E%3Crect fill='%23909090' width='400' height='200'/%3E%3Ctext fill='%23222' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='48'%3E${item.badge === '视频' ? '▶️' : '🔊'}%3C/text%3E%3C/svg%3E`}
              />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default VideoAudioPage
