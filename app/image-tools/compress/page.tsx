'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import './compress.css';

export default function CompressPage() {
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [originalImage, setOriginalImage] = useState<string>('');
  const [quality, setQuality] = useState(80);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    url: string;
    originalSize: number;
    compressedSize: number;
    ratio: number;
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (file.size > 10 * 1024 * 1024) {
      alert('文件大小不能超过 10MB');
      return;
    }

    if (!file.type.startsWith('image/')) {
      alert('请上传图片文件');
      return;
    }

    setOriginalFile(file);
    setResult(null);

    const reader = new FileReader();
    reader.onload = (e) => {
      setOriginalImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFileSelect(file);
  };

  const compressImage = () => {
    if (!originalFile || !originalImage) {
      alert('请先上传图片');
      return;
    }

    setLoading(true);

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d')!;

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            const ratio = ((1 - blob.size / originalFile.size) * 100).toFixed(2);

            setResult({
              url,
              originalSize: originalFile.size,
              compressedSize: blob.size,
              ratio: parseFloat(ratio),
            });
          }
          setLoading(false);
        },
        'image/jpeg',
        quality / 100
      );
    };
    img.src = originalImage;
  };

  const downloadImage = () => {
    if (!result) return;
    const link = document.createElement('a');
    link.href = result.url;
    link.download = `compressed_${originalFile?.name}`;
    link.click();
  };

  const reset = () => {
    setOriginalFile(null);
    setOriginalImage('');
    setResult(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="compress-container">
      <div className="background-gradient"></div>

      <header className="page-header">
        <h1 className="page-title">图片压缩</h1>
        <p className="page-description">智能压缩图片大小，保持高质量</p>
        <Link href="/image-tools" className="back-btn">
          ← 返回首页
        </Link>
      </header>

      <div className="tool-container">
        {!originalImage ? (
          <div className="upload-area">
            <div
              className="upload-zone"
              onClick={() => fileInputRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <div className="upload-icon">📁</div>
              <div className="upload-text">点击或拖拽图片到这里</div>
              <div className="upload-hint">支持 JPG、PNG、WebP 格式，最大 10MB</div>
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
          <div className="preview-area active">
            <h3>原始图片</h3>
            <img src={originalImage} className="preview-image" alt="原始图片" />

            <div className="compression-controls">
              <label htmlFor="qualitySlider">
                压缩质量: <span>{quality}</span>%
              </label>
              <input
                type="range"
                id="qualitySlider"
                min="1"
                max="100"
                value={quality}
                onChange={(e) => setQuality(parseInt(e.target.value))}
              />
            </div>

            <div className="action-buttons">
              <button className="btn btn-primary" onClick={compressImage} disabled={loading}>
                {loading ? '压缩中...' : '开始压缩'}
              </button>
              <button className="btn btn-secondary" onClick={reset}>
                重新选择
              </button>
            </div>

            {loading && (
              <div className="loading active">
                <div className="spinner"></div>
                <p>正在压缩...</p>
              </div>
            )}

            {result && (
              <div className="result-info">
                <h3>压缩结果</h3>
                <img src={result.url} className="preview-image" alt="压缩后图片" />
                <p>
                  原始大小: <strong>{formatFileSize(result.originalSize)}</strong>
                </p>
                <p>
                  压缩后大小: <strong>{formatFileSize(result.compressedSize)}</strong>
                </p>
                <p>
                  压缩率: <strong>{result.ratio}%</strong>
                </p>
                <button className="btn btn-primary" onClick={downloadImage}>
                  下载压缩图片
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
