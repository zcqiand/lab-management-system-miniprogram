import { defineConfig } from "@tarojs/cli";

// Taro 编译配置。骨架期最小形状；L4.5 weapp 构建门要求 sourceRoot/outputRoot——
// Kernel.initPaths 的必需值，缺失即 TypeError（2026-10-19 本仓 L4.5 首跑实证）。
// projectName 由 init 的 lab-management-system-miniprogram 替换落位。
export default defineConfig({
  projectName: "lab-management-system-miniprogram",
  framework: "react",
  compiler: "webpack5",
  sourceRoot: "src",
  outputRoot: "dist",
  mini: {},
  h5: {},
});
