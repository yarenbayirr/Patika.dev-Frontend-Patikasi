//Do-while döngüsü while içerisindeki şarta bakar.
//Şart doğru ise tekrar başa döner ve aynı şeyi yapar
//Eğer şart içerisi false dönerse döngüden çıkar ve aşağı doğru kodu okumaya devam eder
//Neden do - while kullandık???
//Kullanıcı boş değer girebilirdi. Bunu kontrol edip kullanıcıya uyarı verelim. 
//Kod sırasına bakarsak önce prompt ile isim soruyoruz ve bilgiyi info değişkeninde tutuyoruz. Info değişkenini var olarak tanımladık çünkü döngü dışında da erişmemiz gerekiyordu. Bakınız --element.innerHTML-- satırında ihtiyacımız var.
//Kullanıcıdan isim değerini aldık bakıyoruz boş mu girdi yoksa bir şeyler yazdı mı
//Eğer boş girdiyse alert ile uyarı gönder dedik (if bloğumuz bu yüzden var)
//Boş girmediyse while şartı false gelmiş olacak zaten döngüden çıkacak. Çıktığı zaman kodu okumaya devam ediyor. querySelector ile index.html de id si myName olan elemanı aldık. element adında değişkene attık. sonra innerHTML ile içerisine girdik ve bu sefer infodan aldığımız bilgiyi atadık yani ismi.  
do{
    
    var info = prompt("Adınız nedir?")
    if(info == ""){
    window.alert("İsim girmediniz")
    }
    
}
while(info == "")


var element = document.querySelector('#myName') 

element.innerHTML = info; 

//saat kısmına bakalım


var timelement = document.querySelector('#myClock') //index.html'de id si myClock tu, querySelector ile aldık ve timeelement isimli değişkenin içine attık

// burada bir fonksiyon oluşturduk fonksiyonun adı time aşama aşama bakalım
function time() { 
    //öncelikle günlerin olduğu bir dizi oluşturduk. NOT: Günleri saymaya pazardan başlıyor o yüzden pazardan başladık.
    var days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']; 
    var d = new Date(); // Date nesnesi oluşturduk bize şu anki tarihi almamıza yardımcı olacak, içerisinde hazır metotlar var.
    var s = d.getSeconds(); //s değişkeni içerisinde artık saniye var
    var m = d.getMinutes(); //m değişkeni içerisinde artık dakika var
    var h = d.getHours(); //h değişkeni içerisinde artık saat var
    var dayName = days[d.getDay()]; //dayName içerisinde ise günün adı var. days[] ifadesine odaklanalım. days[0] olsa yukarıda yazdığımız dizinin ilk elemanı olan pazarı alacaktı veya days[1] olsa pazartesiyi alacaktı. Bize bugünün değeri lazım olduğu için getDay ile bize bir sayı döndürecek. 0 ise pazar, 1 ise pazartesi, 2 ise salı gibi. 
    timelement.textContent = //querySelector ile aldığımız elemanın içerisine girdik. Burada textcontent kullandık.
      ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2) + dayName;
  }
   
  //Tüm bu işlemler bize girdiğimiz tarihi verecek ama o tarihte kalacaktı. Canlı bir saat için setInterval kullanıyoruz. 
  setInterval(time, 1000); //setInterval methodu 2 adet parametre alır. Birincisi yukarıda yazdığımız time fonksiyonu, ikincisi ise bu işlem kaç milisaniyede tekrar edecek. Bize her saniye başında güncelleme lazım canlı bir saat için. 




