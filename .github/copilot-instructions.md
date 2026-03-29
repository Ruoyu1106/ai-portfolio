<!-- Copilot / AI Agent brief for this repo (concise, actionable) -->
# 快速上手 — 给 AI 代码代理的说明

本仓库是一个使用 Next.js app 路由 (Next 16.x) 的个人作品集站点，使用 TypeScript + TailwindCSS。下面列出本项目的关键架构、约定和常用命令，便于 AI 代理立即进行安全、可预测的改动。

- **大局（Why & Architecture）:**
  - 单一前端应用，采用 Next.js `app/` 路由（Server Components 优先，客户端组件按需使用）。主入口在 `app/layout.tsx`（全局字体/样式/容器），首页在 `app/page.tsx`，其 UI 由 `components/` 下的多个默认导出组件组成（例如 `Hero`, `Navbar`, `FeaturedProjects`）。
  - 代码偏向静态内容展示/小型交互；无后端 API 目录（如需后端扩展，应新增 `app/api/...` 或独立服务）。

- **关键文件/目录（示例）：**
  - 首页： [app/page.tsx](app/page.tsx#L1)
  - 全局布局/字体： [app/layout.tsx](app/layout.tsx#L1)
  - 全局样式： [app/globals.css](app/globals.css#L1)
  - 组件： [components/](components)
  - 构建脚本与依赖： [package.json](package.json#L1)
  - 项目说明与代理规则： [AGENTS.md](AGENTS.md#L1)

- **重要项目约定 / 发现到的模式（不可随意更改）**
  - Next 版本较新：仓库包含 `AGENTS.md` 的提醒：“This is NOT the Next.js you know”。对 Next 内部 API/约定请以 `node_modules/next/dist/docs/` 为准，避免凭经验盲改。参考： [AGENTS.md](AGENTS.md#L1)
  - 使用 TypeScript 严格模式（`tsconfig.json` 的 `strict: true`），改动导出/类型签名时请同步更新类型。路径别名 `@/*` 指向仓库根（示例： `@/components/FeaturedProjects`）。
  - 组件通常为默认导出（`export default function ...`），请保持导出风格一致以免导入失败。
  - 样式基于 Tailwind v4，且全局样式在 `app/globals.css`，不要删除全局规则（如字体平滑、背景）。

- **开发 / 构建 / 调试 命令（必须可复现）**
  - 本地开发： `npm run dev`（等同 `next dev`）
  - 生产构建： `npm run build`，启动： `npm run start`
  - 静态检查： `npm run lint`（项目使用 `eslint`）

- **常见改动示例（AI 可直接执行的小任务）**
  - 修改首页文案或顺序：编辑 `app/page.tsx` 或组件 `components/Hero.tsx`、`components/InfoSection.tsx`。
  - 新增页面路由：创建新目录 `app/<route>/page.tsx`（遵循 app 路由约定，Server Component by default；需要 client-side state 时在文件顶部标注 `'use client'`）。
  - 添加/重命名组件：在 `components/` 下新增文件并使用默认导出；更新引用使用现有别名或相对路径（例如 `import X from '@/components/X'`）。

- **变更建议与禁忌（针对 AI 代理的操作规则）**
  - 保守修改：优先对内容和样式（组件 JSX、Tailwind 类）做改动；尽量避免修改 Next 配置或枢纽性文件（`next.config.ts`、`tsconfig.json`、`package.json`），除非明确说明。
  - 遵守 TypeScript 类型：任何对导出签名或组件 props 的改动必须修复 TypeScript 错误。
  - 不要删除 `app/layout.tsx` 中的字体/变量注入（`next/font` 用法）。
  - 若需要新增运行脚本或依赖，请先在 PR 中说明变更原因及回滚步骤。

- **调试/验证小贴士（可自动化执行）**
  - 编辑完成后运行 `npm run dev` 本地预览首页（http://localhost:3000）。
  - 运行 `npm run lint` 检查 ESLint 报错。
  - 对视觉改动，优先修改 Tailwind 类并在浏览器中验证；对行为改动，补充简短说明或小型用例。

如果上述任何部分不清楚或需要我把说明调成英文/更长的版本，请指出具体段落，我会迭代更新。
