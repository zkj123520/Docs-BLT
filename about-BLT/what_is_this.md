# 这是什么？

BLT Site (以下简称BLT)是基于子安替替哥哥的b站抢票辅助工具，目前处于测试阶段，功能尚不完善，请谨慎使用。

而本站则是一个针对此项目使用的文档站点。(为方便亲友与朋友使用)

由于原项目已闭源，因此本项目仅基于原项目开源的部分代码进行修改。

目前该项目仅供亲友以及朋友使用，严禁将其用于商业用途或营利性活动。


## 为什么要使用 BLT？


它可以帮助您快速地抢到票，免去繁琐的操作。

1. **智能抢票引擎**  
   - 基于RPA技术模拟真人操作，突破5秒盾防护
   - 自动重试机制（失败后0.5s极速重试，最多10次）
   
2. **强化风控对抗**  
   - 增加虚拟点击事件(模拟人类操作) 
   - 流量特征混淆技术（随机化点击间隔/滑动轨迹）

3. **智能验证系统**  
   - 本地化OCR识别（RROCR引擎，准确率>98%）  
   - 行为验证模拟（自动完成滑块/点选验证）

4. **实时监控体系**  
   - 命令行界面监控  
   - PushPlus+短信双通道通知
   - 快代理IP接入(可有效防止IP412风控)
