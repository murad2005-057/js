// Üç qrup yoldaşının adlarından ibaret massiv yaradın
let yoldaslar = ["Aydan", "Elvin", "Fərid"];

// Başqa bir qrup yoldaşının adını massivin sonuna əlavə edin
yoldaslar.push("Murad");

// İlk adı silin
yoldaslar.shift();

// Massivi konsola çıxarın
console.log(yoldaslar);


//task2

// 10 ədəddən ibarət massiv yaradın
let massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// İlk 2 ədədi dəyişənlərə yazın
let birinci = massiv[0];
let ikinci = massiv[1];

// Qalanlardan yeni massiv yaradın
let qalanlar = massiv.slice(2);

// Çıxışları konsola yazın
console.log("Birinci ədəd:", birinci);
console.log("İkinci ədəd:", ikinci);
console.log("Qalanlar:", qalanlar);


//task3

// 10 rəqəmdən ibarət massiv yaradın
let mas = [7, 14, 2, 9, 4, 18, 5, 12, 10, 3];

// Math.max funksiyası ilə maksimal dəyəri tapın
let maksimumDeyer = Math.max(...massiv);

// Çıxışı konsola yazın
console.log("Massivin maksimal dəyəri:", maksimumDeyer);

//task4

// 5 rəqəmdən ibarət massiv yaradın
let orijinalMassiv = [3, 7, 11, 2, 9];

// Orijinal massivin surətini çıxarın
console.log("Orijinal Massiv:", orijinalMassiv);

// Orijinal massivi dəyişmədən saxlamaq üçün klonlayın
let yeniMassiv = orijinalMassiv.slice();

// Yeni massivin bütün elementlərini ikiqat artırın
for (let i = 0; i < yeniMassiv.length; i++) {
    yeniMassiv[i] *= 2;
}

// Yeni massivi çıxarın
console.log("Yeni Massiv:", yeniMassiv);

// Orijinal massivin dəyişmədiyini yoxlayın
console.log("Orijinal Massiv (dəyişmədən qalxan):", orijinalMassiv);


//task5

let employees = [
    [ 'Jaylee Macy', 'marketing' ],
    [ 'John Smith', 'management' ],
    [ 'Blossom Hartley', 'design' ],
    [ 'Austin Carpenter', 'marketing' ],
    [ 'Joan Knowles', 'development' ],
    [ 'Sally Nunez', 'management' ],
    [ 'Laurel Ward', 'development' ],
    [ 'Lark Simon', 'marketing' ],
    [ 'Jane Stone', 'management' ],
    [ 'Courtney Olson', 'development' ],
  ];
  
  // 'development' department-ə aid olan işçiləri saxlamaq üçün development massivi yaradın
  let development = employees.filter(employee => employee[1] === 'development');
  
  // Çıxışı konsola yazın
  console.log("Development Department İşçiləri:", development);

//task6











  

