//Nhập giá trị a,b,c
let a = parseInt(prompt("Mời nhập a"));
let b = parseInt(prompt("Mời nhập b"));
let c = parseInt(prompt("Mời nhập c"));
//Kiểm tra
if (a == 0) {
  let x = -c / b;
  document.write("Phương trình có 1 nghiệm:" + x);
} else {
  let delta = b * b - 4 * a * c;
  //Kiểm tra điều kiện delta
  if (delta < 0) {
    document.write("Phương trình vô nghiệm");
  } /*delta >=0 or delta = 0*/ else if (delta == 0) {
    //delta=0
    let x = -b / (2 * a);
    document.write("Phương trình có nghiệm kép:" + x);
  } else {
    //delta>0
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.write("Nghiệm x1 = " + x1);
    document.write("Nghiệm x2 = " + x2);
  }
}
