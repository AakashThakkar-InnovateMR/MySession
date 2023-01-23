const data = {
    name: 'Aakash',
    age: 23,
    languages: {
        speking: ['Gujarati', 'Hindi', 'English'],
        programming: ['JavaScript', 'Java', 'C++']
    }
};

console.log(data);

const data2 = data;

console.log(data2);

data2.name = 'AAKASH';

console.log(data);
console.log(data2);

//const data3 = Object.assign({}, data);
//const data3 = {...data};
const data3 = JSON.parse(JSON.stringify(data));

console.log(data3);

data3.name = 'AAKASHH';
data3.languages.programming[0] = 'JS';

console.log(data3);
console.log(data2);
console.log(data);