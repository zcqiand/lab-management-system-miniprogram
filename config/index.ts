import { defineConfig } from "@tarojs/cli";

// Taro 编译配置。骨架期仅此最小形状；weapp 构建门本期不设（spec §4.2），
// 本文件由 L3 tsc 做类型断言。projectName 由 init 的 lab-management-system-miniprogram 替换落位。
export default defineConfig({
  projectName: "lab-management-system-miniprogram",
  framework: "react",
  compiler: "webpack5",
});
