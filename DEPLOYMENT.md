# Railway 部署指南

## 自動部署步驟

1. 前往 [Railway](https://railway.app/)
2. 使用 GitHub 帳號登入
3. 點擊 "New Project"
4. 選擇 "Deploy from GitHub repo"
5. 選擇 `JoeyVIP/space-cat-cafe-v2` repository
6. Railway 會自動偵測 railway.json 配置
7. 等待部署完成
8. 點擊 "Settings" -> "Generate Domain" 來獲取公開網址

## 專案配置

本專案已包含：
- ✅ `railway.json` - Railway 配置檔
- ✅ `package.json` - Node.js 依賴設定
- ✅ `.gitignore` - Git 忽略設定

## 環境變數

無需額外設定環境變數，專案會自動使用 Railway 提供的 `$PORT`

## 預期部署結果

- 平台：Railway
- 網址格式：`https://[project-name].up.railway.app`
- 建置時間：約 1-2 分鐘

## 疑難排解

如果遇到部署問題：
1. 檢查 Railway 儀表板的建置日誌
2. 確認 `serve` 套件已正確安裝
3. 驗證 PORT 環境變數是否正確設定
