# 🚀 Railway 部署完整指南

## 專案資訊
- **GitHub Repository**: https://github.com/JoeyVIP/space-cat-cafe-v2
- **專案名稱**: space-cat-cafe-v2
- **部署平台**: Railway (必須)

## 快速部署步驟

### 方法 1: 透過 Railway 網頁介面（推薦）

1. **登入 Railway**
   - 前往 https://railway.app/
   - 使用 GitHub 帳號登入（JoeyVIP）

2. **建立新專案**
   - 點擊 "New Project"
   - 選擇 "Deploy from GitHub repo"
   - 搜尋並選擇 `space-cat-cafe-v2`

3. **配置部署**
   - Railway 會自動偵測 `railway.json` 配置
   - 確認以下設定：
     - Builder: NIXPACKS
     - Start Command: `npx serve -s . -l $PORT`

4. **生成網域**
   - 部署完成後，前往 "Settings"
   - 點擊 "Generate Domain"
   - 獲取網址（格式：`https://[random-name].up.railway.app`）

### 方法 2: 透過 Railway CLI（本地已準備）

```bash
# 1. 登入 Railway（需要瀏覽器認證）
railway login

# 2. 初始化專案
railway init

# 3. 連結 GitHub repo
railway link

# 4. 部署
railway up
```

## 部署檔案清單

已準備好的檔案：
- ✅ `railway.json` - Railway 配置
- ✅ `package.json` - Node.js 設定和啟動腳本
- ✅ `.gitignore` - Git 忽略設定
- ✅ `README.md` - 專案說明
- ✅ GitHub Repository - 已推送所有程式碼

## 預期結果

部署成功後，你將獲得：
- 🌐 公開網址：`https://[project-name].up.railway.app`
- 🚀 自動 HTTPS 加密
- 🔄 Git push 自動重新部署
- 📊 Railway 儀表板監控

## 部署驗證

部署完成後，檢查以下項目：
- [ ] 首頁載入正常
- [ ] 所有圖片顯示正確
- [ ] 導航選單運作正常
- [ ] 響應式設計在手機上正確顯示
- [ ] 所有動畫效果正常

## 網站特色

✨ 已完成的功能：
- 🌌 深藍太空主題設計
- 🐱 太空貓咪元素
- 📱 完全響應式（手機/平板/桌面）
- ✨ 流暢動畫效果
- ☕ 完整菜單（咖啡、茶飲、甜點、輕食）
- 📍 詳細營業資訊
- 🎨 星空背景動畫
- 🌟 互動式導航

## 疑難排解

### 如果部署失敗

1. **檢查建置日誌**
   - 在 Railway 儀表板查看 "Deployments" 日誌

2. **常見問題**
   - PORT 環境變數：Railway 自動提供，無需手動設定
   - serve 套件：已在 package.json 中設定

3. **重新部署**
   ```bash
   git commit --allow-empty -m "Trigger rebuild"
   git push origin main
   ```

## 成本說明

Railway 提供免費額度：
- ✅ 每月 $5 免費額度
- ✅ 足夠運行靜態網站
- ✅ 自動睡眠機制節省資源

## 下一步

部署完成後：
1. 複製 Railway 網址
2. 測試所有功能
3. 分享給使用者
4. 享受你的太空貓咖啡館！

---

**重要提醒**：
- ❌ 禁止使用 GitHub Pages
- ❌ 禁止使用 Vercel
- ❌ 禁止使用 Netlify
- ✅ 必須使用 Railway 部署
