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

const filtered = data.filter(d => d.age < 30); // Shallow Copy
//const filtered = JSON.parse(JSON.stringify(data.filter(d => d.age < 30))); // Deep Copy.

console.log(filtered);
filtered[0].name = 'lll';
filtered[0].languages = [];
console.log(filtered);
console.log(data); // Shallow Copy