import{_ as i,c as l,o as a,ag as p}from"./chunks/framework.CWgYnWha.js";const t="/Docs-BLT/example.png",o="/Docs-BLT/example2.png",g=JSON.parse('{"title":"使用教程","description":"","frontmatter":{},"headers":[],"relativePath":"use-BLT/user-guide.md","filePath":"use-BLT/user-guide.md"}'),r={name:"use-BLT/user-guide.md"};function s(n,e,_,u,c,d){return a(),l("div",null,e[0]||(e[0]=[p('<h1 id="使用教程" tabindex="-1">使用教程 <a class="header-anchor" href="#使用教程" aria-label="Permalink to &quot;使用教程&quot;">​</a></h1><ul><li><p>执行exe文件后，会打开一个命令行窗口</p></li><li><p>按照命令行窗口的提示进行操作即可 (此时文件目录下会创建agreed文件,请将该文件中的ID发送管理员从而获得使用权限)</p></li><li><p>选择自己想要使用的登录方式进行登录,登陆成功后程序将记录您的账号方便下次使用</p></li><li><p>登录成功后，可以任意选择抢票方式进行抢票，目前支持的抢票方式有：</p><ol><li>定点抢票：程序会自动检测您输入的项目ID的开票时间，有票则自动抢票，无票则继续检测，直到有票为止</li><li>直接抢票：程序会直接尝试抢票，无论是否有票，都将发送api,抢票成功后则会提示您</li><li>余票检测：程序会检测您输入的项目ID的余票数量，有票则直接抢票,无票则继续监测,抢票成功后则会提示您</li></ol></li><li><p>退出程序后，在下次启动时，程序会自动登录退出前的账号,同时还将记录上一次的抢购的ID和方式,你可在此时看到如下情况</p><p><img src="'+t+'" alt="示例图片1"></p></li><li><p>在账号使用工具里您可以看到</p><p><img src="'+o+'" alt="示例图片2"></p><ol><li><p>覆盖默认UA：覆盖默认的User-Agent，以便于模拟真实浏览器进行抢票</p></li><li><p>覆盖gaia_vtoken: 覆盖gaia_vtoken，极验过码以及爬虫参数(小白勿动)</p></li><li><p>分享模式: 获取分享json文件以及环境参数,分享给其他人使用</p></li></ol></li><li><p>您可以通过全新启动,恢复初始化来登录其他账号,或者通过分享模式分享给其他人使用</p></li></ul><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ul><li><p>请不要在公共场所使用该工具，以免造成不必要的损失</p></li><li><p>避免在抢票前几分钟内频繁关闭程序，以免造成IP变化出发风控</p></li></ul>',4)]))}const h=i(r,[["render",s]]);export{g as __pageData,h as default};
