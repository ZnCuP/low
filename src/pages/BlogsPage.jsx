import { motion } from 'framer-motion'
import PageHeader from '../components/PageHeader'
import './BlogsPage.css'

const blogsData = [
  { title: '集体诉讼解析', desc: '为您的业务提供集体诉讼和产品洞察。' },
  { title: '雇佣法评论', desc: '雇佣法问题的实用答案。' },
  { title: '联邦巡回法院', desc: '处理所有联邦巡回法院事务。' },
  { title: '政府合同洞察', desc: '最新的更新和分析。' },
  { title: '影响力', desc: '为影响力驱动的变革者提供法律和商业洞察。' },
  { title: '生命科学', desc: '因为没有人能免于法律。' },
  { title: '科技', desc: '在技术、法律和商业的交汇处。' },
  { title: '社交媒体', desc: '社交媒体的法律和商业。' }
]

function BlogsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageHeader title="博客" subtitle="专业领域的深入分析和评论" />
      
      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {blogsData.map((blog, index) => (
              <motion.div
                key={index}
                className="blog-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="blog-image">
                  <img src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200'%3E%3Crect fill='%23b0b0b0' width='300' height='200'/%3E%3C/svg%3E`} alt={blog.title} />
                </div>
                <h3>{blog.title}</h3>
                <p>{blog.desc}</p>
                <a href="#" className="blog-link">了解更多</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default BlogsPage
