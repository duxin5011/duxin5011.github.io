# npm发布自定义VUE插件
&ensp;&ensp;&ensp;&ensp;因为公司需求，要在各系统要做一个问题反馈机器人功能，因此我就想把它做成一个公共组件放在npm上以后也方便使用和管理，接下来为大家简单介绍下我在发布npm中的流程以及问题.

### 一 修改webpack以及package.json
>打开webpack.config.js（或者build文件夹下webpack.base.conf.js）如下图修改

>![图片](static\\blog\\2019-08-15\\4992540-6695a640492df159.png)

>打开package.json如下图修改

>![图片](static\\blog\\2019-08-15\\12.png)

### 二 发布npm
>在[npm官网](https://www.npmjs.com/)注册一个账号

>在组件根目录下输入 npm login 输入账户以及密码邮箱

>登录成功后npm publish 就完成了

### 遇到问题
>因为当时忘了截图  所以我就简述下当时问题
 
>1.因为密码错误报的错  大家可以现在npm上登录下  如果成功在去命令行登录

>2.记得要将淘宝镜像源（https://npm.taobao.org/ ）切换成默认的（http://www.npmjs.org/ ）