// ****************************************
// ** 関数型プログラミング - データの変換
// ****************************************

'use strict';

// オブジェクトから配列への変換
const schools = {
    Yorktown: 10,
    "Washington & Liberty": 2,
    Wakefield: 5
};

const schoolArray = Object.keys(schools).map(key => ({
    name: key,
    wins: schools[key]
}));

console.log(schoolArray);

// 配列を単一の値に変換
const ages = [21,18,42,40,64,63,34];
const maxAge = ages.reduce((max,age)=>{
    console.log(`${age} > ${max} = ${age > max}`);
    if(age > max) {
        return age;
    } else {
        return max;
    }
},0);
console.log("maxAge", maxAge);

const maxAge2 = ages.reduce((max,age) => age > max ? age : max , 0);
console.log("maxAge2",maxAge2);

const colors = [
    {
        id: "wekare",
        title: "red red",
        rating: 3
    },
    {
        id: "jbwsof",
        title: "grizzly grey",
        rating: 5
    },
    {
        id: "ryhbhsl",
        title: "banana",
        rating: 1
    }
];

// Array.reduce()は配列からオブジェクトへの変換にも使える
const hashColors = colors.reduce((hash, {id, title, rating})=>{
    hash[id] = {title, rating};
    return hash;
},{});
console.log(hashColors);

// Array.recduce()を使って、配列をまったく異なる配列に変換する
{
    const colors = ["red", "red", "green", "blue", "green"];
    const uniqueColors = colors.reduce((unique,color) => unique.indexOf(color) !== -1 ? unique : [...unique,color] , []);
    console.log(uniqueColors);

}