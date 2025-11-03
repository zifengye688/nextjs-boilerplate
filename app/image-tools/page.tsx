'use client';

import Link from 'next/link';
import './styles.css';

export default function ImageToolsPage() {
  return (
    <div className="image-tools-container">
      <div className="background-gradient"></div>

      <header className="main-header">
        <h1 className="site-title">图片处理工具</h1>
        <p className="subtitle">专业、快速、便捷的在线图片处理平台</p>
      </header>

      <main className="container">
        <section className="features-grid">
          <Link href="/image-tools/compress" className="feature-card">
            <div className="feature-icon">🗜️</div>
            <h3>图片压缩</h3>
            <p>智能压缩图片大小，保持高质量</p>
            <button className="feature-btn">开始使用</button>
          </Link>

          <Link href="/image-tools/remove-bg" className="feature-card">
            <div className="feature-icon">✂️</div>
            <h3>抠图去背景</h3>
            <p>一键去除图片背景，精准抠图</p>
            <button className="feature-btn">开始使用</button>
          </Link>

          <Link href="/image-tools/recognize" className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>图片识别</h3>
            <p>AI智能识别图片内容和文字</p>
            <button className="feature-btn">开始使用</button>
          </Link>

          <Link href="/image-tools/ai-generate" className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>AI 生图</h3>
            <p>文字描述生成精美图片</p>
            <button className="feature-btn">开始使用</button>
          </Link>
        </section>

        <section className="info-section">
          <h2>为什么选择我们？</h2>
          <div className="info-grid">
            <div className="info-item">
              <div className="info-icon">⚡</div>
              <h4>快速处理</h4>
              <p>高效算法，秒级完成处理</p>
            </div>
            <div className="info-item">
              <div className="info-icon">🔒</div>
              <h4>隐私安全</h4>
              <p>本地处理，保护您的隐私</p>
            </div>
            <div className="info-item">
              <div className="info-icon">💎</div>
              <h4>高质量</h4>
              <p>专业算法，保证输出质量</p>
            </div>
            <div className="info-item">
              <div className="info-icon">📱</div>
              <h4>多端适配</h4>
              <p>支持电脑、手机、平板</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2025 图片处理工具 - 让图片处理更简单</p>
      </footer>
    </div>
  );
}
