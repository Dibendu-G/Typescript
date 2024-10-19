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

// var val = (v1:number,v2:number)=>{
//     return v1*v2;
// }

// var result = val(10,20);
// console.log(result);

//ANCHOR - ENUm

// enum val{
//     Red, 
//     Green,
//     Yellow
// }
// console.log(val);
// console.log(val[0]);
// console.log(val[1]);
// console.log(val[2]);

//ANCHOR - let

// function test():void{
//     let x:number = 35;
//     console.log(x);
// }
// console.log(x); // Error
// test();

//ANCHOR - Const

// function test():void{

//     const x:number = 35;
//     console.log(x);

    // x = 25;
    // console.log(x); // ERROR
// }

// test();

//console.log(x); //ERROR


//ANCHOR - NON-STATIC VARIABLES

// class a{
//     id:number;
//     city:string;

//     test():void{
//         this.id=10;
//         this.city="Bangalore";

//         console.log(this.id); // Correct and will give the output
//         console.log(this.city); // correcrt and will give the output
//     }
// }

// var a1 = new a();
// a1.test();
//console.log(a1.id); // Error and Unaccessible variables
//console.log(a1.city);// Error and Unaccessible variables

//ANCHOR - Constructor

// class a{
//     constructor(){
//             console.log(10);
//     }
// }
// var a1 = new a();

//ANCHOR - Constructor with Args

// class a{
//     constructor(id:number, city:string){
//         console.log(`${id} ${city}`);
//     }
// }

// var a1 = new a(10,"SAM");

// class a {
//     x:number;
//     y:string;

//     constructor(id:number, city:string){
//         this.x=id;
//         this.y=city;

//         console.log(this.x);
//         console.log(this.y);
//     }
// }

// var a1 = new a(10,"SAM");

// class a{
//     x:string = "SAMRAT";
//     y:number=10;
// }
// var a1 = new a();
// console.log(this.x); // error
// console.log(a1.y);  // correct

// class a{
//     x:string = "SAMRAT";
//     y:number = 10;

//     test():void{
//         console.log(this.x);
//         console.log(this.y);
//     }
// }

// var a1 = new a();
// a1.test();

// class a{
//     id:number;
//     city:string;

// }
// var a1{                                  //-> errors
//     "id":10,
//     "city":"bangalore";
// }
// console.log(a1.id);
// console.log(a1.city);

//ANCHOR - INTERFACE

// interface a{
//     test():void;
// }

// class b implements a{
//     test():void{
//         console.log(100);
//     }
// }

// var b1 = new b();
// b1.test();

// interface a{
//     city:string;
//     test():void;
// }

// class b implements a {
//     city:string;
//     test():void{
//         console.log("FROM TEST");
//     }
// }
// var b1 = new b();
// b1.test();

//ANCHOR - STATIC

// class a{
//     static x:number=10;
//     x=20; // cannot be changed
// }
// console.log(a.x);

// class a{
//     static test():void{
//         console.log("FROM TEST");
//     }
// }
// a.test();

//ANCHOR - INHERINTANCE

// class a{
//     test():void{
//         console.log("This test");
//     }
// }

// class b extends a {

// }

// var b1 = new b();
// b1.test();

//ANCHOR - ARROW FUNCTION

class a {
    test():void{
        var x =()=>{
            console.log("This is inside of an arrow function");
        };
        x();
    }
}

var a1 = new a();
a1.test();