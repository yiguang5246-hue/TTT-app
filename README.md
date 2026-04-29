# TTT Trainer Lab

一个给个人学习使用的培训师成长平台，可直接部署到 GitHub Pages。

## 这版完成了什么

- 移除了线上旧版里直接暴露在前端的 DashScope API Key。
- 重建为纯静态应用：`index.html`、`styles.css`、`app.js`。
- 补全了学习路径、场景演练、工具箱、测验、行动卡和本地进度。
- 内容基于本机资料重组：TTT Facilitator Handbook、TTT 技能全攻略、AACTP 项目萃取文章、原训练场景和你的培训课件生成规范。

## 本地预览

```bash
python3 -m http.server 4173
```

然后打开：

```text
http://localhost:4173
```

## 部署

把这三个文件推到 `yiguang5246-hue/TTT-app` 仓库的 GitHub Pages 分支或默认分支即可：

- `index.html`
- `styles.css`
- `app.js`

## 后续可加

- 接入一个安全后端代理，让真实大模型参与角色扮演。
- 增加从本地资料导入知识卡的管理页面。
- 把行动卡导出为 Markdown 或飞书文档。
