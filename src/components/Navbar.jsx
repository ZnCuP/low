import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

const megaMenuItems = {
  firm: ['关于', '领导层', '多元化', '职业发展', '办公地点', '校友'],
  practices: ['企业', '诉讼', '交易', '监管', '知识产权', '劳动雇佣'],
  industries: ['技术', '生命科学', '金融服务', '能源', '房地产', '零售'],
  people: ['律师', '专业人员', '专家团队'],
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [signupOpen, setSignupOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [megaMenu, setMegaMenu] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-container">
          {/* Logo */}
          <Link to="/" className="nav-logo">
            <svg width="180" height="40" viewBox="0 0 180 40" fill="currentColor">
              <text x="0" y="28" fontFamily="serif" fontSize="24" fontWeight="bold">Morrison Foerster</text>
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-desktop">
            <div className="nav-links">
              <div 
                className="nav-item"
                onMouseEnter={() => setMegaMenu('firm')}
                onMouseLeave={() => setMegaMenu(null)}
              >
                <span>公司</span>
                <AnimatePresence>
                  {megaMenu === 'firm' && (
                    <motion.div 
                      className="mega-menu"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {megaMenuItems.firm.map(item => (
                        <a key={item} href="#">{item}</a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div 
                className="nav-item"
                onMouseEnter={() => setMegaMenu('practices')}
                onMouseLeave={() => setMegaMenu(null)}
              >
                <span>业务领域</span>
                <AnimatePresence>
                  {megaMenu === 'practices' && (
                    <motion.div 
                      className="mega-menu"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {megaMenuItems.practices.map(item => (
                        <a key={item} href="#">{item}</a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div 
                className="nav-item"
                onMouseEnter={() => setMegaMenu('industries')}
                onMouseLeave={() => setMegaMenu(null)}
              >
                <span>行业</span>
                <AnimatePresence>
                  {megaMenu === 'industries' && (
                    <motion.div 
                      className="mega-menu"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {megaMenuItems.industries.map(item => (
                        <a key={item} href="#">{item}</a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div 
                className="nav-item"
                onMouseEnter={() => setMegaMenu('people')}
                onMouseLeave={() => setMegaMenu(null)}
              >
                <span>人员</span>
                <AnimatePresence>
                  {megaMenu === 'people' && (
                    <motion.div 
                      className="mega-menu"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {megaMenuItems.people.map(item => (
                        <a key={item} href="#">{item}</a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <Link to="/" className="nav-item active">
                <span>资源</span>
              </Link>
            </div>

            {/* Right side actions */}
            <div className="nav-actions">
              <button 
                className="search-btn"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="搜索"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8" strokeWidth="2"/>
                  <path d="M21 21l-4.35-4.35" strokeWidth="2"/>
                </svg>
              </button>
              
              <button 
                className="menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                MENU
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div 
            className="search-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSearchOpen(false)}
          >
            <motion.div 
              className="search-box"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: -50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <input 
                type="text" 
                placeholder="搜索..." 
                autoFocus
              />
              <button onClick={() => setSearchOpen(false)}>×</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Page Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="fullpage-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
          >
            <div className="menu-header">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                <svg width="180" height="40" viewBox="0 0 180 40" fill="currentColor">
                  <text x="0" y="28" fontFamily="serif" fontSize="24" fontWeight="bold">Morrison Foerster</text>
                </svg>
              </Link>
              <button 
                className="close-menu"
                onClick={() => setMenuOpen(false)}
              >
                ×
              </button>
            </div>
            
            <div className="menu-content">
              <div className="menu-section">
                <h3>资源</h3>
                <Link to="/resources" onClick={() => setMenuOpen(false)}>资源中心</Link>
                <Link to="/insights" onClick={() => setMenuOpen(false)}>洞察</Link>
                <Link to="/news" onClick={() => setMenuOpen(false)}>新闻</Link>
                <Link to="/events" onClick={() => setMenuOpen(false)}>活动</Link>
                <Link to="/blogs" onClick={() => setMenuOpen(false)}>博客</Link>
                <Link to="/podcasts" onClick={() => setMenuOpen(false)}>播客</Link>
                <Link to="/video-audio" onClick={() => setMenuOpen(false)}>视频音频</Link>
              </div>
              
              <div className="menu-section">
                <h3>关注我们</h3>
                <a href="#">订阅更新</a>
                <a href="#">LinkedIn</a>
                <a href="#">Twitter</a>
                <a href="#">YouTube</a>
              </div>
              
              <div className="menu-section">
                <button 
                  className="signup-btn"
                  onClick={() => {
                    setMenuOpen(false)
                    setSignupOpen(true)
                  }}
                >
                  SIGN UP
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Signup Modal */}
      <AnimatePresence>
        {signupOpen && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSignupOpen(false)}
          >
            <motion.div 
              className="signup-modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close"
                onClick={() => setSignupOpen(false)}
              >
                ×
              </button>
              <h2>订阅资源更新</h2>
              <p>了解最新的法律和行业洞察、新闻以及活动信息</p>
              <form>
                <input type="email" placeholder="电子邮件地址" required />
                <input type="text" placeholder="姓名" />
                <button type="submit">订阅</button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
