
در ابتدا برای اجرای پروژه، بعد از clone گرفتن دستور npm install رو اجرا می کنیم تا dependency های پروژه دانلود شود.

سپس دستور npm run start رو اجرا می کنیم.

مقدار توکن را هم در فایل config قرار میدهیم. فایل config در پوشه src قرار دارد. 

مراحل استفاده از متدهای پیام رسان به شرح زیر است:

1-  اضافه کردن ماژول podcast-browser به پروژه

2-  ساخت ماژول chatAgent

3-  دریافت لیست contact ها

4-  ایجاد contact جدید در صورت قرار نداشتن یوزر در لیست contact ها

5-  ایجاد thread

6-  مشاهده history هر ترد

7-  ارسال پیام از نوع  text 

8-  فوروارد کردن پیام

9-  ارسال پیام از نوع فایل



1- برای استفاده از متدهای سرویس پیام رسان ابتدا خط دستور زیر را بر روی پروژه ی خود نصب می نماییم.

```
npm install podchat-browser --save
```

2- برای ساخت ماژول chatAgent:
```
var PodChat = require('podchat-browser');
var chatAgent = new PodChat(params);
```

3- با استفاده از متد getContacts لیست کانتکت ها رو دریافت میکنیم. متد getContacts در فایل manageContacts و در آدرس زیر پیاده سازی شده است:
src/js/manageContacts

4- در صورتی که یوزر در لیست contact های ما باشد، میتوانیم thread ایجاد کنیم در غیر اینصورت ابتدا contact ایجاد کرده و سپس thread ایجاد میکنیم.


 ایجاد ترد با استفاده از متد createThread انجام میشود:
 src/js/manageThreads
 برای مشاهده لیست تردها از متد getThreads استفاده میکنیم.


5- برای ایجاد contact از متد addContacts استفاده می کنیم.

 src/js/manageContacts

برای حذف contact از متد removeContacts استفاده می کنیم.


  src/js/manageContacts
              

6- برای مشاهده history هر ترد، id ترد مورد نظر را به متد getHistory می دهیم:
 src/js/manageThreads


            
7- برای ارسال پیام بایستی id  ترد را داشته باشیم و چنانچه پیام ارسال تکست باشد messageType  را صفر ست میکنیم.
 ارسال پیام را با متد sendTextMessage انجام می دهیم. 

src/js/manageMessages


            

8- برای فورارد کردن پیام id ترد و id پیام را در متد forwardMessage ست می کنیم:

src/js/manageMessages

            
9- برای ارسال پیام از نوع فایل علاوه بر id  ترد پراپرتی file  داریم که با فایلی که انتخاب میکنیم مقداردهی می شود.
ارسال پیام از نوع فایل را با متد sendFileMessage انجام می دهیم.




src/js/manageMessages
          




