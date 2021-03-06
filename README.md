
## پروژه تستی راهنمای استفاده از SDK چت

برای تست قابلیت های سرویس چت و SDK ابتدا یک clone از پروژه فعلی بگیرید، سپس با دستور 
`npm install`
اقدام به نصب dependency ها نمایید.

سپس دستور
`npm run start`
رو اجرا می کنیم.

مقدار توکن را هم در فایل config قرار میدهیم. فایل config در پوشه src قرار دارد. 

مراحل استفاده از متدهای پیام رسان به شرح زیر است:

1.  نصب پکیج podchat-browser 
2.  ساخت یک نسخه از SDK
3.  دریافت لیست contact ها
4.  ایجاد contact جدید در صورت قرار نداشتن یوزر در لیست contact ها
5.  ایجاد thread
6.  مشاهده history هر ترد
7.  ارسال پیام از نوع  text 
8.  فوروارد کردن پیام
9.  ارسال پیام از نوع فایل
10.  ریپلای پیام از نوع فایل



توضیح مراحل بالا به شرح زیر است:


1- برای استفاده از متدهای سرویس پیام رسان ابتدا خط دستور زیر را بر روی پروژه ی خود اجرا می کنیم:

```
npm install podchat-browser --save
```

2- برای ساخت ماژول chatAgent:
```
var PodChat = require('podchat-browser');
var chatAgent = new PodChat(params);
```

3-  با استفاده از متد getContacts لیست کانتکت ها رو دریافت میکنیم.

متد getContacts در فایل manageContacts و در آدرس زیر پیاده سازی شده است:
```
src/js/manageContacts
```
4- در صورتی که یوزر در لیست contact های ما باشد، میتوانیم thread ایجاد کنیم در غیر اینصورت ابتدا contact ایجاد کرده و سپس thread ایجاد میکنیم.


 ایجاد ترد با استفاده از متد createThread انجام میشود.

 
 همچنین برای مشاهده لیست تردها از متد getThreads استفاده میکنیم:
 
 ```
 src/js/manageThreads
 ```
   
   
   
5- برای ایجاد contact از متد addContacts استفاده می کنیم.



برای حذف contact از متد removeContacts استفاده می کنیم.

```
  src/js/manageContacts
```           

6- برای مشاهده history هر ترد، id ترد مورد نظر را به متد getHistory می دهیم:
```
 src/js/manageThreads
```

            
7- برای ارسال پیام بایستی id  ترد را داشته باشیم و چنانچه پیام ارسال تکست باشد messageType  را صفر ست میکنیم.
 ارسال پیام را با متد sendTextMessage انجام می دهیم. 
```
src/js/manageMessages
```

            

8- برای فورارد کردن پیام id ترد و id پیام را در متد forwardMessage ست می کنیم:


            
9- برای ارسال پیام از نوع فایل علاوه بر id  ترد پراپرتی file  داریم که با فایلی که انتخاب میکنیم مقداردهی می شود.
ارسال پیام از نوع فایل را با متد sendFileMessage انجام می دهیم.


10- ریپلای پیام از نوع فایل را با متد replyFileMessage انجام می دهیم.
پراپرتی ها در این قسمت مانند ارسال پیام هست تنها یک پراپرتی repliedTo اضافه شده که id پیامی که میخواهیم ریپلای کنیم را در آن قرار می ریزیم.


          




