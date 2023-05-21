document.getElementById("rzp-button1").onclick = async function (e) {
        e.preventDefault();

        let response = await fetch("http://localhost:8181/payment/order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: 999,
          }),
        });

        let orderData = await response.json();
        var options = {
          key: "rzp_test_3wn14O7nshGgaf",
          amount: "999",
          currency: "INR",
          order_id: orderData.order.id,
        };

        var rzp1 = new Razorpay(options);
        rzp1.open();
      };
 

    /////////////////// map //////

let map;
async function initMap() {
  const position = { lat: 28.5355, lng: 77.3910 };
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 14,
    center: position,
    mapId: "AIzaSyB_IwtnLGi18SkchnnI4GLsrGCuSEgqJ_U",
  });


  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();
