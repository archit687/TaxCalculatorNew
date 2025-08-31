// let btn = document.querySelector('button');
// let Name = document.querySelector(".name input");
// let Age = document.querySelector(".Age input");
// let income = document.querySelector(".income input");


// let out = document.querySelector(".same");
// let Tax_output = document.querySelector(".T");
// let Income_output = document.querySelector(".I");
// let Paid_output = document.querySelector(".Paid");
// let Deduction_output = document.querySelector(".After");



// btn.addEventListener('click',()=>{
//     let N = Name.value.trim();
//     let A = parseInt(Age.value);
//     let I = parseFloat(income.value);
    
// //Validation

//    if(N == " " || isNaN(A) || isNaN(I)){
//     alert("⚠️ Please enter all fields correctly!");
//     return;
//    }


// // calculations


//     if(I <= 400000){
//         Tax_output.innerText = 'Nil';
//         Income_output.innerText = I;
//         Paid_output.innerText = 'Nil';
//         Deduction_output.innerText = I;

//     }else if(I>400000 && I<=800000){
//         Tax_output.innerText = '5%';
//         Income_output.innerText = I;
//         let cal =I*5/100;
//         let cal2 = I - cal;
//         Paid_output.innerText = cal;
//         Deduction_output.innerText = cal2;



//     }else if(I>800000 && I<=1200000){
//         Tax_output.innerText = '10%';
//         Income_output.innerText = I;
//         let cal =I*10/100;
//         let cal2 = I - cal;
//         Paid_output.innerText = cal;
//         Deduction_output.innerText = cal2;



//     }else if(I>1200000 && I<=1600000){
//         Tax_output.innerText = '15%';
//         Income_output.innerText = I;
//         let cal =I*15/100;
//         let cal2 = I - cal;
//         Paid_output.innerText = cal;
//         Deduction_output.innerText = cal2;



//     }else if(I>1600000 && I<=2000000){
//         Tax_output.innerText = '20%';
//         Income_output.innerText = I;
//         let cal =I*20/100;
//         let cal2 = I - cal;
//         Paid_output.innerText = cal;
//         Deduction_output.innerText = cal2;



//     }else if(I>2000000 && I<=2400000){
//         Tax_output.innerText = '25%';
//         Income_output.innerText = I;
//         let cal =I*25/100;
//         let cal2 = I - cal;
//         Paid_output.innerText = cal;
//         Deduction_output.innerText = cal2;



//     }else if(I>2400000){
//         Tax_output.innerText = '30%';
//         Income_output.innerText = I;
//         let cal =I*30/100;
//         let cal2 = I - cal;
//         Paid_output.innerText = cal;
//         Deduction_output.innerText = cal2;



//     }
    


// })

let btn = document.querySelector('button');
let Name = document.querySelector(".nameInput");
let Age = document.querySelector(".ageInput");
let income = document.querySelector(".incomeInput");

let Tax_output = document.querySelector(".T");
let Income_output = document.querySelector(".I");
let Paid_output = document.querySelector(".Paid");
let Deduction_output = document.querySelector(".After");

btn.addEventListener('click', () => {
    let N = Name.value.trim();
    let A = parseInt(Age.value);
    let I = parseFloat(income.value);

    // Validation
    if (N === "" || isNaN(A) || isNaN(I)) {
        alert("⚠️ Please enter all fields correctly!");
        return;
    }
    
    if(A <18){
        alert("⚠️ Please enter a valid Age");
        return;
    }

    // Tax calculations
    if (I <= 400000) {
        Tax_output.innerText = 'Nil';
        Income_output.innerText = I.toLocaleString("en-IN");
        Paid_output.innerText = 'Nil';
        Deduction_output.innerText = I.toLocaleString("en-IN");

    } else if (I > 400000 && I <= 800000) {
        Tax_output.innerText = '5%';
        Income_output.innerText = I.toLocaleString("en-IN");
        let cal = I * 5 / 100;
        let cal2 = I - cal;
        Paid_output.innerText = cal.toLocaleString("en-IN");
        Deduction_output.innerText = cal2.toLocaleString("en-IN");

    } else if (I > 800000 && I <= 1200000) {
        Tax_output.innerText = '10%';
        Income_output.innerText = I.toLocaleString("en-IN");
        let cal = I * 10 / 100;
        let cal2 = I - cal;
        Paid_output.innerText = cal.toLocaleString("en-IN");
        Deduction_output.innerText = cal2.toLocaleString("en-IN");

    } else if (I > 1200000 && I <= 1600000) {
        Tax_output.innerText = '15%';
        Income_output.innerText = I.toLocaleString("en-IN");
        let cal = I * 15 / 100;
        let cal2 = I - cal;
        Paid_output.innerText = cal.toLocaleString("en-IN");
        Deduction_output.innerText = cal2.toLocaleString("en-IN");

    } else if (I > 1600000 && I <= 2000000) {
        Tax_output.innerText = '20%';
        Income_output.innerText = I.toLocaleString("en-IN");
        let cal = I * 20 / 100;
        let cal2 = I - cal;
        Paid_output.innerText = cal.toLocaleString("en-IN");
        Deduction_output.innerText = cal2.toLocaleString("en-IN");

    } else if (I > 2000000 && I <= 2400000) {
        Tax_output.innerText = '25%';
        Income_output.innerText = I.toLocaleString("en-IN");
        let cal = I * 25 / 100;
        let cal2 = I - cal;
        Paid_output.innerText = cal.toLocaleString("en-IN");
        Deduction_output.innerText = cal2.toLocaleString("en-IN");

    } else if (I > 2400000) {
        Tax_output.innerText = '30%';
        Income_output.innerText = I.toLocaleString("en-IN");
        let cal = I * 30 / 100;
        let cal2 = I - cal;
        Paid_output.innerText = cal.toLocaleString("en-IN");
        Deduction_output.innerText = cal2.toLocaleString("en-IN");
    }
});
