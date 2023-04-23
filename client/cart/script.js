var cookieValue = localStorage.getItem("cookieName");
console.log(cookieValue);
const search = () => {
  const pickup = document.getElementById("pickup").value;
  const destination = document.getElementById("destination").value;
  const date = document.getElementById("date").value;
  console.log(pickup, destination, date);

  fetch("https://stree-rides.vercel.app/rides/fetch", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${cookieValue}`,
    },
    body: JSON.stringify({
        pickup: pickup,
        destination:destination,
        date:date,
    })
    })
    
    .then(response => response.json())
    .then(data => {
      data.forEach(ride => {
        document.querySelector(".card-list").innerHTML+=`
        <div class="card1">
        <div class="loc">
            <div style="display: flex; align-items: center; margin-bottom: 50px; margin-left: 20px;">
                <i class="fas fa-map-marker-alt fa-lg"></i>
                <h2>${ride.pickup}</h2>
                <h2 style="position: absolute; right: 50px;">Rs${ride.charges}</h2>
            </div> 
            <div style="display: flex; align-items: center; margin-left: 20px;">
                <i class="fas fa-map-marker-alt fa-lg"></i>
                <h2>${ride.destination}</h1>
                <h2 style="position: absolute; right: 50px;">${ride.time}</h2>
            </div>
            
        </div>
        <br><br>
        <div class="booknow">
            <span><p style="font-size: 1.1rem; font-weight: bolder;"><i class="fa-solid fa-user fa-2xl" style="margin-right: 10px; color: #3a3c6c;"></i>Rohit</p></span> 
        
            <button>Book Now</button>
        </div>

    </div>`
      });
  
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  
};
