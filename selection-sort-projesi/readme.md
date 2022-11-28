**[22,27,16,2,18,6]**
**Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.**
**Big-O gösterimini yazınız.**

**Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız**

Öncelikle sıralamanın nasıl gerçekleşeceğine dair aşamalara bakalım
- Tüm elemanlar kontrol edilir en küçük sayı bulunur. En küçük sayı bulunduktan sonra ilk eleman ile en küçük sayının yeri yer değiştirilir. Son hali şöyledir:
[2, 27, 16, 22, 18, 6]
- Artık kontrole ikinci elemandan itibaren devam edilir. Kalan elemanlar arasında en küçük eleman bulunur ve sıralar değiştirilir. Son hali şöyledir:
[2, 6, 16, 22, 18, 27 ,2]
- Kontrole üçüncü elemandan devam edilir. Diğer aşamalar yukarıdaki aşamalar gibidir. Son hali şöyledir: 
[2, 6, 16, 18, 22, 27]

Big-O gösterimi O(n^2) dir.
Aranılan sayı ortadadır. Bu yüzden average case' dir. 

**[7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımını yazınız.**
1. [2, 3, 5, 8, 7, 9, 4, 15, 6]
2. [2, 3, 4, 8, 7, 9, 5, 15, 6]
3. [2, 3, 4, 5, 7, 9, 8, 15, 6]
4. [2, 3, 4, 5, 6, 9, 8, 15, 7]


