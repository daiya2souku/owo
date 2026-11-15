# 小心情 — 獨立使用說明

## 1. 建立同步資料庫（免費，約 5 分鐘）
1. 到 https://console.firebase.google.com 建立專案（不用開 Analytics）。
2. 左側 Build → Realtime Database → 建立資料庫。
3. 「規則」分頁貼上以下內容並發布：
   {"rules":{"couples":{"$code":{".read":true,".write":true}}}}
   （安全性靠「配對碼」：請設一串別人猜不到的字，例如 12 位以上英數字。）
4. 複製資料庫網址（https://xxx-default-rtdb.firebaseio.com）。

## 2. 放上網路
把本資料夾上傳到任一靜態網站空間（GitHub Pages、Netlify、Cloudflare Pages 皆免費，必須是 https）。

## 3. 安裝到手機
- iPhone：Safari 開啟網址 → 分享 → 加入主畫面。
- Android：Chrome 開啟網址 → 選單 → 安裝應用程式。

## 4. 兩人配對
兩人各自打開 App → 設定 → 「和對方同步」，填相同的資料庫網址與配對碼。

## 自訂
外觀、背景圖、心情圖片都在 App 內「設定」直接調整（存在各自手機上）。
