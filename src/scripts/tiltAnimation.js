import VanillaTilt from 'vanilla-tilt';
VanillaTilt.init(this.$refs.refToDiv);

export default function initTiltAnimation() {
  const elements = document.querySelectorAll(".js-tilt");
  VanillaTilt.init(elements);
}
