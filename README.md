halooo berikut penjelasan nya :

--- section 2 ---
> getElementsByClassName("main") == metode mengembalikan objek dari elemen child dengan nama kelas yang ditentukan. (class "main")
>getElementById("name") == metode mengembalikan objek Elemen yang yg spesifik dengan id yang cocok dengan string yang ditentukan. ("id" name)
>document.querySelector("h3) == memilih elemen pertama yang cocok dengan satu/ beberapa selector CSS.

--- section 3 ---
>firstElementChild == untuk mendapatkan anak pertama dari parent dg elemen node
>nextElementSibling == untuk mendapatkan elemen child yg sejajar dg dari parent yg sama ("dlm js_1.js, nextElementSibling untuk mendapatkan child yg setara dg first child")
>.parentElement == untuk mendapatkan parent yg dituju

--- ssection 4.1 ---
>.createElement == untuk membuat element baru pd html, dlm contoh ini membuat tag 'p'
>.innerHTML == untuk mendapatkan atau menyetel markup HTML yang terdapat di dalam elemen, dlm hal ini mendapatkan isi dari tag 'p'
>.appendChild == untuk menempelkan elemen html yg dibuat ke html, dlm contoh (.appendChild(newEl)) - memanggil tag 'p' untuk ditempel ke dokumen

--- ssection 4.2 ---
>>.innerHTML == untuk mendapatkan atau menyetel markup HTML yang terdapat di dalam elemen, dlm hal ini mendapatkan isi dari tag 'h1', mengubah dari teks yg berada di html diubah melalui js
>.createElement == untuk membuat element baru pd html, dlm contoh ini membuat tag 'p'
>.prepend == menyisipkan konten dg elemen yg disebut, dlm contoh .prepend('alohauwww () '), menyisipkan kalimat dari inner HTML

--- section 5 ---
>.setAttribute == set value dari atribut dlm elemen ('type, value, text')
>.hasAttribute == mengecek apakah element yg dituju memiliki atribut spesifik/tidak ('type, value, text')

--- section 6 ---
>getComputedStyle == metode objek, yang mengembalikan objek yang berisi elemen yang dihitung (dlm contoh, menghitung dari elemen warna yaitu nilai rgb)
>.style.color == Properti style mengembalikan objek CSS yg berisi daftar properti CSS (dlm contoh mengubah warna teks)

--- section 7 ---
>.addEventListener == dlm contoh *btnLogin.addEventListener("click", (event))*, membuat saat di klik ada aksi yg dilakukan seperti submit
>.addEventListener('scroll', (event)) == meng-handle scroll terutama pd window

--- section 8 ---
>.addEventListener == untuk men-handel form dari data yg ada
>.preventDefault() == stop pengiriman form, panggil metode preventDefault() dari objek event di dalam submit event handler