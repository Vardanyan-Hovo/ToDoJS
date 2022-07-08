// const str = "0123456789";
// let y = str.slice(20);
// let z = str.substring(20,30);
// console.log(y);
// console.log(z);,




// const x = [1,2,3,4,5,6,7,8,9];
// // x.flat();
// let y = x.slice(2,5);
// console.log(y);

///////////////////////////////////////////////////////////
// function* counter(value) {
//    let step;
//    let i = 0;
//     while (true) {
//       console.log('start ='+  i + "   step ="+ step + "   value ="+ value);
//      step = yield value++;
//       // step = value;
//       console.log('i ='+  i + "   step ="+ step + "   value ="+ value);
//       i++;
//       if (step) {
//         console.log(" step== " + step + " i== " + i);
//         value += step;
//       }
//     }
// }
//       const generatorFunc = counter(0);
//       console.log(generatorFunc.next().value);   // 0
//       console.log(generatorFunc.next().value);   // 1
//       console.log(generatorFunc.next(10).value);   // 2
//       console.log(generatorFunc.next().value);   // 3
//       console.log(generatorFunc.next(10).value); // 14
//       console.log(generatorFunc.next().value);   // 15
//       console.log(generatorFunc.next(10).value); // 26
///////////////////////////////////////////////////////////////////////
// let oa = {}
// let ob = {a: 'foo', b: 42, c: {}}

// let a = 'foo', b = 42, c = {}
// let oc = {a: a, b: b, c: c}
// "use strict"
// let o = {
//   property: function (parameters) {
//     value:0
//   },
//   // get property() {
//   //   console.log(value)
//   // },
//   set property(value) {
//     value=value
//   }
// };
// ////////////////////////////////////////////////////////////////////////
// let nameOther = 'XYZ';

// // We can access this global property using:
// Object.getOwnPropertyDescriptor(window, 'nameOther');

// // output: Object {value: "XYZ",
// //                  writable: true,
// //                  enumerable: true,
// //                  configurable: false}

// // Since "nameOther" is added using with the
// // var keyword, it is marked as "non-configurable"
// nameOther = "asss";
// delete nameOther.enumerable;   // return false
// console.log("Hello");
// console.log(nameOther);
//////////////////////////////////////////////////////////////////////////
// const a = 5;          //  00000000000000000000000000000101
// const b = 2;          //  00000000000000000000000000000010
// const c = 2;         //  11111111111111111111111111111011

// // console.log(a >> b);  //  00000000000000000000000000000001
// // expected output: 1

// // console.log(c >> b);  //  11111111111111111111111111111110
// // expected output: -2
// let i = 1;
// while(i <= 34){
//   console.log(" c>>>i {" + (c >>> i));
//   console.log(" c>>i =" + (c >> i));
//   i++;
// }
//////////////////////////////////////////////////
// const [a, b, ...{ pop, push }] = [1, 2];
// console.log(a, b); // 1 2
// console.log(pop, push); // [Function pop] [Function push]
///////////////////////////////////////////////////////////
// const { a, ...{ b } } = { a: 1, b: 2 };
// // SyntaxError: `...` must be followed by an identifier in declaration contexts

// let a, b;
// ({ a, ...{ b } } = { a: 1, b: 2 });
// SyntaxError: `...` must be followed by an assignable reference in assignment contexts
////////////////////////////////////////////////////////////
// const regex = /^foo/g; 
// // the "global" flag is set

// // regex.lastIndex is at 0
// console.log(regex.test('foo'))     // true
// console.log(regex.lastIndex);
// // regex.lastIndex is now at 3
// console.log(regex.test(" foofoo"))      // false
// console.log(regex.lastIndex);
// // regex.lastIndex is at 0
// console.log(regex.test('foo'))  // true
// console.log(regex.lastIndex);
// // // regex.lastIndex is at 6
// console.log(regex.test('foobar'))  //false
// console.log(regex.lastIndex);

// regex.lastIndex is at 0
// (...and so on)
// const str = 'hello world!';
// const result = /^hello/.test(str);


// console.log(result); // true
/////////////////////////////////////////////////
// function* g1() {
//   yield 2;
//   yield 3;
//   yield 4;
// }

// function* g2() {
//   yield 1;
//   yield* g1();
//   yield 5;
//   return 3
// }

// const iterator = g2();

// console.log(iterator.next()); // {value: 1, done: false}
// console.log(iterator.next()); // {value: 2, done: false}
// console.log(iterator.next()); // {value: 3, done: false}
// console.log(iterator.next()); // {value: 4, done: false}
// console.log(iterator.next()); // {value: 5, done: false}
// console.log(iterator.next()); // {value: undefined, done: true}
////////////////////////////////////////////////////

// function* re(){
//   yield* [9,9,9,1]
// }



// function* g3() {
//   yield* [1, 2];
//   yield "hello";
//   // yield* Array.from(arguments);
//   yield* re();
// }

// const iterator = g3(5, 6);

// console.log(iterator.next()); // {value: 1, done: false}
// console.log(iterator.next()); // {value: 2, done: false}
// console.log(iterator.next()); // {value: "3", done: false}
// console.log(iterator.next()); // {value: "4", done: false}
// console.log(iterator.next()); // {value: 5, done: false}
// console.log(iterator.next()); // {value: 6, done: false}
// console.log(iterator.next()); // {value: undefined, done: true}
///////////////////////////////////////////////////////////////

// function* g4() {
//   yield [1, 2, 3];
//   return 'foo';
// }

// function* g5() {
//   let x = 1;
//   const g4ReturnValue = yield* g4();
//   x++;
//   console.log(g4ReturnValue + "   " + x) // 'foo'
//   x++;
//   return g4ReturnValue;
// }

// const iterator = g5();

// console.log(iterator.next()); // {value: 1, done: false}
// console.log(iterator.next()); // {value: 2, done: false}
// console.log(iterator.next()); // {value: 3, done: false} done is false because g5 generator isn't finished, only g4
// // console.log(iterator.next()); // {value: 'foo', done: true}
///////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(Number.NaN === NaN);
// console.log(Object.is(NaN, NaN))
///////////////////////////////////////////////////////////
// console.log(Object.is(25, 25));                      //true
// console.log(Object.is('foo', 'foo'));                //true
// console.log(Object.is('foo', 'bar'));                //false
// console.log(Object.is(null, null));                  //true
// console.log(Object.is(undefined, undefined));        //true
// console.log(Object.is(undefined, null));             //false
// console.log(Object.is(window, window));              //true
// console.log(Object.is([], []));                      //false
// const foo = { a: 1 };                           
// const bar = { a: 1 };              
// console.log(Object.is(foo, foo));                    //true
// console.log(foo === foo);                            //true
// console.log(Object.is(foo, bar));                    //fals

// console.log(/Case 2: Signed zero/g);

// Case 2: Signed zero
// console.log(Object.is(0, -0));                       //false
// console.log(Object.is(+0, -0));                      //false
// console.log(Object.is(-0, -0));                      //true
// console.log(Object.is(0n, -0n));                     //true
// console.log(-0 === +0)                             

// console.log(/Case 3: NaN/)


// Case 3: NaN
// console.log(Object.is(NaN, 0/0));                     //true
// console.log(Object.is(NaN, 5/0));                     //false
// console.log(Object.is(NaN, Infinity));                //false
// console.log(Object.is(Infinity, Infinity));           //true
// console.log(Object.is(NaN, Number.NaN))               //true

// console.log("             undefined + null    \n      ");

// console.log(Object.is(undefined, undefined))          //true
// console.log(Object.is(undefined, null));              //false
// console.log(Object.is(window, window));               //true
// console.log(Object.is([], []));                       //false
// console.log(Object.is(foo, foo));                     //true
// console.log(Object.is(foo, bar));                     //false

// console.log(/(0n, 0n)/);

// console.log(1 + " " + Object.is(0n, 0n));             //true
// console.log(2 + " " + Object.is(0n, -0n));            //true
// console.log(3 + " " + Object.is(-0n, 0n));            //true
// console.log(4 + " " + Object.is(0n, 0));              //false
// console.log(5 + " " + Object.is(-0, 0n));             //false
// console.log(6 + " " + Object.is(0n, -0));             //false
// console.log(7 + " " + Object.is(0, -0));              //false
// console.log(8 + " " + Object.is(+0, -0));             //false
// console.log(9 + " " + Object.is(0, 0));               //true
// console.log(10 + " " + (0n == 0));                    //true
// console.log(11 + " " + (0n === 0));                   //false
// console.log(12 + " " + (0 == 0));                     //true
// console.log(13 + " " + (-0 == 0));                    //true
// console.log(14 + " " + (-0 === 0));                   //true
// console.log(15 + " " + (-0 == +0));                   //true
// console.log(16 + " " + (-0 === +0));                  //true
// console.log(17 + " " + (-0 == Infinity));             //false
// console.log(18 + " " + (-0 === Infinity));            //false
// console.log(19 + " " + (0/0 === Infinity));           //false
// console.log(20 + " " + (Infinity == -Infinity));      //false
// console.log(21 + " " + (Infinity === -Infinity));     //false
// console.log(22 + " " + (Infinity == +Infinity));      //true
// console.log(23 + " " + (Infinity=== +Infinity));      //true
// console.log(24 + " " + (-Infinity === -Infinity));    //true
// console.log(25 + " " + (-Infinity == -Infinity));     //true
// console.log(26 + " " + (-0/0 === 0));                 //false
// console.log(27 + " " + (18/0 === Infinity));          //true
// console.log(28 + " " + (-19/0 === -Infinity));        //true
// console.log(29 + " " + (-0/0 === -0));                //false
// console.log(30 + " " + (-0/0 === -Infinity));         //false
// console.log(31 + " " + (0/0 === 0));                  //false
// console.log(32 + " " + (0/0 == NaN));                 //false
// console.log(33 + " " + (Object.is(0/0 ,NaN)));        //true
// console.log(34 + " " + (0/0 == Number.NaN));          //fals
// console.log(35 + " " + (0/0 === Number.NaN));         //false
// console.log(36 + " " + (Object.is(0/0 ,Number.NaN))); //true
// console.log(37 + " " + (Object.is(8/0 ,Infinity)));   //true
// console.log(38 + " " + (Object.is(8/0 , -Infinity))); //false
// console.log(39 + " " + (Object.is(-8/0 , -Infinity)));//true

// console.log("                        undefined  \n     ");

// console.log(1+ " " + Object.is("", undefined));      //false
// console.log(2+ " " + Object.is(undefined, null));    //false
// console.log(3+ " " + Object.is(window, window));     //true
// console.log(4+ " " + Object.is(undefined, ));        //true
// console.log(5+ " " + Object.is({} , null));          //false
// console.log(6+ " " + Object.is(window, ));           //false
// console.log(7+ " " + Object.is(undefined, undefined));//true
// console.log(8+ " " + Object.is(undefined, null));     //false
// console.log(9+ " " + Object.is(window, ));            //false
// console.log(10+ " " + Object.is(undefined, ));        //true
// console.log(11+ " " + Object.is(null , ));            //false
// console.log(12+ " " + Object.is(window, {}));         //false
// console.log(13+ " " + Object.is(window, ""));         //false
// console.log(14+ " " + Object.is(undefined, ));        //true
// console.log(15+ " " + Object.is(null , {}));          //false
// console.log(16+ " " + (null == undefined));           //true
// console.log(17+ " " + (null === undefined));          //false

// console.log("                              K      \n    ");

// let k;
// console.log(Object.is(undefined, k));                 //true
// console.log(Object.is(null , k));                     //false
// console.log(Object.is(k, k));                         //true
// console.log(k===k);                                   //true
// console.log(k===null);                                //false
// console.log(k==null);                                 //true
// console.log(undefined === null)                       //false
// console.log(undefined == null)                        //true
// console.log(typeof(undefined) == typeof(null))        //false

// console.log("                               Object  \n         ");


// console.log(new Object == Object.create);            //false
// console.log(new Object === Object.create);           //false
// console.log(Object.is(new Object, Object.create));   //false
// console.log(Object.is(new Object, {}));              //false
// console.log(Object.is({}, Object.create));           //false
// console.log(Object.is([], Object.create));           //false
// console.log(Object.is(new Object,[]));               //false
// console.log(Object.is(0 , -0));                      //false

// var num = 0;
// var obj = new String('0');
// var obj1 = new String('0');
// var str = '0';

// // console.log(num === num); //true
// // console.log(obj === obj); //true
// // console.log(str === str); //true
// // console.log(num === obj); // false


// console.log(obj == obj1); // false
// console.log(num == obj1);
// console.log(num == obj);  // true
// const x = obj && obj1 && num == str;
// console.log(obj == obj1 == num == str); // false
// console.log(x); // false
// console.log(str == obj1);
// console.log(str == num);
// console.log(str == obj);  // true



// console.log(obj);
// console.log(str);
// console.log(num === str); // false
// console.log(obj === str); // false
// console.log(null === undefined); // false
// console.log(null == undefined); // true
// console.log(obj === null); // false
// console.log(obj === undefined); // false




// const str = '#foo#';
// const regex = /^foo/y;

// regex.lastIndex = 1;
// console.log(regex.test(str)); // true
// console.log(regex.lastIndex);
// regex.lastIndex = 5;
// console.log(regex.test(str)); // false (lastIndex is taken into account with sticky flag)
// console.log(regex.lastIndex);
// delete regex;
// regex.lastIndex = 1; // 0 (reset after match failure)
// console.log(regex.lastIndex);
// console.log(regex.test(str));


// const regex = /^foo/y;
// console.log(regex.lastIndex = 2);
// console.log(regex.test('..foo'));   // false - index 2 is not the beginning of the string

// const regex2 = /^foo/my;
// console.log(regex2.lastIndex = 2);
// console.log(regex2.test('..foo'));  // false - index 2 is not the beginning of the string or line
// console.log(regex2.lastIndex = 2);
// console.log(regex2.test('.\nfoo')); // true - index 2 is the beginning of a line
// console.log(regex2.lastIndex);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const obj = {
//   s:"Hello",
//   *[Symbol.iterator]() {
//     for (const v of [0, 1, 2, 3]) {
//       console.log(v);
//       yield v;
//     }
//   },
//   *[Symbol.iterator]() {
//     for (const v of [5, 6, 7]) {
//       console.log(v);
//       yield v;
//     }
//   }
// }
// const [a, b,c,d,e,f] = obj; // Only logs 0 and 1

/////////////////////                                                 ////////////////   1111
//1-----------------------------------------------------------------------
// const [a, b] = new Map([[1, 2], [3, 4]]);
// console.log(a, b); // [1, 2] [3, 4]


//2-----------------------------------------------------------------------


// const obj = { 'hakob sasa': "a", 1: "b", length: 2 };

// const {hakob_sasa,l} = obj;

// console.log(hakob sasa);

// const obj = {
//   *[Symbol.iterator]() {
//     for (const v of [0, 1, 2, 3]) {
//       console.log(v);
//       yield v;
//     }
//   }
// }
// const [a, b, ...rest] = obj; // Logs 0 1 2 3
// console.log(rest); // Logs

//3-----------------------------------------------------------------------

// const o = {p: 42, q: true};
// const {p: foo, q: bar} = o;

// console.log(foo); // 42
// console.log(bar); // true

//4---------------------------------------------------------------------------

// const {a = 10, b = 5} = {a: 3};

// console.log(a); // 3
// console.log(b); // 5

//5---------------------------------------------------------------------------

// const obj1 = {
//   *[Symbol.iterator](){
//     // for(let x of [1,2,3,4,5,6]){
//     let x = 1;  
//     let s = yield x;
//     x++;
//     yield x;
//     x+=7;
//     yield x;
//     x++;
//     yield x;
//     x+=3;
//     yield x;
//     x++;
//     yield x;
//     // }
//   },
//   *[Symbol("getArgumen")](x){
//     let y = x;
//     y++;
//    yield 3;
//     yield 5;
//   }
// }

// const [a,b,...s] = obj1;
// console.log(s);
// // console.log(obj1["getArgumen"].next(5).value);
// console.log(obj1[Symbol("getArgumen")]);

//6 ---------------------------------------------------------------------------------
// const user = {
//   id: 42,
//   displayName: 'jdoe',
//   fullName: {
//     firstName: 'John',
//     lastName: 'Doe'
//   }
// };

// function userId({id}) {
//   return id;
// }

// console.log(userId(user)); // 42

// function userDisplayName({displayName: dname = "Kara"}) {
//   return dname;
// }

// console.log(userDisplayName(user)); // `jdoe`

// function whois({displayName, fullName: {firstName:name}}) {
//   return `${displayName} is ${name}`;
// }

// console.log(whois(user));  // "jdoe is John"



// function drawChart({size = 'big', coords = {x: 0, y: 0, z:4}, radius = 25} = {}) {
//   console.log(size, coords, radius);
//   // do some chart drawing
// }

// drawChart({
//   coords: {x: 18, y: 30},
//   radius: 30
// });

//7----------------------------------------------------------------------------------------

// const metadata = {
//   title: 'Scratchpad',
//   translations: [
//     {
//       locale: 'de',
//       localization_tags: [],
//       last_edit: '2014-04-14T08:43:37',
//       url: '/de/docs/Tools/Scratchpad',
//       title: 'JavaScript-Umgebung'
//     }
//   ],
//   url: '/en-US/docs/Tools/Scratchpad'
// };

// let {
//   title : englishTitle, // rename
//   translations: [
//     {
//        title: localeTitle, // rename
//        printsa : ffx = function(){  // rename
//          console.log(this.localeTitle);
//        }
//     },
//   ],
// } = metadata;

// const x = {
//   aa : 7,
//   cc : function(){
//     console.log(this.aa);
//   },
//   kk : [
//     aa = 8,
//     ss = {
//       aa : 78,
//       qqq : {
//           aa : 99,
//           qq : () => {
//             console.log(this);
//               aa = 11;
//               console.log("Hello " + this.aa)
//           }
//       },
//       news1 : ()=>{
//         consol.log(this);
//       },
//       news2 : function(){
//         consol.log(this)
//       }
//     }
//   ]
// }

// // console.log(englishTitle); // "Scratchpad"
// // console.log(localeTitle);  // "JavaScript-Umgebung"
// // console.log("XYZ");
// x.cc();
// x.kk[1].qqq.qq();
//8--------------------------------------------------------------------------------------------------------

// const people = [
//   {
//     name: 'Mike Smith',
//     family: {
//       mother: 'Jane Smith',
//       father: 'Harry Smith',
//       sister: 'Samantha Smith'
//     },
//     age: 35
//   },
//   {
//     name: 'Tom Jones',
//     family: {
//       mother: 'Norah Jones',
//       father: 'Richard Jones',
//       brother: 'Howard Jones'
//     },
//     age: 25
//   }
// ];

// for (const {name: n, family: {father: f}} of people) {
//   console.log('Name: ' + n + ', Father: ' + f);
// }

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"
//9-------------------------------------------------------------------------------------------------------
// let key = 'z';
// let {[key]: foo} = {z: 'bar'};

// console.log(foo); // "bar"
//10-------------------------------------------------------------------------------------------------------
// let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
// a; // 10
// b; // 20
// rest; // { c: 30, d: 40 }
// const foo = { 'fizz-buzz': true };
// const { 'fizz-buzz': fizzBuzz } = foo;

// console.log(fizzBuzz); // true

// const foo1 = { fizz_buzz: false };
// const {fizz_buzz} = foo1;

// console.log(fizz_buzz); // true
//11---------------------------------------------------------------------------------------------------------
// let na = "name";
// const props = [
//   { id: 1, name: 'Fizz'},
//   { id: 2, name: 'Buzz'},
//   { id: 3, name: 'FizzBuzz'}
// ];

// const [,, { [na] : name }] = props;

// console.log(name); // "FizzBuzz"
// let obj = {self: '123',sasa:888};
// obj.__proto__.prot = '456';
// obj.sasa= "699";
// const {self, prot,sasa:klon} = obj;
// console.log(self);
// console.log(obj.prot);
// console.log(klon);
// // self "123"
// // prot "456" (Access to the prototype chain)
// const {a, b} = {a: 1, b: 2}
// ({a, b} = {a: 2, b: 2})
// console.log(a);
// let a, b;

// ({a, b} = {a: 1, b: 2});
// [c,d] = [1,2,3,4]
// console.log(a,b,c,d);
//------------------------------------------------------------------
// class cla{
//   a = 1111;
// }

// class s extends cla {

//   aa = 9;
//   hh = 9;
//   b = 9;
//   static stat = 9;
// }
// const y = {
//   aa : 7,
//   a : 7,
//   hh : 7,
//   b : 7,
// }
// function funccnst () {
//   console.log(this);
//   aa = 8;
//   a = 8;
//   hh = 8;
//   b = 8;
// }
// const z = new s();
// // const z1 = new funccnst();

// const {a = 10, b, hh : gh = 9, aa : oa}  = z;

// console.log(a); // 3
// console.log(b); // 5
// console.log(gh);
// console.log(oa);
// console.log(s.stat);

//-------------------------------------------------------------------------

// const func5 = () => {
//       let a = NaN === NaN;//false
//       let b = true + 1 + "";//"2"
//       let c = false || true || 1;//true
//       let d = 0 || undefined || true || '1';//true
//       let e = 0 && "John" && "";//0
//       let f = !(false + "" && undefined);//true
//       let g = (!(false + "" && undefined) && "null" &&  10/0 && 42 && !NaN) + "love";//"truelove"
//       let z =false + "" && undefined;//undefined
//       // debugger
//       console.log(z);
//      }
//   func5();
//-------------------------------------------------------------------------------
// let yx = 0;

// function parseProtocol(url) {
//   const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
//   if (!parsedURL) {
//     return false;
//   };
//   yx = 1;
//   console.log("ssssss");
//   console.log(parsedURL);
//   // ["https://developer.mozilla.org/en-US/docs/Web/JavaScript",
//   // "https", "developer.mozilla.org", "en-US/docs/Web/JavaScript"]

//   const [x, protocol, fullhost, fullpath] = parsedURL;
//   return x;
// }      

// console.log(parseProtocol('https://developer.mozilla.org/en-US/docs/Web/JavaScript'));
// // "https"


//-----------------------------------------------------------------------------------------------------

// let zoo = function(text,age){
//   alert(text + " : " + this.name + age + this.age)
// }

// const person ={
//   name : "Kara",
//   age : 26
// }

// const bind = function(func, context){
//   return function(...arr){
//     console.log(arr);
//     return func.call(context, ...arr);
//   }
// }

// let foo = bind(zoo, person);
// foo("name : "," \nage : ");

// const x = [23,9,12,23,23,44,59,6,6];

// const obj2 = {
//   name : "Ana",
//   age : 25,
//   lastName : "karapetyan"
// }

// const obj1 = {
//   name : "Kara",
//   foo : function(g){
//     console.log(this.name + " c= " + g + "  c");
//   }
// };

// x.forEach(obj1.foo, obj2);

// console.log("  New object  ");

// let newArr = x.filter((arr, i)=>{
//    return !x.find((y, fi) => arr === y && i !== fi);
// });
// console.log(newArr);
//-----------------------------------------------------------
// const obj = {
//   name : "Kara",
//   age : 20,
//   lastName : "Karapetyan",
//   func : function(){
//     console.log(this);
//   }
// }
// class obj1{
//   name = "Anahit";
//   firstName = "Hakobyan"
// };

// class obj2 extends obj1
// {
//   name = "Anna";
//   age = 25;
// }
// let x = Object.keys(obj2);
// console.log(x);
// x.forEach(element => {
//   console.log(element);
// });

// obj.func();

// [1,2,3].forEach(obj.func,obj2);
//--------------------------------------------------------------
// function drawChart({size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}) {
//   console.log(size, coords, radius);
//   // do some chart drawing
// }

// drawChart({
//   coords: {x: 18, y: 30},
//   radius: 30
// });

//----------------------------------------------------------------------

// const arr = [1,3, 1, 2, 2, 3, 3];

// const iterable1 = new Set(arr);
// // for (const value of iterable1) {
// //   console.log(value);
// // }

// // iterable1.forEach((y)=>{
// //   console.log(y);
// // })

// const iterable2 = new Map([['a', 1], ['b', 2], ['c', 3]]);

// for (const entry of iterable2) {
//   console.log(entry);
// }
// // ['a', 1]
// // ['b', 2]
// // ['c', 3]


// for (const [key, value] of iterable2) {
//   console.log(value)
// }
//-----------------------------------------------------------------------------

// const x = "" ?? "null";
// const y = null ?? null;

// console.log(x + " | " + 25);
// let foo = { someFooProp: "hi" };

// console.log(foo.someFooProp?.toUpperCase() ?? "not available"); // "HI"
// console.log(foo.someBarProp?.toUpperCase() ?? "not available"); // "not available"
//----------------------------------------------------------------------------------------------
// let myMap = new Map();
// myMap.set("foo", {name: "baz", desc: "inga"});
// myMap.set("func",function(){
//   console.log("Hello")
// });

// let nameBar = myMap.get("foo")?.name;
// myMap.get("func")();
// console.log(nameBar);
//-----------------------------------------------------------------------------------------------
// const string1 = "hello";
// const string2 = String("hello");
// const string3 = new String("hello");
// const string4 = new String("hello");

// console.log(string1 == string3); //true
// console.log(string2 == string1); //true
// console.log(string1 == string2); //true
// console.log(string1 == string3); //true
// console.log(string4 == string3); //false
// console.log(string4 == string2); //true
// console.log(string1 == string4); //true
// console.log(string2 == string4); //true
//------------------------------------------------------------------------------
// let obj1 = {}
// console.log(Object.getPrototypeOf(obj1))
// console.log(Object.prototype);
// let obj2 = {__proto__: null}
// console.log(Object.getPrototypeOf(obj2) === null)

// let protoObj = {}
// let obj3 = {'__proto__': protoObj}
// console.log(Object.getPrototypeOf(obj3) === protoObj)

// let obj4 = {__proto__: 'not an object or null'}
// console.log(Object.getPrototypeOf(obj4) )
// console.log(!obj4.hasOwnProperty('__proto__'))
//--------------------------------------------------------------------------------------

// function Shape() {
//   this.x = 0;
//   this.y = 0;
// }

// // superclass method
// Shape.prototype.move = function(x, y) {
//   this.x += x;
//   this.y += y;
//   console.info('Shape moved.');
// };

// // Rectangle - subclass
// function Rectangle() {
//   Shape.call(this); // call super constructor.
// }

// // subclass extends superclass
// Rectangle.prototype = Object.create(Shape.prototype);

// //If you don't set Rectangle.prototype.constructor to Rectangle,
// //it will take the prototype.constructor of Shape (parent).
// //To avoid that, we set the prototype.constructor to Rectangle (child).
// Rectangle.prototype.constructor = Rectangle;

// const rect = new Rectangle();

// console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
// console.log('Is rect an instance of Shape?', rect instanceof Shape); // true
// rect.move(1, 1); // Outputs, 'Shape moved.'


//--------------------------------------------------------------------------------------------------
// const iterable = new Uint8Array([0x00, 0xff]);

// for (const value of iterable) {
//   console.log(value);
// }
// (function() {
//   for (const argument of arguments) {
//     console.log(argument);
//   }
// })(...[1,2,3,4,5,6]);

// Note: This will only work in platforms that have
// implemented NodeList.prototype[Symbol.iterator]
// const articleParagraphs = document.querySelectorAll('article > p');

// for (const paragraph of articleParagraphs) {
//   paragraph.classList.add('read');
// }
// // console.log(paragraph);

// function* foo(){
//   yield 1;
//   yield 2;
//   yield 3;
// };

// for (const o of foo()) {
//   console.log(o);
//   // break; // closes iterator, execution continues outside of the loop
// }
// console.log('done');
// function* fibonachi(){
//   let [prev, corent] =  [0, 1];

//   console.log("start");
//   while (corent < 30){
//     console.log("start1");
//     [prev, corent] = [corent, prev + corent];
//     yield 9;
//     return 9;
//   }
// }

// for(let x of fibonachi()){
//   console.log(x);
//   if(x > 50)
//   {
//     break;
//   }
// }
// Shape - superclass

// Shape - superclass
// function Shape
//-------------------------------------------------------------------------------------------------
// const user = {};

// // A malicious script:

// const x = Object.create(Object.prototype);
// console.log(user)
// Object.prototype.authenticated = false;


// console.log(x)
//---------------------------------------------------------------------------------------------------------
// let o;

// // create an object with null as prototype
// o = Object.create(null);

// o = {};
// // is equivalent to:
// o = Object.create(Object.prototype);

// // Example where we create an object with a couple of
// // sample properties. (Note that the second parameter
// // maps keys to *property descriptors*.)
// o = Object.create(Object.prototype, {
//   // foo is a regular 'value property'
//   foo: {
//     writable: true,
//     configurable: true,
//     value: 'hello'
//   },
//   // bar is a getter-and-setter (accessor) property
//   bar: {
//     configurable: false,
//     get: function() { return 10; },
//     set: function(value) {
//       console.log('Setting `o.bar` to', value);
//     }
// /* with ES2015 Accessors our code can look like this
//     get() { return 10; },
//     set(value) {
//       console.log('Setting `o.bar` to', value);
//     } */
//   }
// });

// function Constructor() {}
// o = new Constructor();
// // is equivalent to:
// o = Object.create(Constructor.prototype);
// // Of course, if there is actual initialization code
// // in the Constructor function,
// // the Object.create() cannot reflect it

// // Create a new object whose prototype is a new, empty
// // object and add a single property 'p', with value 42.
// o = Object.create({}, { p: { value: 42 } });

// // by default properties ARE NOT writable,
// // enumerable or configurable:
// o.p = 24;
// o.p;
// // 42

// o.q = 12;
// for (const prop in o) {
//   console.log(prop);
// }
// // 'q'

// delete o.p;
// // false

// // to specify an ES3 property
// o2 = Object.create({}, {
//   p3: {
//     value: 43,
//     writable: false,
//     enumerable: true,
//     configurable: true
//   },
//   p1: {
//     value: 41,
//     writable: true,
//     configurable: false
//   },
//   p2: {
//     value: 42,
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   p4: {
//     value: 44,
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   p5:{
//     value:99,
//     enumerable:true
//   }
// });
// delete o2.p1;
// o2.p3 = 5;
// o2.p5 = 1111;
// /* is not equivalent to:
// This will create an object with prototype : {p: 42 } */
// const o3 = Object.create({p: 42})
// for (const prop in o2) {
//   console.log(o2[prop]);
// }


//-------------------------------------------------------------------------------------------
// const person = {
//   isHuman: false,
//   printIntroduction: function() {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   }
// };

// const me = Object.create(person);

// me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
// me.isHuman = true; // inherited properties can be overwritten

// me.printIntroduction();
// console.log(me,person);
// // expected output: "My name is Matthew. Am I human? true"
//------------------------------------------------------------------------------------------------------------
// const Person = function(name) {
//   this.name = name;
//   this.canTalk = true;
//   console.info("            1          ");
// };

// Person.prototype.greet = function() {
 
//   if (this.canTalk) {
//     console.log('Hi, I am 1' + this.name);
//   }
// };

// const Employee = function(name, title) {
//   Person.call(this, name);
//   console.info("              2           ");
//   this.title = title;
// };

// Employee.prototype = Object.create(Person.prototype);




// // Employee.prototype.constructor = Employee; //If you don't set Object.prototype.constructor to Employee,
// //                                            //it will take prototype.constructor of Person (parent).
// //                                            //To avoid that, we set the prototype.constructor to Employee (child).

// const x1 = new Employee("kara","Anna");
// console.log(x1);

// // Employee.prototype.greet = function() {
// //   console.info("                   Employee.prototype.greet              ");
// //   if (this.canTalk) {
// //     console.log('Hi, I am 2' + this.name + ', the ' + this.title);
// //   }
// // };

// // const Customer = function(name) {
// //   Person.call(this, name);
// // };

// // Customer.prototype = Object.create(Person.prototype);
// // Customer.prototype.constructor = Customer; //If you don't set Object.prototype.constructor to Customer,
// // //                                            //it will take prototype.constructor of Person (parent).
// // //                                            //To avoid that, we set the prototype.constructor to Customer (child).

// // const Mime = function(name) {
// //   Person.call(this, name);
// //   this.canTalk = false;
// // };

// // Mime.prototype = Object.create(Person.prototype);
// // Mime.prototype.constructor = Mime; //If you don't set Object.prototype.constructor to Mime,
// // //                                    //it will take prototype.constructor of Person (parent).
// //                                    //To avoid that, we set the prototype.constructor to Mime (child).

// // const bob = new Employee('Bob', 'Builder');
// // const joe = new Customer('Joe');
// // const rg = new Employee('Red Green', 'Handyman');
// // const mike = new Customer('Mike');
// // const mime = new Mime('Mime');

// // bob.greet();
// // // Hi, I am Bob, the Builder

// // joe.greet();
// // // Hi, I am Joe

// // rg.greet();
// // // Hi, I am Red Green, the Handyman

// // mike.greet();
// // // Hi, I am Mike

// // mime.greet();
//--------------------------------------------------------------------------------------

// const F = function () {
//    this.a = 1;
//    this.b = 2;
// };

// const o = new F();

// F.prototype.b = 3;
// F.prototype.c = 4;

// console.log(o.a);

// console.log(o.b);

// console.log(o.c);

// console.log(o.d);

//--------------------------------------------------------------------------------------

// function doSomething() {}
// console.log( doSomething.prototype );
// //  It does not matter how you declare the function; a
// //  function in JavaScript will always have a default
// //  prototype property — with one exception: an arrow
// //  function doesn't have a default prototype property:
// const doSomethingFromArrowFunction = () => {};
// console.log(doSomethingFromArrowFunction.prototype);

//-------------------------------------------------------------------------------------
// function doSomething() {}
// doSomething.prototype.foo = 'bar'; // add a property onto the prototype
// const doSomeInstancing = new doSomething();
//  // add a property onto the object
// console.log(doSomeInstancing.foo);
//---------------------------------------------------------------------------------------
// const o = { a: 1 };

// const b = ['yo', 'whadup', '?'];

// function f() {
//   return 2;
// }

// const p = { b: 2, __proto__: b };

// console.log(p[0]);

//--------------------------------------------------------------------------------------
// 'use strict';

// class Polygon {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }

// class Square extends Polygon {
//   constructor(sideLength) {
//     super(sideLength, sideLength);
//   }

//   get area() {
//     return this.height * this.width;
//   }

//   set sideLength(newLength) {
//     this.height = newLength;
//     this.width = newLength;
//   }
// }

// const square = new Square(2);

//----------------------------------------------------------------------------------------------
// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   static displayName = "Point";

//   static distance(a, b) {
//     const dx = a.x - b.x;
//     const dy = a.y - b.y;
//     return Math.hypot(dx, dy);
//   }
// }

// const p1 = new Point(5, 5);

// const p2 = new Point(10, 10);

// p1.displayName; // undefined
// p1.distance;    // undefined
// p2.displayName; // undefined
// p2.distance;    // undefined

// console.log(Point.displayName);      // "Point"
// console.log(Point.distance(p1, p2)); // 7.0710678118654755

//------------------------------------------------------------------------------------
// class Rectangle {
//   #height = 10;
//   #width;
//   constructor(height, width) {
//     this.#height = height;
//     this.#width = width;
//   }
// }
// const obj = new Rectangle(5,7);

// console.log(obj.height);
//--------------------------------------------------------------------------------------


// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(`${this.name} makes a noise.`);
//   }
// }

// // class Dog extends Animal {
// //   constructor(name) {
// //     super(name); // call the super class constructor and pass in the name parameter
// //   }
// //   speak() {
// //     console.log(`${this.name} barks.`);
// //   }
// // }

// // let d = new Dog('Mitzie');
// // d.speak(); // Mitzie barks.

// Animal.prototype.speak = function () {
//   console.log(`${this.name} makes a noise.`);
// }

// class Dog extends Animal {
//   age = 25;
//   #age = 20;
//   speak() {
//     console.log(`${this.name} barks. ${this.age}     and   ${this.#age}`);
//   }
// }

// let d1 = new Dog('Mitzie');
// d1.speak(); // Mitzie barks.

// console.log(Object.getOwnPropertyNames(d1));

// For similar methods, the child's method takes precedence over parent's method
//---------------------------------------------------------------------------------------------
// function X(){
//   name  = "Kara"
// }
// function Y(){
//   name  = "Kara"
// }
// const o1 = { a: 1 };
// const o2 = { 
//   *[Symbol('foo')](){
//     yield 5;
//     yield 6;
//   } 
// };

// const obj = Object.assign({}, o1, o2);
// console.log(obj === o2);
// console.log(obj === o1);
// console.log(obj[Symbol("foo")] == o2[Symbol("foo")]); // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
// Object.getOwnPropertySymbols(obj); // [Symbol(foo)]

//----------------------------------------------------------------------------------------------


// const targe = Object.defineProperty({}, 'foo', {
//   value: 1,
//   writable: false
// }); // target.foo is a read-only property

// // Object.assign(target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });
// const target = {...targe, ...{ bar: 2 }, ...{ foo2: 3, foo:8, foo3: 3 }, ...{ baz: 4 }}
// // TypeError: "foo" is read-only
// // The Exception is thrown when assigning target.foo

// console.log(target.bar);  // 2, the first source was copied successfully.
// console.log(target.foo2); // 3, the first property of the second source was copied successfully.
// console.log(target.foo);  // 1, exception is thrown here.
// console.log(target.foo3); // undefined, assign method has finished, foo3 will not be copied.
// console.log(target.baz);  // undefined, the third source will not be copied either.

//-----------------------------------------------------------------------------------------------


// const obj = {
//   foo: 1,
//   get bar() {
//     return 2;
//   }
// };

// let copy = Object.assign({}, obj);
// console.log(copy);
// // { foo: 1, bar: 2 }
// // The value of copy.bar is obj.bar's getter's return value.

// // This is an assign function that copies full descriptors
// function completeAssign(target, ...sources) {
//   sources.forEach(source => {
//     let descriptors = Object.keys(source).reduce((descriptors, key) => {
//       descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
//       return descriptors;
//     }, {});

//     // By default, Object.assign copies enumerable Symbols, too
//     Object.getOwnPropertySymbols(source).forEach(sym => {
//       let descriptor = Object.getOwnPropertyDescriptor(source, sym);
//       if (descriptor.enumerable) {
//         descriptors[sym] = descriptor;
//       }
//     });
//     Object.defineProperties(target, descriptors);
//   });
//   return target;
// }

// copy = completeAssign({}, obj);
// console.log(copy);
// // { foo:1, get bar() { return 2 } }
//const dd = (this) => {



// const SomeObj = {
//   som : 5,
//   *[Symbol.iterator] () {
//     yield 'a';
//     yield 'b';
//   }
// }

// const FuncConstractor = function(){
//   this.fun = 6;
//   function* Symbol (){
//     yield '1';
//     yield '2';
//   }
// }
// SomeObj.prototype = Object.create(FuncConstractor)

// console.log(Array.from(SomeObj));
// console.log(SomeObj.fun);

//---------------------------------------------------------------------------------------------
// const someString = "hi";
// console.log(...someString)
// console.log(typeof someString[Symbol.iterator]); // "function"
// console.log([...someString])
// const iterator = someString[Symbol.iterator]();
// console.log(iterator + ""); // "[object String Iterator]"

// console.log(iterator.next()); // { value: "h", done: false }
// console.log(iterator.next()); // { value: "i", done: false }
// console.log(iterator.next()); // { value: undefined, done: true }
// console.log([...someString])

//----------------------------------------------------------------------------------------------
// let isLoading = true;

// fetch(myRequest).then(function(response) {
//     const contentType = response.headers.get("content-type");
//     if(contentType && contentType.includes("application/json")) {
//       return response.json();
//     }
//     throw new TypeError("Oops, we haven't got JSON!");
//   })
//   .then(function(json) { /* process your JSON further */ })
//   .catch(function(error) { console.error(error); /* this line can also throw, e.g. when console = {} */ })
//   .finally(function() { isLoading = false; });

//---------------------------------------------------------
// this will be counted as if the iterable passed is empty, so it gets fulfilled
// const p = Promise.all([1,2,3]);
// // this will be counted as if the iterable passed contains only the resolved promise with value "444", so it gets fulfilled
// const p2 = Promise.all([1,2,3, Promise.resolve(444)]);
// // this will be counted as if the iterable passed contains only the rejected promise with value "555", so it gets rejected
// const p3 = Promise.all([1,2,3, Promise.reject(555)]);

// // using setTimeout we can execute code after the stack is empty
// setTimeout(function() {
//     console.log(p);
//     console.log(p2);
//     console.log(p3);
// });

//--------------------------------------------------------------------------

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('one'), 1000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('two'), 2000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('three'), 3000);
// });
// const p4 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('four'), 4000);
// });
// const p5 =new Promise((resolve, reject) => {
//   reject(new Error('reject'));
// });

// // Using .catch:
// Promise.all([p1, p2, p3, p4, p5])
//     .then(values => {
//       console.log(values);
//      }).catch(error => {
//         console.error(error.message)
// });
//--------------------------------------------------------------
// const x = {
//   name: "Kara"
// }
// const y1 = Object.create(x);
// const y4 = {};
// // y4 = new x();
// const y3 = Object.create(x,{
//   big:{
//     value : "Hasmik"
//   }
// });
// const y2 = x;

// console.log(x === y1);
// console.log(y1 === y2);
// console.log(y2 === x);
// console.log(y3 === x);

// x.name = "Anna";
// y1.name = "Lilit";
// y2.name = "Karine";
// console.log(x.name, y1.name, y2.name);
