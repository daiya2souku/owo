# 我家寶貝的小心情 — 獨立使用說明

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

## 多裝置與人數限制
- 設定 → 我的身分 可複製身分碼，在另一台裝置輸入就能用同一個身分登入。
- 每組配對碼最多 2 位使用者，第 3 個身分會被 App 擋下。這是 App 端的限制；要真正擋死，需要改用有登入驗證的後端。

## 換裝置登入
舊裝置：設定 → 我的身分 複製身分碼。新裝置第一次開啟時，在名字視窗展開「已經有身分碼？」，填入同步資料與身分碼登入，名字、紀錄與外觀設定會一起同步過來。

## 這是 PWA
已包含 manifest、service worker（離線可開啟外殼）、圖示。放到 https 網址後即可「加入主畫面」。全程不需付費（見對話說明）。

## 同步失敗時檢查
1. 網址要是資料庫網址（xxx-default-rtdb.firebaseio.com 或 xxx.firebasedatabase.app），不是控制台網頁網址。
2. 規則要貼上並按「發布」。
3. 配對碼只用英數字與 - _，不要有空格或 . $ # [ ] /。
4. 兩人的網址與配對碼必須完全相同。
