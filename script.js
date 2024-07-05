//-----------------   랜덤 숫자 만드는 함수   --------------------------//

function getRandomValue1() {
    const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ]; // 일단 10은 삭제(스페어 먼저 해결하기)
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
}

//------------------   form 생성문   -----------------------------//

$(".form-select").eq(0).on("input", function(){
    var value = $(".form-select").eq(0).val();
    if(value == '1'){
        $(".main-table").eq(0).removeClass("form-hide")
    }  else if(value == '2'){
        $(".main-table").eq(0).removeClass("form-hide")
        $(".main-table").eq(1).removeClass("form-hide")
    } else if (value == '3'){
        $(".main-table").eq(0).removeClass("form-hide")
        $(".main-table").eq(1).removeClass("form-hide")
        $(".main-table").eq(2).removeClass("form-hide")
    } else if (value == '4'){
        $(".main-table").eq(0).removeClass("form-hide")
        $(".main-table").eq(1).removeClass("form-hide")
        $(".main-table").eq(2).removeClass("form-hide")
        $(".main-table").eq(3).removeClass("form-hide")                
    } else if (value == '5'){
        $(".main-table").eq(0).removeClass("form-hide")
        $(".main-table").eq(1).removeClass("form-hide")
        $(".main-table").eq(2).removeClass("form-hide")
        $(".main-table").eq(3).removeClass("form-hide")
        $(".main-table").eq(4).removeClass("form-hide")
    }
})

// -----------------   1번 프레임의 a값, b값   ------------------------//

    var NumA1 = getRandomValue1();
    document.getElementById("random0").innerHTML = NumA1 // a값

    var NumB1 = 10 - NumA1

    function getRandomInt(min, max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var NumB1_1 = getRandomInt(0,NumB1)
    document.getElementById("randomZ0").innerHTML = NumB1_1 // b값

// -----------------   1번 프레임 b값이 스페어 일때   ------------------//

    var Spare = "/"

    if(NumB1_1 == (10-NumA1)){
        document.getElementById("randomZ0").innerHTML = Spare
    } else if(NumB1_1 != (10-NumA1)){
        document.getElementById("randomZ0").innerHTML = NumB1_1
    }

// -----------------   1번 프레임 a값이 스트라이크 일때   ------------------//

    var Strike = "X"

    if(NumA1 == 10){
        document.getElementById("random0").innerHTML = Strike
        document.getElementById("randomZ0").innerHTML = ""
    }

// -----------------   2번 프레임의 a값, b값   ------------------------//

    var NumA2 = getRandomValue1();
    document.getElementById("random1").innerHTML = NumA2 // a값

    var NumB2 = 10 - NumA2

    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var NumB2_1 = getRandomInt(0,NumB2)
    document.getElementById("randomZ1").innerHTML = NumB2_1 // b값

// -----------------   2번 프레임 b값이 스페어 일때   ------------------//

    var Spare = "/"

    if(NumB2_1 == (10-NumA2)){
        document.getElementById("randomZ1").innerHTML = Spare
    } else if(NumB2_1 != (10-NumA2)){
        document.getElementById("randomZ1").innerHTML = NumB2_1
    }

// -----------------   2번 프레임 a값이 스트라이크 일때   ------------------//

    var Strike = "X"

    if(NumA2 == 10){
        document.getElementById("random1").innerHTML = Strike
        document.getElementById("randomZ1").innerHTML = ""
    }

// -----------------   3번 프레임의 a값, b값   ------------------------//

    var NumA3 = getRandomValue1(); 
    document.getElementById("random2").innerHTML = NumA3 // a값

    var NumB3 = 10 - NumA3

    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var NumB3_1 = getRandomInt(0,NumB3)
    document.getElementById("randomZ2").innerHTML = NumB3_1 // b값

// -----------------   3번 프레임 b값이 스페어 일때   ------------------//

    var Spare = "/"

    if(NumB3_1 == (10-NumA3)){
        document.getElementById("randomZ2").innerHTML = Spare
    } else if(NumB3_1 != (10-NumA3)){
        document.getElementById("randomZ2").innerHTML = NumB3_1
    }

// -----------------   3번 프레임 a값이 스트라이크 일때   ------------------//

    var Strike = "X"

    if(NumA3 == 10){
        document.getElementById("random2").innerHTML = Strike
        document.getElementById("randomZ2").innerHTML = ""
    }

// -----------------   4번 프레임의 a값, b값   ------------------------//

    var NumA4 = getRandomValue1();
    document.getElementById("random3").innerHTML = NumA4 // a값

    var NumB4 = 10 - NumA4

    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var NumB4_1 = getRandomInt(0,NumB4)
    document.getElementById("randomZ3").innerHTML = NumB4_1 // b값

// -----------------   4번 프레임 b값이 스페어 일때   ------------------//

    var Spare = "/"

    if(NumB4_1 == (10-NumA4)){
        document.getElementById("randomZ3").innerHTML = Spare
    } else if(NumB4_1 != (10-NumA4)){
        document.getElementById("randomZ3").innerHTML = NumB4_1
    }

// -----------------   4번 프레임 a값이 스트라이크 일때   ------------------//

    var Strike = "X"

    if(NumA4 == 10){
        document.getElementById("random3").innerHTML = Strike
        document.getElementById("randomZ3").innerHTML = ""
    }

// -----------------   5번 프레임의 a값, b값   ------------------------//

    var NumA5 = getRandomValue1();
    document.getElementById("random4").innerHTML = NumA5 // a값

    var NumB5 = 10 - NumA5

    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var NumB5_1 = getRandomInt(0,NumB5)
    document.getElementById("randomZ4").innerHTML = NumB5_1 // b값

// -----------------   5번 프레임 b값이 스페어 일때   ------------------//

    var Spare = "/"

    if(NumB5_1 == (10-NumA5)){
        document.getElementById("randomZ4").innerHTML = Spare
    } else if(NumB5_1 != (10-NumA5)){
        document.getElementById("randomZ4").innerHTML = NumB5_1
    }

// -----------------   5번 프레임 a값이 스트라이크 일때   ------------------//

    var Strike = "X"

    if(NumA5 == 10){
        document.getElementById("random4").innerHTML = Strike
        document.getElementById("randomZ4").innerHTML = ""
    }

// -----------------   6번 프레임의 a값, b값   ------------------------//

    var NumA6 = getRandomValue1();
    document.getElementById("random5").innerHTML = NumA6 // a값

    var NumB6 = 10 - NumA6

    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var NumB6_1 = getRandomInt(0,NumB6)
    document.getElementById("randomZ5").innerHTML = NumB6_1 // b값

// -----------------   6번 프레임 b값이 스페어 일때   ------------------//

    var Spare = "/"

    if(NumB6_1 == (10-NumA6)){
        document.getElementById("randomZ5").innerHTML = Spare
    } else if(NumB6_1 != (10-NumA6)){
        document.getElementById("randomZ5").innerHTML = NumB6_1
    }

// -----------------   6번 프레임 a값이 스트라이크 일때   ------------------//

    var Strike = "X"

    if(NumA6 == 10){
        document.getElementById("random5").innerHTML = Strike
        document.getElementById("randomZ5").innerHTML = ""
    }

// -----------------   7번 프레임의 a값, b값   ------------------------//

    var NumA7 = getRandomValue1();
    document.getElementById("random6").innerHTML = NumA7 // a값

    var NumB7 = 10 - NumA7

    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var NumB7_1 = getRandomInt(0,NumB7)
    document.getElementById("randomZ6").innerHTML = NumB7_1 // b값

// -----------------   7번 프레임 b값이 스페어 일때   ------------------//

    var Spare = "/"

    if(NumB7_1 == (10-NumA7)){
        document.getElementById("randomZ6").innerHTML = Spare
    } else if(NumB7_1 != (10-NumA7)){
        document.getElementById("randomZ6").innerHTML = NumB7_1
    }

// -----------------   7번 프레임 a값이 스트라이크 일때   ------------------//

    var Strike = "X"

    if(NumA7 == 10){
        document.getElementById("random6").innerHTML = Strike
        document.getElementById("randomZ6").innerHTML = ""
    }

// -----------------   8번 프레임의 a값, b값   ------------------------//

    var NumA8 = getRandomValue1();
    document.getElementById("random7").innerHTML = NumA8 // a값

    var NumB8 = 10 - NumA8

    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var NumB8_1 = getRandomInt(0,NumB8)
    document.getElementById("randomZ7").innerHTML = NumB8_1 // b값

// -----------------   8번 프레임 b값이 스페어 일때   ------------------//

    var Spare = "/"

    if(NumB8_1 == (10-NumA8)){
        document.getElementById("randomZ7").innerHTML = Spare
    } else if(NumB8_1 != (10-NumA8)){
        document.getElementById("randomZ7").innerHTML = NumB8_1
    }

// -----------------   8번 프레임 a값이 스트라이크 일때   ------------------//

    var Strike = "X"

    if(NumA8 == 10){
        document.getElementById("random7").innerHTML = Strike
        document.getElementById("randomZ7").innerHTML = ""
    }

// -----------------   9번 프레임의 a값, b값   ------------------------//

    var NumA9 = getRandomValue1();
    document.getElementById("random8").innerHTML = NumA9 // a값

    var NumB9 = 10 - NumA9

    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var NumB9_1 = getRandomInt(0,NumB9)
    document.getElementById("randomZ8").innerHTML = NumB9_1 // b값

// -----------------   9번 프레임 b값이 스페어 일때   ------------------//

    var Spare = "/"

    if(NumB9_1 == (10-NumA9)){
        document.getElementById("randomZ8").innerHTML = Spare
    } else if(NumB9_1 != (10-NumA9)){
        document.getElementById("randomZ8").innerHTML = NumB9_1
    }

// -----------------   9번 프레임 a값이 스트라이크 일때   ------------------//

    var Strike = "X"

    if(NumA9 == 10){
        document.getElementById("random8").innerHTML = Strike
        document.getElementById("randomZ8").innerHTML = ""
    }


// -----------------   10번 프레임의 a값, b값, c값   ------------------------//

    var NumA10 = getRandomValue1();
    document.getElementById("random9").innerHTML = NumA10 // a값

    var NumB10 = 10 - NumA10

    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var NumB10_1 = getRandomInt(0,NumB10)
    document.getElementById("randomZ9").innerHTML = NumB10_1 // b값

    var NumC = 10 - (NumA10 + NumB10_1)

    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var NumC_1 = getRandomInt(0,NumC)
    document.getElementById("randomZ99").innerHTML = NumC_1 // c값

// -----------------   10번 프레임 b값이 스페어 일때   ------------------//

    var Spare = "/"

    if(NumB10_1 == (10-NumA10)){ // 스페어일때
        document.getElementById("randomZ9").innerHTML = Spare
    } else if(NumB10_1 != (10-NumA10)){ // 스페어가 아닐때
        document.getElementById("randomZ9").innerHTML = NumB10_1 
    } 

// -----------------   10번 프레임 c값이 스페어 일때   ------------------//

    var Spare = "/"

    if(NumC_1 == (10-(NumA10 + NumB10_1))){ // 스페어일때
        document.getElementById("randomZ99").innerHTML = Spare
    } else if(NumB10_1 != (10-NumA10)){ // 스페어가 아닐때
        document.getElementById("randomZ99").innerHTML = NumC_1 
    } 


// -----------------   10번 프레임 a값이 스트라이크 일때   ------------------//

    var Strike = "X"

    if(NumA10 == 10){
        document.getElementById("random9").innerHTML = Strike
        document.getElementById("randomZ9").innerHTML = ""
        document.getElementById("randomZ99").innerHTML = ""
    }

//------------------  1번 프레임 a, b 점수 합계 조건문  -------------------//

var Sum1 = NumA1 + NumB1_1  // 1번 프레임 b값이 스페어 아닐때 1번 프레임 합계

var Sum1_1 = Sum1 + NumA2   // 1번 프레임 b값이 스페어 일때 1번 프레임 합계

if(NumB1_1 == (10-NumA1)){  // 스페어 일때
    document.getElementById("sum1").innerHTML = Sum1_1;
    
} else if(NumB1_1 != (10-NumA1)){   // 스페어가 아닐때
    document.getElementById("sum1").innerHTML = Sum1
} 


//------------------  2번 프레임 a, b 점수 합계 조건문  -------------------//

var Sum2 = Sum1_1 + NumA2 + NumB2_1 // 1번 프레임 b값이 스페어 일때 2번 프레임 합계
    //  Sum1 + NumA2

var Sum2A = Sum1 + NumA2 + NumB2_1  // 1번 프레임 b값이 스페어가 아닐때 2번 프레임 합계
    // NumA1 + NumB1_1 

if(NumB1_1 == (10-NumA1)){  // 스페어 일때
    document.getElementById("sum2").innerHTML =  Sum2
}else if(NumB1_1 != (10-NumA1)){    // 스페어가 아닐때
    document.getElementById("sum2").innerHTML =  Sum2A
}

var Sum2_1 = Sum2 + NumA3   // Sum1 + NumA2 + NumA2 + NumB2_1 + NumA3

var Sum2_1A = Sum2A + NumA3


// if(NumB2_1 == (10-NumA2)){ // 2번 프레임 b값이 스페어일때
//     document.getElementById("sum2").innerHTML = Sum2_1 ;
    
// } else if(NumB2_1 != (10-NumA2)){ // 2번 프레임 b값이 스페어 아닐때
//      document.getElementById("sum2").innerHTML = Sum2A 
// }


//------------------  3번 프레임 a, b 점수 합계 조건문  -------------------//

var Sum3 = Sum2_1 + NumA3 + NumB3_1  // 2번 프레임 b값이 스페어 일때 3번 프레임 합계

var Sum3A = Sum2A + NumA3 + NumB3_1 // 2번 프레임 b값이 스페어 아닐때 3번 프레임 합계

var Sum3_1 = Sum3 + NumA4

if((NumB2_1 == (10-NumA2)) || (NumB3_1 == (10-NumA3))){  
    // 2번 프레임 b값이 스페어 이면서 3번 프레임 b값이 스페어일때
    document.getElementById("sum3").innerHTML =  Sum2A + NumA3
}else if((NumB2_1 != (10-NumA2)) || NumB3_1 != (10-NumA3)){ 
    // 2번 프레임 b값이 스페어가 아니고 3번 프레임 b값이 스페어가 아닐때
    document.getElementById("sum3").innerHTML =  Sum2 + NumA3
}


// if(NumB3_1 == (10-NumA3)){ // 3번 프레임 b값이 스페어일때
//     document.getElementById("sum3").innerHTML = Sum3_1 ;
    
// } else if(NumB3_1 != (10-NumA3)){ // 3번 프레임 b값이 스페어 아닐때
//      document.getElementById("sum3").innerHTML = Sum3A 
// }


// //------------------  4번 프레임 a, b 점수 합계 조건문  -------------------//

// var Sum4 =  Sum3_1 + NumA4 + NumB4_1

// var Sum4_1 = Sum4 + NumA5

// if(NumB4_1 == (10-NumA4)){ // 스페어일때
//     document.getElementById("sum4").innerHTML = Sum4_1;
    
// } else if(NumB4_1 != (10-NumA4)){ // 스페어 아닐때
//      document.getElementById("sum4").innerHTML = Sum4 
// }


// //------------------  5번 프레임 a, b 점수 합계 조건문  -------------------//

// var Sum5 = Sum4_1 + NumA5 + NumB5_1

// var Sum5_1 = Sum5 + NumA6

// if(NumB5_1 == (10-NumA5)){ // 스페어일때
//     document.getElementById("sum5").innerHTML = Sum5_1;
// } else if(NumB5_1 != (10-NumA5)){ // 스페어 아닐때
//     document.getElementById("sum5").innerHTML = Sum5
// }

// //------------------  6번 프레임 a, b 점수 합계 조건문  -------------------//

// var Sum6 =  Sum5 + NumA6 + NumB6_1

// var Sum6_1 = Sum6 + NumA7

// if(NumB6_1 == (10-NumA6)){ // 스페어일때
//     document.getElementById("sum6").innerHTML = Sum6_1;
// } else if(NumB6_1 != (10-NumA6)){ // 스페어 아닐때
//     document.getElementById("sum6").innerHTML = Sum6
// }


// //------------------  7번 프레임 a, b 점수 합계 조건문  -------------------//

// var Sum7 =  Sum6 + NumA7 + NumB7_1

// var Sum7_1 = Sum7 + NumA8

// if(NumB7_1 == (10-NumA7)){ // 스페어일때
//     document.getElementById("sum7").innerHTML = Sum7_1;
// } else if(NumB7_1 != (10-NumA7)){ // 스페어 아닐때
//     document.getElementById("sum7").innerHTML = Sum7
// }


// //------------------  8번 프레임 a, b 점수 합계 조건문  -------------------//

// var Sum8 =  Sum7 + NumA8 + NumB8_1

// var Sum8_1 = Sum8 + NumA9

// if(NumB8_1 == (10-NumA8)){ // 스페어일때
//     document.getElementById("sum8").innerHTML = Sum8_1;
// } else if(NumB8_1 != (10-NumA8)){ // 스페어 아닐때
//     document.getElementById("sum8").innerHTML = Sum8
// }


// //------------------  9번 프레임 a, b 점수 합계 조건문  -------------------//

// var Sum9 =  Sum8 + NumA9 + NumB9_1

// var Sum9_1 = Sum9 + NumA10

// if(NumB9_1 == (10-NumA9)){ // 스페어일때
//     document.getElementById("sum9").innerHTML = Sum9_1;
// } else if(NumB9_1 != (10-NumA9)){ // 스페어 아닐때
//     document.getElementById("sum9").innerHTML = Sum9
// }


// //------------------  10번 프레임 a, b, c 점수 합계 조건문  -------------------//
// var NumA11 = getRandomInt();

// var Sum10 = Sum9 + NumA10 + NumB10_1

// var Sum10_1 = Sum10 + NumA11

//     if(NumB10_1 == (10-NumA10)){
//         document.getElementById("sum10").innerHTML = Sum10_1
//     } else if(NumB10_1 != (10-NumA10)){
//         document.getElementById("sum10").innerHTML = Sum10
//     }

// //--------------------   최종합계 칸   ----------------------//

// document.getElementById("randomEND").innerHTML = Sum10










