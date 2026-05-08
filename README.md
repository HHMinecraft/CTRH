# CTRH — Create: The Real Hardcore

硬核机械动力整合包 | NeoForge 1.21.1 | 117+ Mods

## 概述

以 **Create** 为核心的真实硬核整合包，结合 **TerraFirmaCraft** 群峦传说、**Create Aeronautics** 航空学，重写配方体系，打造沉浸式工业生存体验。

## 开发阶段

| 阶段 | 内容 | 状态 |
|------|------|------|
| 1 | Mod 收集与 packwiz 管理 | ✅ 完成 |
| 2 | 航空学配置、禁用工厂仪表、物理结构 | 🚧 进行中 |
| 3 | 重写配方（化工合成+交错电网+思索） | ⏳ 待开始 |
| 4 | 群峦兼容，硬核整合 | ⏳ 待开始 |

## 核心 Mod

| Mod | 用途 |
|-----|------|
| **Create** 6.0+ | 机械动力核心 |
| **Create Aeronautics** | 航空学，物理结构飞行器 |
| **Create: New Age** | 交错电网，电力系统 |
| **Create: Mixed Casing** | 混合机壳 |
| **Create: Mobile Packages** | 无人机物流 |
| **TerraFirmaCraft** | 群峦传说，硬核生存 |
| **Destroy** 🔶 | 化工合成（待 1.21.1 非官方移植） |
| **Silent Gear** | 工具定制 |

## 设计理念

- **真实物理** — 所有大型结构遵循物理规律，断裂后自动形成独立物理实体
- **化工深度** — 配方链基于真实化工合成路线
- **思索引导** — 几乎所有物品提供 Ponder 思索引导
- **硬核生存** — 群峦的岩石分层、金属锻造、食物腐烂等系统

## 使用方式

```bash
# 克隆仓库
git clone git@github.com:HHMinecraft/CTRH.git

# 安装 packwiz
go install github.com/packwiz/packwiz@latest

# 下载所有 mod
packwiz serve  # 启动本地服务器供 Prism Launcher 导入

# 或手动下载
packwiz modrinth install --all
```

## 贡献

通过 Pull Request 提交配方修改或配置调整。重大改动请先开 Issue 讨论。
