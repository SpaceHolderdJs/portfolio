import * as THREE from "three";
import gsap from "gsap";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.classList.add("scene");

scene.background = new THREE.Color("rgb(10, 10, 35)");

export const initScene = () => {
  document.body.appendChild(renderer.domElement);
};

const loader = new THREE.TextureLoader();

const height = loader.load("/height.png");

const geometry = new THREE.PlaneBufferGeometry(40, 40, 64, 64);

scene.fog = new THREE.Fog("rgb(10, 10, 35)", 10, 20);

console.log(geometry);

// for (let i = 0; i < geometry.attributes.position.array.length; i++) {
//   if (i % 2 === 0)
//     geometry.attributes.position.array[i] += Math.random() * 0.4;
// }

const material = new THREE.MeshStandardMaterial({
  color: "grey",
  displacementMap: height,
  displacementScale: 5,
  wireframe: true,
  wireframeLinewidth: 5.3,
  transparent: true,
  opacity: 0.3,
});

const plane = new THREE.Mesh(geometry, material);
plane.rotation.x = -20;

scene.add(plane);

const l = new THREE.PointLight("white");
l.position.set(0, 55, 0);
scene.add(l);

const pointLight = new THREE.PointLight("white", 7, 7);
pointLight.position.set(0, 0, 0);
scene.add(pointLight);

camera.position.z = 7;

class Repo {
  constructor(repo, orderNumber, currentRepoSetter) {
    this.repo = repo;
    this.orderNumber = orderNumber;
    this.currentRepoSetter = currentRepoSetter;

    this.img = `/assets/${repo.name}.png`;
  }

  initialization(parent) {
    const geo = new THREE.PlaneBufferGeometry(7, 4, 15, 15);
    const material = new THREE.MeshStandardMaterial({
      map: loader.load(this.img),
      metalness: 0.8,
      displacementMap: height,
      displacementScale: Math.random() * 1.5 - Math.random() * 1.5,
    });

    const card = new THREE.Mesh(geo, material);
    card.name = this.name;

    card.clickEventHandler = () => this.currentRepoSetter(this.repo);

    card.position.set(Math.random() * 2 + 4, this.orderNumber * 6.5, -3);

    parent.add(card);
    return this;
  }
}

const cardsParentObj = new THREE.Object3D();
cardsParentObj.visible = false;
cardsParentObj.position.set(0, 3, 0);

scene.add(cardsParentObj);

export const initRepos = (repositories, currentRepoSetter) => {
  cardsParentObj.children.forEach((child) => cardsParentObj.remove(child));

  repositories.forEach((repo, i) =>
    new Repo(repo, i, currentRepoSetter).initialization(cardsParentObj)
  );
};

//listeners

let y = 0;
let position = 0;

const mouse = new THREE.Vector2();

window.addEventListener("mousemove", (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
});

window.addEventListener("wheel", (e) => {
  y = e.deltaY * 0.0009;
});

window.addEventListener("scroll", (e) => {
  camera.position.z = 5 + window.scrollY * 0.0005;
});

window.addEventListener("mousemove", (e) => {
  plane.rotation.x = -20 + e.pageX * 0.00005;

  pointLight.position.set(
    1 + (e.pageX - window.innerWidth / 2) * 0.0055,
    1 + (window.innerWidth / 2 - e.pageY) * 0.005,
    -1.5
  );

  plane.material.displacementScale = (e.pageX - window.innerWidth / 2) * 0.0075;
});

//raycaster click

window.addEventListener("click", () => {
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(cardsParentObj.children);

  intersects[0] && intersects[0].object.clickEventHandler();
});

export const tabSwitcherHandler = (tab) => {
  if (tab === "portfolio") {
    cardsParentObj.visible = true;
    gsap.to(plane.position, { z: -3 });
  } else {
    cardsParentObj.visible = false;
    gsap.to(plane.position, { z: 3 });
  }
};

const raycaster = new THREE.Raycaster();

const animate = function () {
  requestAnimationFrame(animate);

  //raycaster
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(cardsParentObj.children);

  intersects.forEach((intersect) => {
    gsap.to(intersect.object.scale, { x: 1.2, y: 1.2 });
    gsap.to(intersect.object.rotation, { y: -0.3 });
    intersect.object.material.displacementScale = 0;
  });

  cardsParentObj.children
    .filter(
      (obj) =>
        !intersects.find((intersect) => intersect.object.uuid === obj.uuid)
    )
    .forEach((obj) => {
      gsap.to(obj.scale, { x: 1, y: 1 });
      gsap.to(obj.rotation, { y: 0 });
    });

  //scrolls
  position += y;
  y *= 0.9;
  camera.position.y = position;
  pointLight.position.y = position;

  //   plane.material.displacementScale += 0.001;

  plane.rotation.z += 0.002;
  renderer.render(scene, camera);
};

animate();
