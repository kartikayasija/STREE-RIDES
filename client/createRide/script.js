var cookieValue = localStorage.getItem("cookieName");
console.log(cookieValue);
const createRide=()=>{
  const pickup = document.querySelector("#pickup").value;
  const destination = document.querySelector("#destination").value;
  const date = document.querySelector("#date").value;
  const carNumber = document.querySelector("#carNumber").value;
  const time = document.querySelector("#time").value;
  const charges = document.querySelector("#price").value;
  console.log(pickup,destination,date,carNumber,time,price);
  fetch("https://stree-rides.vercel.app/rides", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${cookieValue}`
    },
    body: JSON.stringify({
      pickup: pickup,
      destination: destination,
      date: date,
      carNumber:carNumber,
      time:time,
      charges:charges
    })
  })
  .then(response => response.json())
  .then(data => {
    if(data.ride){
      alert("Created Successfully")
      window.location.href = "../home/index.html"
    }

  })
  .catch((error) => {
    console.error('Error:', error);
  });
}
