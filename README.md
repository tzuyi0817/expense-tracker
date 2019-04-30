# 老爸的私房錢

***

打造一個簡單的網路記帳工具。基本功能如下：

能讓使用者新增、修改與刪除「支出 (expense record，以下簡稱為 record)」。
每一筆支出都有「名稱」、「類別」、「日期」 與「金額 」四個屬性。

# Installing

***

1.點擊右上的 Clone or download

2.複製 URL

3.開啟終端機輸入 git clone '剛剛複製的URL', 並按下 enter

4.終端機會開始跑 download , 待終端機出現 Done 後 , 表示下載完成

5.在終端機輸入 npm i init -y

6.輸入 npm run seeder 導入種子資料

7.輸入 npm run start 啟動程式

9.伺服器會連接到 `http://localhost:3000`

10.在瀏覽器的網址上輸入 `http://localhost:3000` , 即可開始管理帳款

# Features

***

+  在首頁一次瀏覽所有支出的清單
+  在首頁看到所有支出清單的總金額
+  新增一筆支出
+  編輯支出的所有屬性 
+  刪除任何一筆支出 
+  透過 email 跟秘密註冊與登入，並只能看到自己建立的支出
+  在註冊時輸入使用者名稱、email 與 password，所有都是必填欄位
+  透過 Facebook 帳號登入
+  首頁可以根據支出類別與日期篩選支出；總金額的計算只會包括篩選出來支出