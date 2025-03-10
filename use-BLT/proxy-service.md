# 代理服务实施方案

## 代理服务必要性

在API高频请求场景下，特别是多实例运行时，可能触发以下安全机制：

1. 请求频率限制（Rate Limiting）
2. HTTP 412状态码（风控拦截）
3. IP 封禁（禁止访问）

::: tip 技术建议
根据压力测试分析，建议在并发实例数≤30时优先优化网络资源配置。当并发实例≥30时，建议采用IP轮换机制保障服务稳定性。
:::

## 技术实现方案对比

| 方案类型      | 优势         | 局限性               |
|---------------|--------------|----------------------|
| 动态拨号      | 成本低       | 网络中断时间长       |
| 多网卡切换    | 切换快       | 硬件成本高           |
| 代理池        | 稳定性强     | 需服务采购           |

### 详细方法

- 向运营商获取新的IP，您需要重新拨号（重启路由器），重新连接基站（重启手机或重启电话卡），这也将耗费大量时间成本。

- 更换网络环境，虽然这种方法迅速，但是我们没有足够的网络环境更换，且需要大量人力成本。

- 使用代理池，缺点只有两个：一点长一点的延时和需要一些可以被接受的金钱成本。

## 适用场景说明

**建议启用场景**：
- 并发实例数≥30的集群部署
- 同IP高频请求触发风控策略

**不建议启用场景**：
- 单实例运行
- 低并发环境(<10实例)
  - 增加网络延迟(平均+150ms)
  - 降低请求成功率(约5-8%)

## 技术实施方案

推荐采用第三方代理服务商**快代理**的隧道代理服务，建议选用：  
`隧道代理·按量计费·分钟级IP轮换方案`

### 配置流程

1. **获取认证凭证**：
   - 登录[快代理](https://www.kuaidaili.com/)控制台
   - 进入[API设置-密钥管理](https://www.kuaidaili.com/uc/api/secret/)获取：

   你的**订单级API密钥信息**

     ```ini
     SecretId = 
     SecretKey = 
     ```

2. **提取连接参数**：
   ```yaml
   # 产品详情页获取
    [SecretId]:
    [SecretKey]
    [用户名] 
    [密码] 
    [域名] 
    [端口] 

3.  **配置连接参数**：

    将上述得到的连接参数配置成如下格式，例如：
```ini
[SecretId] [SecretKey] http://[用户名]:[密码]@[域名]:[端口]
```
**ps: 注意不要带有空格，否则会导致连接失败。**

- 配置完成后,在询问是否使用代理选择是，将上述参数填入代理认证信息。

::: warning 注意事项
- 请确保API密钥信息安全，避免泄露。
- 请确保连接参数正确，否则会导致连接失败。
- 请确保网络环境稳定，避免因网络波动造成连接失败。
:::