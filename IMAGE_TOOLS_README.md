# 图片处理工具 - 使用说明

## 访问地址

开发服务器已启动，请访问：

**主页面：** http://localhost:3001/image-tools

## 功能页面

1. **图片压缩** - http://localhost:3001/image-tools/compress
   - 智能压缩图片大小
   - 可调节压缩质量（1-100%）
   - 显示压缩前后对比
   - 支持下载压缩后的图片

2. **抠图去背景** - http://localhost:3001/image-tools/remove-bg
   - 一键去除图片背景
   - 支持PNG透明背景导出
   - 演示版本（实际需要AI服务）

3. **图片识别** - http://localhost:3001/image-tools/recognize
   - 物体识别
   - 文字识别（OCR）
   - 场景识别
   - 演示版本（实际需要AI服务）

4. **AI生图** - http://localhost:3001/image-tools/ai-generate
   - 文字描述生成图片
   - 6种风格选择
   - 示例提示词
   - 演示版本（实际需要AI服务）

## 技术栈

- **框架：** Next.js 15 (App Router)
- **语言：** TypeScript
- **样式：** CSS Modules
- **构建工具：** Turbopack

## 功能特点

✅ 纯前端实现，无需后端
✅ 响应式设计，支持移动端
✅ 拖拽上传支持
✅ 实时预览
✅ 现代化UI设计

## 注意事项

当前版本为**演示版本**，部分功能使用了简化算法：

- **图片压缩**：完全可用，使用Canvas API实现
- **抠图去背景**：演示模式，实际需要集成 remove.bg API 或类似服务
- **图片识别**：演示模式，实际需要集成 OCR API（如百度、腾讯云）
- **AI生图**：演示模式，实际需要集成 Stable Diffusion、DALL-E 等服务

## 如何集成真实AI服务

### 1. 抠图服务
```typescript
// 集成 remove.bg API
const response = await fetch('https://api.remove.bg/v1.0/removebg', {
  method: 'POST',
  headers: {
    'X-Api-Key': 'YOUR_API_KEY',
  },
  body: formData
});
```

### 2. OCR服务
```typescript
// 集成百度OCR
const response = await fetch('https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: `access_token=${token}&image=${base64Image}`
});
```

### 3. AI生图服务
```typescript
// 集成 Stable Diffusion
const response = await fetch('YOUR_SD_API_ENDPOINT', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    prompt: userPrompt,
    style: selectedStyle
  })
});
```

## 开发命令

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 项目结构

```
nextjs-boilerplate/
└── app/
    └── image-tools/
        ├── page.tsx              # 主页面
        ├── styles.css            # 主页样式
        ├── tool-common.css       # 通用工具样式
        ├── compress/
        │   ├── page.tsx          # 压缩页面
        │   └── compress.css      # 压缩页面样式
        ├── remove-bg/
        │   └── page.tsx          # 抠图页面
        ├── recognize/
        │   └── page.tsx          # 识别页面
        └── ai-generate/
            └── page.tsx          # AI生图页面
```

## 浏览器支持

- Chrome/Edge (推荐)
- Firefox
- Safari
- 移动端浏览器

## 许可证

MIT License

---

**提示：** 如果端口3001被占用，服务器会自动选择其他可用端口。请查看终端输出获取实际端口号。
