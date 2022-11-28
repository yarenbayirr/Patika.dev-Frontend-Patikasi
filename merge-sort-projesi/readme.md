**[16,21,11,8,12,22]**  
**Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.**

- Öncelikle dizi ikiye bölünecektir. Gösterecek olursak şöyledir:  
[16, 21, 11] ve [8, 12, 22]
- İkinci aşamada her iki dizi kendi içerisinde ikiye bölünecektir:  
[16, 21] ve [11] ve [8, 12] ve [22]
- İki eleman kalan diziler kendi içerisinde küçükten büyüğe sıralanır fakat burada zaten sıralıdır. O yüzden birleştirme aşamasına geçebiliriz. Aynı aşamalar ile birleştirecek olursak:  
[11, 16, 21] ve [8, 12, 22] dizilerini elde ederiz.
- Son aşamada ise hepsi birleştirilir:  
[8, 11, 12, 16, 21, 22]  
  
  **Big-O gösterimini yazınız.**  
  Big-O => O(nLogn)
