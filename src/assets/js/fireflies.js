const quantity = 15;
const container = document.getElementById("fireflies-container");
for (let i = 0; i < quantity; i++) {
  const div = document.createElement("div");
  div.className = "firefly";
  container.appendChild(div);
}