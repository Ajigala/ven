function changeBackground(imageUrl) {
  const heroElement = document.getElementById("hero");
  heroElement.style.backgroundImage = `url(${imageUrl})`;
}

//sea creature
window.onload = function () {
  function createImageSwitcher(imageId, images, interval) {
    let currentIndex = 0;
    const imageElement = document.getElementById(imageId);

    function changeImage() {
      currentIndex = (currentIndex + 1) % images.length;
      imageElement.src = images[currentIndex];
    }

    setInterval(changeImage, interval);
  }

  // Image sets for different containers
  const images1 = [
    "./Images/creatures/clamanos-1.png",
    "./Images/creatures/clamanos-2.png",
  ];
  const images2 = [
    "./Images/creatures/blue-jam-1.png",
    "./Images/creatures/blue-jam-2.png",
  ];
  const images3 = [
    "./Images/creatures/seahorse-1.png",
    "./Images/creatures/seahorse-2.png",
  ];
  const images4 = [
    "./Images/creatures/slug-1.png",
    "./Images/creatures/slug-2.png",
  ];
  const images5 = [
    "./Images/creatures/coral-1.png",
    "./Images/creatures/coral-2.png",
  ];
  const images6 = [
    "./Images/creatures/f2-cat-1.png",
    "./Images/creatures/f2-cat-2.png",
  ];
  const images7 = [
    "./Images/creatures/peacock-fish-1.png",
    "./Images/creatures/peacock-fish-2.png",
  ];

  // Create image switchers for each container
  createImageSwitcher("image", images1, 5000);
  createImageSwitcher("image2", images2, 6000);
  createImageSwitcher("image3", images3, 4000);
  createImageSwitcher("image4", images4, 6000);
  createImageSwitcher("image5", images5, 4000);
  createImageSwitcher("image6", images6, 4000);
  createImageSwitcher("image7", images7, 4000);
};