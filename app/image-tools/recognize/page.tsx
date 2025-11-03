'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import '../tool-common.css';

export default function RecognizePage() {
  const [originalImage, setOriginalImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [recognitionType, setRecognitionType] = useState('object');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (file.size > 10 * 1024 * 1024) {
      alert('文件大小不能超过 10MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setOriginalImage(e.target?.result as string);
      setResult('');
    };
    reader.readAsDataURL(file);
  };

  const recognizeImage = () => {
    setLoading(true);
    setTimeout(() => {
      let demoResult = '';
      if (recognitionType === 'object') {
        demoResult = `<div><p class="info-text">注意：此为演示模式</p><h4>检测到的物体：</h4><ul><li>人物 - 置信度: 95%</li><li>建筑 - 置信度: 87%</li><li>天空 - 置信度: 92%</li></ul></div>`;
      } else if (recognitionType === 'text') {
        demoResult = `<div><p class="info-text">注意：此为演示模式，实际OCR需要连接AI服务</p><h4>识别的文字：</h4><p>这是演示文本识别结果...</p></div>`;
      } else {
        demoResult = `<div><p class="info-text">注意：此为演示模式</p><h4>场景分析：</h4><ul><li>户外 - 置信度: 92%</li><li>城市 - 置信度: 85%</li><li>白天 - 置信度: 98%</li></ul></div>`;
      }
      setResult(demoResult);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="tool-page-container">
      <div className="background-gradient"></div>

      <header className="page-header">
        <h1 className="page-title">图片识别</h1>
        <p className="page-description">AI智能识别图片内容和文字</p>
        <Link href="/image-tools" className="back-btn">← 返回首页</Link>
      </header>

      <div className="tool-container">
        {!originalImage ? (
          <div className="upload-area">
            <div
              className="upload-zone"
              onClick={() => fileInputRef.current?.click()}
              onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files[0];
                if (file) handleFileSelect(file);
              }}
              onDragOver={(e) => e.preventDefault()}
            >
              <div className="upload-icon">🔍</div>
              <div className="upload-text">点击或拖拽图片到这里</div>
              <div className="upload-hint">支持 JPG、PNG 格式，最大 10MB</div>
              <input
                ref={fileInputRef}
                type="file"
                className="file-input"
                accept="image/*"
                onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
              />
            </div>
          </div>
        ) : (
          <div className="preview-area">
            <h3>待识别图片</h3>
            <img src={originalImage} className="preview-image" alt="待识别图片" />

            <div style={{ margin: '20px 0', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <label style={{ cursor: 'pointer', padding: '10px 20px', background: recognitionType === 'object' ? '#667eea' : '#f0f0f0', color: recognitionType === 'object' ? 'white' : '#333', borderRadius: '20px' }}>
                <input type="radio" name="type" value="object" checked={recognitionType === 'object'} onChange={(e) => setRecognitionType(e.target.value)} style={{ marginRight: '5px' }} />
                物体识别
              </label>
              <label style={{ cursor: 'pointer', padding: '10px 20px', background: recognitionType === 'text' ? '#667eea' : '#f0f0f0', color: recognitionType === 'text' ? 'white' : '#333', borderRadius: '20px' }}>
                <input type="radio" name="type" value="text" checked={recognitionType === 'text'} onChange={(e) => setRecognitionType(e.target.value)} style={{ marginRight: '5px' }} />
                文字识别
              </label>
              <label style={{ cursor: 'pointer', padding: '10px 20px', background: recognitionType === 'scene' ? '#667eea' : '#f0f0f0', color: recognitionType === 'scene' ? 'white' : '#333', borderRadius: '20px' }}>
                <input type="radio" name="type" value="scene" checked={recognitionType === 'scene'} onChange={(e) => setRecognitionType(e.target.value)} style={{ marginRight: '5px' }} />
                场景识别
              </label>
            </div>

            <div className="action-buttons">
              <button className="btn btn-primary" onClick={recognizeImage} disabled={loading}>
                {loading ? '识别中...' : '开始识别'}
              </button>
              <button className="btn btn-secondary" onClick={() => setOriginalImage('')}>
                重新选择
              </button>
            </div>

            {loading && (
              <div className="loading active">
                <div className="spinner"></div>
                <p>正在识别...</p>
              </div>
            )}

            {result && (
              <div className="recognition-result" dangerouslySetInnerHTML={{ __html: result }} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
