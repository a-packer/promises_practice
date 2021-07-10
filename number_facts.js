
let base_url = 'http://numbersapi.com/'
let fav_num = 5

// 1.
axios
    .get(`${base_url}${fav_num}/math?json`)
    .then(res => {
        console.log(res)
    })

// 2.
let nums = '1,2,3,4,5'
axios
    .get(`${base_url}${nums}/math?json`)
    .then(res => {
        console.log(res.data)
    })

// 3.
let fourPromises = [];

for (let i = 1; i < 5; i++) {
  fourPromises.push(
    axios.get(`${base_url}${fav_num}/math?json`)
  );
}

Promise.all(fourPromises)
  .then(numArr => (
    numArr.forEach(num_res => console.log(num_res.data.text))
  ))
  .catch(err => console.log(err));
