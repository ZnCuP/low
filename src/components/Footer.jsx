import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="YouTube">YouTube</a>
          </div>
          <div className="footer-links">
            <a href="#">条款/声明</a>
            <a href="#">Cookie</a>
            <a href="#">隐私政策</a>
            <a href="#">报告热线</a>
            <a href="#">律师广告</a>
            <a href="#">校友</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 专业服务中心。保留所有权利。</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
