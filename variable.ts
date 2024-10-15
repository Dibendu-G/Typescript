//ANCHOR - Variables

// var x1:number = 10;
// console.log(x1);

// var x2:number = 104.5;
// console.log(x2);

// var x3:boolean = true;
// console.log(x3);

// var x4:boolean = false;
// console.log(x4);

// var x5:string = "Samrat";
// console.log(x5);

// var x6:any =1450.54699;
// console.log(x6);

//SECTION - Creating An Array

// var arr:number[] = [10,20,45,35,85];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

//SECTION Creating an Function

// function addnum(x1:number, x2:number):number
// {
//     return x1 + x2;
// }

// var result = addnum(10,20);
// console.log(result);

// function test():void{
//     console.log("Testing");
// }

// test();

// function addNum(x1:string,x2:number):string{
//     return x1+x2;
// }

// var result = addNum("Samrat",100);
// console.log(result);

// function names(x1:string,x2:string):string{
//     return x1+` `+x2;
// }

// var result = names("Samrat","Ghosh");
// console.log(result);

//!SECTION Optional Parameters

// function test(x1:number,x2?:number):void{
//     console.log(x1);
//     console.log(x2);
// }

// test(10);

//!SECTION Default Parameters

// function test(x1:number,x2=100):void{
//     console.log(x1);
//     console.log(x2);
// }

// test(10,350);

//!SECTION for loop

// function loop (n:number[]):void{
//     for(var i=0;i<n.length;i++){
//         console.log(n[i]);
//     }
// }

// var x1:number[] = [10,42,25,6];
// console.log(loop(x1));

//!SECTION REST Parameters

// function test(...n:number[]):void{
//     for(var i=0;i<n.length;i++){
//         console.log(n[i]);
//     }
// }

// test(10,20,30,40,50,60,70,80,90,100);

// function test(...n:any[]):void{
//     for(var i:number=0;i<n.length;i++){
//         console.log(n[i]);
//     }
// }

// test("samrat",10,40,50,"Ghosh",52);

// function test(i:string,...n:number[]):void{
//     for(var x:number=0;x<n.length;x++){
//         console.log(n[x]);
//     }
//     console.log(i);
// }

// test("Samrat",10,40,50,80,90,35,25,30);

// function test(name:string,city:string):void{
//     console.log(`${name} ${city}`);
// }

// test("Samrat","Bangalore");

//!SECTION ARROW FUNCTIONS

// var v1 = (x1:number,x2:number):number =>
// {
//     return x1+x2;
// }

// var result:number = v1(10,20);
// console.log(result);

//ANCHOR - Without RETURN

// var addVal = (v1:number,v2:number):number => v1+v2;
// var result:number = addVal(10,20);
// console.log(result);

//ANCHOR - Develope a funcion to return multiplication of two numbers

// function multi(x1:number,x2:number):number{
//     return x1*x2;
// }

// var result:number = multi(10,5);
// console.log(result);

//ANCHOR - CRESTE AN ARRAY AND STORES IT'S VALUES AND PRINT IT IN USING FOR LOOPS

// var arr:number[] = [10,20,30,40,50,60];
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

//ANCHOR - CREATE AN ARROW FUNCTIONS TO MULTIPLE TWO NUMBERS

var val = (v1:number,v2:number)=>{
    return v1*v2;
}

var result = val(10,20);
console.log(result);
