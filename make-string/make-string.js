//회문처리
const palindrome = (x) => {
    //문자열 처리 
    console.log("문자열길이:", x.length) ;
    //문자열이 없을 경우
    if (x.length === 0) return ;
    
    //문자열 한글자씩
    //for(let i=0; i< x.length; i++) console.log(x[i]);
    //for(let i of x) console.log(i) ;

    //회문확인 : case1
    const txt2 = document.querySelector("#txt2") ;
    // s="" ;
    // for(let i=x.length-1; i>=0; i--) {
    //     console.log(i);
    //     s = s + x[i] ;
    // }

    //회문확인 : case2
    console.log("x=", x);
    s = x.split("").reverse().join("")
    console.log("s=", s); 


    if (x === s) txt2.value = "회문입니다.";
    else  txt2.value = "회문이 아닙니다.";

}

//숫자합계
const numSum = (x) => {
    let sum = 0 ;

    for(let i of x) {
        if (!isNaN(i)) sum = sum + parseInt(i);
    }
    txt2.value = sum ;
}

document.addEventListener("DOMContentLoaded", () => {
    //배열확인 
    let arr = [] ;

    //버튼 확인 
    const bts = document.querySelectorAll("input[type=button]") ;
    const txt1 = document.querySelector("#txt1") ;
    const rbt = document.querySelector("input[type=reset]") ;
    rbt.addEventListener('click', () =>{
        //배열 내용 지우기
        arr.length = 0 ;
    }) ;

    console.log(bts);
    bts.forEach( (item) => {
        item.addEventListener("click", () => {
            if (item.value === "회문확인") palindrome(txt1.value) ;
            else numSum(txt1.value) ;
        });
    });
 
    const bt1s = document.querySelectorAll(".bt1") ;
    bt1s.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(item.textContent) ;
            switch (item.textContent) {
                case '사과' : arr.push('🍎') ; break;
                case '바나나' : arr.push('🍌') ; break;
                case '당근' : arr.push('🥕') ; break;
                case '수박' : arr.push('🍉') ; break;
            }
            console.log(arr) ;
            txt1.value = arr.join(',') ;
        }) ;
    });

    const bt2s = document.querySelectorAll(".bt2") ;
    bt2s.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            switch (item.textContent) {
                case '사과삭제' : 
                    arr = arr.filter((item) => item != '🍎')  ;
                    break;
                case '바나나삭제' : 
                    arr =  arr.filter((item) => item != '🍌')  ;
                    break;
                case '당근삭제' : 
                    arr =  arr.filter((item) => item != '🥕')  ;
                     break;
                case '수박삭제' : 
                    arr =  arr.filter((item) => item != '🍉')  ;
                    break;
            }
            console.log(arr) ; 
            txt1.value = arr.join(',') ;
        });
    });

    const bt3s = document.querySelectorAll(".bt3") ;
    bt3s.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
           
            console.log(item.textContent.slice(0, 2)) ; 
            switch (item.textContent.slice(0, 2)) {
                case '사과' : 
                    arr = arr.map((item) => item ==='🍎' ? '🥒' : item)  ;
                    break;
                case '바나' : 
                    arr =  arr.map((item) => item ==='🍌' ? '🥦' : item)  ;
                    break;
                case '당근' : 
                    arr =  arr.map((item) => item ==='🥕' ? '🍊' : item)  ;
                     break;
                case '수박' : 
                    arr = arr.map((item) => item ==='🍉' ? '🍇' : item)  ;
                    break;
            }
            console.log(arr) ; 
            txt1.value = arr.join(',') 
        });
    });

});