'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import '../tool-common.css';

export default function RemoveBgPage() {
  const [originalImage, setOriginalImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultImage, setResultImage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (file.size > 10 * 1024 * 1024) {
      alert('文件大小不能超过 10MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setOriginalImage(e.target?.result as string);
      setResultImage('');
    };
    reader.readAsDataURL(file);
  };

  const removeBackground = () => {
    setLoading(true);
    // 模拟处理
    setTimeout(() => {
      setResultImage(originalImage); // 演示版本
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="tool-page-container">
      <div className="background-gradient"></div>

      <header className="page-header">
        <h1 className="page-title">抠图去背景</h1>
        <p className="page-description">一键去除图片背景，精准抠图</p>
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
              <div className="upload-icon">🖼️</div>
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
            <h3>原始图片</h3>
            <img src={originalImage} className="preview-image" alt="原始图片" />

            <div className="action-buttons">
              <button className="btn btn-primary" onClick={removeBackground} disabled={loading}>
                {loading ? '处理中...' : '去除背景'}
              </button>
              <button className="btn btn-secondary" onClick={() => setOriginalImage('')}>
                重新选择
              </button>
            </div>

            {loading && (
              <div className="loading active">
                <div className="spinner"></div>
                <p>正在处理...</p>
              </div>
            )}

            {resultImage && (
              <div className="result-info">
                <h3>处理结果</h3>
                <p className="info-text">注意：此为演示模式，实际功能需要连接AI服务（如 remove.bg API）</p>
                <img src={resultImage} className="preview-image" alt="处理后图片" />
                <button className="btn btn-primary" onClick={() => {
                  const link = document.createElement('a');
                  link.href = resultImage;
                  link.download = 'no-bg.png';
                  link.click();
                }}>
                  下载图片
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
