'use client';

import { useState } from 'react';
import Link from 'next/link';
import '../tool-common.css';

export default function AIGeneratePage() {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('realistic');
  const [loading, setLoading] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);

  const styles = [
    { id: 'realistic', icon: '📷', name: '写实风格' },
    { id: 'anime', icon: '🎨', name: '动漫风格' },
    { id: 'oil', icon: '🖼️', name: '油画风格' },
    { id: 'watercolor', icon: '🎭', name: '水彩风格' },
    { id: 'sketch', icon: '✏️', name: '素描风格' },
    { id: '3d', icon: '🎮', name: '3D渲染' },
  ];

  const examplePrompts = [
    '一只可爱的橘猫坐在窗台上，阳光洒在它身上',
    '未来科技城市，霓虹灯闪烁',
    '宁静的森林湖泊，清晨的薄雾',
    '宇宙中的星云，五彩斑斓'
  ];

  const generateImage = () => {
    if (!prompt.trim()) {
      alert('请输入图片描述');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      // 生成演示图片
      const demoImages = [
        `https://via.placeholder.com/512x512/667eea/ffffff?text=${encodeURIComponent(style + ' 1')}`,
        `https://via.placeholder.com/512x512/764ba2/ffffff?text=${encodeURIComponent(style + ' 2')}`
      ];
      setGeneratedImages(demoImages);
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="tool-page-container">
      <div className="background-gradient"></div>

      <header className="page-header">
        <h1 className="page-title">AI 生图</h1>
        <p className="page-description">文字描述生成精美图片</p>
        <Link href="/image-tools" className="back-btn">← 返回首页</Link>
      </header>

      <div className="tool-container">
        <div className="prompt-area">
          <h3>输入描述</h3>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="请输入您想要生成的图片描述..."
            style={{
              width: '100%',
              minHeight: '120px',
              padding: '15px',
              border: '2px solid #e0e0e0',
              borderRadius: '10px',
              fontSize: '1rem',
              fontFamily: 'inherit',
              resize: 'vertical'
            }}
          />

          <h3 style={{ marginTop: '20px' }}>选择风格</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px', margin: '20px 0' }}>
            {styles.map((s) => (
              <div
                key={s.id}
                onClick={() => setStyle(s.id)}
                style={{
                  padding: '15px',
                  background: style === s.id ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#f8f9ff',
                  color: style === s.id ? 'white' : '#333',
                  border: '2px solid',
                  borderColor: style === s.id ? '#667eea' : 'transparent',
                  borderRadius: '10px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '5px' }}>{s.icon}</div>
                <div>{s.name}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '15px' }}>
            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '10px' }}>💡 试试这些示例：</p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {examplePrompts.map((ex, i) => (
                <button
                  key={i}
                  className="btn btn-secondary"
                  style={{ fontSize: '0.85rem', padding: '8px 15px' }}
                  onClick={() => setPrompt(ex)}
                >
                  {ex.substring(0, 15)}...
                </button>
              ))}
            </div>
          </div>

          <div className="action-buttons">
            <button className="btn btn-primary" onClick={generateImage} disabled={loading}>
              {loading ? '生成中...' : '生成图片'}
            </button>
            <button className="btn btn-secondary" onClick={() => { setPrompt(''); setGeneratedImages([]); }}>
              清空
            </button>
          </div>
        </div>

        {loading && (
          <div className="loading active">
            <div className="spinner"></div>
            <p>AI正在创作中，请稍候...</p>
          </div>
        )}

        {generatedImages.length > 0 && (
          <div className="preview-area">
            <h3>生成结果</h3>
            <p className="info-text">
              注意：此为演示模式，实际AI生图需要连接服务（Stable Diffusion、DALL-E等）
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
              {generatedImages.map((img, i) => (
                <div key={i} style={{ background: 'white', borderRadius: '10px', padding: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                  <img src={img} alt={`生成图片 ${i + 1}`} style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
                  <button className="btn btn-primary" style={{ width: '100%' }}>下载图片</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
