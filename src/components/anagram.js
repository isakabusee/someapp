// const findAnagram = (r, anothr) => {
//     for(let i = 0; i <r.length; i++){
//         if(anothr.includes(r[i]) === true) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(findAnagram("dell","edll"));

const greet = () => {
    var msg = ['Hello', this.name, 'welcome to ', this.location].join(' ');
    console.log(msg);
  };
  
  const person = { name: 'Jane Doe', location: 'Springfield' };
  greet.call(this.person);
  