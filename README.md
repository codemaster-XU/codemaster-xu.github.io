# 个人网站 · GitHub Pages 部署说明

这是一个静态个人网站，无需安装依赖，也无需构建。解压后即可部署。

## 发布到 GitHub Pages

1. 登录 GitHub，创建一个 **Public** 仓库。仓库名可以自行决定，例如 `personal-site`。
2. 解压网站 ZIP，将解压后目录里的内容上传到仓库根目录：`index.html`、`styles.css`、`profile.js`、`app.js`、`assets/` 和 `.nojekyll`。请上传这些文件和目录本身，不要再包一层外部文件夹。上传后，仓库首页应直接看到 `index.html`。
3. 打开仓库的 **Settings → Pages**。
4. 在 **Build and deployment** 中，选择 **Deploy from a branch**；分支选择 **main**，目录选择 **/(root)**，点击 **Save**。
5. 等待 GitHub 完成发布。最终地址通常为：`https://你的用户名.github.io/仓库名/`。Pages 设置页面会显示实际网站链接。

如果希望网址为 `https://你的用户名.github.io/`，请将仓库命名为 `你的用户名.github.io`，然后按上述方法部署。

> 若 `.nojekyll` 被系统隐藏，请开启“显示隐藏文件”后一起上传。网站不需要 Jekyll。

## 修改内容

网站源码就是解压后目录中的文件：

- `profile.js`：修改个人信息、论文状态、教育经历、项目、荣誉和公开联系邮箱。
- `app.js`：中英文切换、内容显示与交互逻辑。
- `index.html`：修改页面结构、首屏文字、链接及页面元信息。
- `styles.css`：调整配色、字体、间距和响应式布局。
- `assets/`：存放图片与其他网站资源。

完成修改后，将更新的文件上传到 GitHub 仓库。GitHub Pages 会自动重新发布。

## 本地查看

直接用浏览器打开 `index.html` 即可预览。部署时保持文件名与目录结构不变。
