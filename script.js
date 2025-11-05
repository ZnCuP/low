// 导航菜单切换
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // 动画效果
        const spans = menuToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // 跳过纯 # 链接
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            e.preventDefault();
            
            // 关闭移动菜单
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
            
            // 滚动到目标
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 滚动时添加导航栏阴影
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// 卡片动画（当滚动到视图时）
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 为所有卡片添加观察器
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.resource-card, .content-card, .blog-card');
    
    cards.forEach((card, index) => {
        // 初始状态
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.style.transitionDelay = `${index * 0.05}s`;
        
        observer.observe(card);
    });
});

// 搜索功能（可选）
function searchContent(query) {
    const cards = document.querySelectorAll('.resource-card, .content-card, .blog-card');
    const searchQuery = query.toLowerCase();
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(searchQuery) || searchQuery === '') {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// 筛选功能（可选）
function filterByCategory(category) {
    const cards = document.querySelectorAll('.content-card');
    
    cards.forEach(card => {
        const badge = card.querySelector('.card-badge');
        if (badge) {
            const cardCategory = badge.textContent.toLowerCase();
            if (category === 'all' || cardCategory.includes(category.toLowerCase())) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// 返回顶部按钮功能
const createBackToTop = () => {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'back-to-top';
    button.setAttribute('aria-label', '返回顶部');
    
    button.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--accent-color);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
};

// 初始化返回顶部按钮
createBackToTop();

// 加载动画
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// 防止页面快速刷新时的闪烁
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease';

// 处理链接点击的视觉反馈
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        // 为外部链接添加确认（可选）
        const href = this.getAttribute('href');
        if (href && href.startsWith('http') && !href.includes(window.location.hostname)) {
            // 可以在这里添加外部链接确认逻辑
        }
    });
});

// 响应式表格处理（如果有的话）
function makeTablesResponsive() {
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
        const wrapper = document.createElement('div');
        wrapper.style.overflowX = 'auto';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
    });
}

// 初始化时运行
document.addEventListener('DOMContentLoaded', () => {
    makeTablesResponsive();
});

// 键盘导航支持
document.addEventListener('keydown', (e) => {
    // ESC 键关闭移动菜单
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// 打印前处理
window.addEventListener('beforeprint', () => {
    // 展开所有折叠的内容
    document.querySelectorAll('.nav-menu').forEach(menu => {
        menu.style.display = 'none';
    });
});

// 性能优化：图片懒加载（如果需要）
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// 导出函数供外部使用
window.resourceHub = {
    search: searchContent,
    filter: filterByCategory,
    lazyLoad: lazyLoadImages
};