# 抢票秘籍

在本项目使用中，我们以 BW2024 抢票为例进行说明。

BW2024 采用“一号多证”的购票制度，即一个 B 站账号可为多名购票人购票，但所有购票均需实名制。

基于此情况，我们根据不同需求总结出以下几种抢票方案：

| 人数 | 场次 | 方案 |
| --- | --- | --- |
| 1 人 | 1 场 | 单开 |
| 1 人 | 多场 | 多开 |
| 2 - 4 人 | 1 场 | 单开 |
| 2 - 4 人 | 多场 | 多开 |
| 5 人及以上 | 任意场次 | 多开 |

下面将分别介绍这两种抢票方案。其中，单开方案风险最低，抢票成功率最高；而多开方案的风险相对较高。

## 单开

单开模式下，最理想的情况是在开票瞬间成功抢到票。

建议您使用“定点抢票模式”，提前设置好相关参数，程序会自动完成开票前的所有准备工作，并在开票准点（以阿里云授时系统时间为准）自动创建订单。

操作时，您只需按照程序提示，选择默认的定点抢票模式，输入项目ID,然后选择票档、购票人等信息，之后耐心等待开票即可。

此外，如果您之前已经完整填写过订单信息，下次启动程序时无需再次输入。(可通过直接点击沿用配置即可)

## 多开

若您需要在同一时间抢购多个订单，多开模式是唯一选择。

目前该项目暂不开放多开模式，多开模式仅向亲友等特定人群开放。(为防止黄牛敬请谅解)

### 对于拥有多开功能的用户

您可以通过将本项目复制到独立的文件夹中进行多开，也可以直接多次打开本项目本体（会导致数据无法保存，下一次启动只会沿用最后一次的数据）。

经过测试，使用同一账号为同一购票人抢购不同场次的票不会受到限制，也不会触发 5 秒盾机制，因此您可以放心购票，无需使用代理。

::: tip
- 上述结论仅适用于 BLT 项目.
- 若您使用其他脚本或官方网站购票，**可能**会出现“3 分钟禁止购买”的情况，请您留意。
- 若您有多开需求，请联系项目组。
:::
