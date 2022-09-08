let ly, hoa, sinh

 ly = parseInt(prompt("nhap diem ly"));
 hoa = parseInt(prompt("nhap diem hoa"));
 sinh = parseInt(prompt("nhap diem sinh"));

let trung_binh = ( ly + hoa + sinh)/3 ;
document.write('tong diem:' +(ly + hoa + sinh));
document.write('trung binh:' + trung_binh);
