export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Main Container */}
      <main className="container mx-auto px-4 py-16 max-w-5xl">

        {/* Header Section */}
        <header className="text-center mb-20">
          {/* Avatar */}
          <div className="flex justify-center mb-8">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-400 via-gray-300 to-white shadow-2xl border-4 border-white/80 overflow-hidden">
                {/* Watercolor background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300/50 via-gray-200/30 to-white/90"></div>

                {/* White plum blossoms */}
                <svg className="absolute w-full h-full" viewBox="0 0 200 200">
                  {/* Branch */}
                  <path
                    d="M 20 150 Q 60 120 100 100 T 180 50"
                    stroke="#888"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.3"
                  />

                  {/* Plum blossom 1 */}
                  <g transform="translate(70, 100)">
                    <circle cx="0" cy="0" r="10" fill="white" opacity="0.95"/>
                    <circle cx="14" cy="0" r="10" fill="white" opacity="0.95"/>
                    <circle cx="7" cy="12" r="10" fill="white" opacity="0.95"/>
                    <circle cx="-7" cy="12" r="10" fill="white" opacity="0.95"/>
                    <circle cx="-14" cy="0" r="10" fill="white" opacity="0.95"/>
                    <circle cx="0" cy="0" r="4" fill="#fef3c7" opacity="0.9"/>
                  </g>

                  {/* Plum blossom 2 */}
                  <g transform="translate(130, 70)">
                    <circle cx="0" cy="0" r="8" fill="white" opacity="0.9"/>
                    <circle cx="11" cy="0" r="8" fill="white" opacity="0.9"/>
                    <circle cx="5.5" cy="9.5" r="8" fill="white" opacity="0.9"/>
                    <circle cx="-5.5" cy="9.5" r="8" fill="white" opacity="0.9"/>
                    <circle cx="-11" cy="0" r="8" fill="white" opacity="0.9"/>
                    <circle cx="0" cy="0" r="3" fill="#fef3c7" opacity="0.9"/>
                  </g>

                  {/* Plum blossom 3 (small) */}
                  <g transform="translate(110, 130)">
                    <circle cx="0" cy="0" r="6" fill="white" opacity="0.85"/>
                    <circle cx="8" cy="0" r="6" fill="white" opacity="0.85"/>
                    <circle cx="4" cy="7" r="6" fill="white" opacity="0.85"/>
                    <circle cx="-4" cy="7" r="6" fill="white" opacity="0.85"/>
                    <circle cx="-8" cy="0" r="6" fill="white" opacity="0.85"/>
                    <circle cx="0" cy="0" r="2" fill="#fef3c7" opacity="0.9"/>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 tracking-tight">
            子风野
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-600 font-light mb-8">
            故事宇宙构建者 · AI技术探索者
          </p>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400 mx-auto rounded-full"></div>
        </header>

        {/* About Section */}
        <section className="mb-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-200/50">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              关于我
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                我是一名<span className="font-semibold text-gray-900">20岁创作者</span>，自中学起深耕三个原创故事宇宙构建。
                以"长期主义"打磨创作内核，推翻5版剧情优化人物与世界观逻辑。
              </p>

              <p className="text-lg">
                坚信<span className="font-semibold text-gray-900">"故事不止于文字"</span>，
                同步探索AI技术与创作的融合，深耕前沿知识，专注以AI编程实现故事的交互式、可视化呈现。
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              <div className="text-center p-4 bg-gradient-to-br from-gray-100 to-white rounded-2xl border border-gray-200">
                <div className="text-4xl font-bold text-gray-900 mb-2">3</div>
                <div className="text-sm text-gray-600">原创故事宇宙</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-gray-100 to-white rounded-2xl border border-gray-200">
                <div className="text-4xl font-bold text-gray-900 mb-2">5+</div>
                <div className="text-sm text-gray-600">剧情迭代版本</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-gray-100 to-white rounded-2xl border border-gray-200">
                <div className="text-4xl font-bold text-gray-900 mb-2">8</div>
                <div className="text-sm text-gray-600">年创作经验</div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 text-center">
            技能与专长
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Skill 1 */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center mb-4 shadow-md">
                <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">故事创作</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                8年打磨经验，独立撰写人物小传、梳理主线/支线剧情，设计独特世界观规则。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-gray-200 text-gray-700">人物塑造</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-200 text-gray-700">剧情设计</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-200 text-gray-700">世界观</span>
              </div>
            </div>

            {/* Skill 2 */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center mb-4 shadow-md">
                <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI编程</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                深度体验即梦、可灵等工具，主用Claude Code系统学习AI编程，探索技术与故事融合。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-gray-200 text-gray-700">AI开发</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-200 text-gray-700">视频制作</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-200 text-gray-700">交互设计</span>
              </div>
            </div>

            {/* Skill 3 */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center mb-4 shadow-md">
                <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">目标规划</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                围绕"故事可视化"筛选学习方向，制定"编程+创作"双线计划，具备跨领域整合思维。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs rounded-full bg-gray-200 text-gray-700">规划能力</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-200 text-gray-700">跨域整合</span>
                <span className="px-3 py-1 text-xs rounded-full bg-gray-200 text-gray-700">长期主义</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 mt-12 border-t border-gray-300">
          <p className="text-gray-500 text-sm">
            © 2025 子风野 · 探索AI与创作的无限可能
          </p>
        </footer>
      </main>
    </div>
  );
}
