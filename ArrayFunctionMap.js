const data = [
    {
        name: 'Tony Stark', age: 32, languages: {
            speking: ['Gujarati', 'Hindi', 'English'],
            programming: ['JavaScript', 'Python', 'C++']
        }
    },
    {
        name: 'Steve Rogers', age: 132, languages: {
            speking: ['Gujarati', 'Hindi', 'English'],
            programming: ['JavaScript', 'Java', 'C++']
        }
    },
    {
        name: 'Thor', age: 1500, languages: {
            speking: ['Asgardian', 'Hindi', 'English'],
            programming: []
        }
    },
    {
        name: 'Peter Parker', age: 23, languages: {
            speking: ['Gujarati', 'Hindi', 'English'],
            programming: ['JavaScript', 'Java', 'Python']
        }
    }
];

const reformed = JSON.parse(JSON.stringify(data.map(d => {
    d.languages.programming.forEach(lang => d.languages.speking.push(lang));
    delete d.languages.programming;
    return d;
})));

reformed[0].name = 'Ttony'

console.log(reformed[0]);
console.log(data);