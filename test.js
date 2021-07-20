

const num = 20000

function separate (num) {
  // return num !== null ? num.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,') : null; 
  return num.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,') ;
};

console.log(separate(num));