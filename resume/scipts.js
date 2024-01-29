getVisitorCount ();
const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://upcrf2zcy5j5euao4np3ntpvhe0bgqpz.lambda-url.us-east-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = `👀 Views: ${data}`;
}
updateCounter();
