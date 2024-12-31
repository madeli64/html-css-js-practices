// Select all layer divs and buttons
const layers = document.querySelectorAll(".top div");
const buttons = document.querySelectorAll(".bottom button");
const v_volume = document.getElementById("v-volume");
const h_volume = document.getElementById("h-volume");
const top = document.querySelector(".top");

h_volume.addEventListener("input", function() {
    top.style.perspectiveOrigin = `${h_volume.value}% ${v_volume.value}%`;
});

v_volume.addEventListener("input", function() {
    top.style.perspectiveOrigin = `${h_volume.value}% ${v_volume.value}%`;
});

// position order [back, middle, front]
let queue = Array.from(layers);

// Add click event listeners to each layer to move it to the front
queue.forEach(layer => {
    layer.addEventListener("click", moveLayerToFront);
});

// Add click event listeners to each button to bring the corresponding layer to the front
buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
    while (queue.indexOf(layers[index]) !== 2) {
        rotateLayers();
    }
    });
});

// Function to move the clicked layer to the front
function moveLayerToFront() {
    // Set the active layer
    while (queue.indexOf(this) !== 2) {
        rotateLayers();
    }
}

// Function to rotate the layers
function rotateLayers() {
    // Move the last element to the front of the queue
    queue.unshift(queue.pop());

    // Update the class names to reflect the new order
    // queue[0].className = "back";
    // queue[1].className = "middle";
    // queue[2].className = "front";

    queue[0].style.transform = "translateZ(-100px)";
    queue[0].style.zIndex = "100";
    queue[0].style.fontSize = "small";
    queue[1].style.transform = "translateZ(-50px)";
    queue[1].style.zIndex = "200";
    queue[1].style.fontSize = "medium";
    queue[2].style.transform = "translateZ(0px)";
    queue[2].style.zIndex = "300";
    queue[2].style.fontSize = "large";
}