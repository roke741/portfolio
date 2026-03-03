import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import SplineLoader from '@splinetool/loader';

const container = document.getElementById('skills-three-canvas');

if (container) {
  const camera = new THREE.PerspectiveCamera(45, 1, 70, 100000);
  camera.position.set(0, 0, 1000);
  camera.quaternion.setFromEuler(new THREE.Euler(0, 0, 0));

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#000000');

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.setClearAlpha(0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.domElement.style.width = '100%';
  renderer.domElement.style.height = '100%';
  renderer.domElement.style.display = 'block';
  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.125;

  const setSize = () => {
    const width = container.clientWidth || 1;
    const height = container.clientHeight || 1;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  };

  setSize();

  const loader = new SplineLoader();
  loader.load('https://prod.spline.design/MvRCS7fYtIif8uET/scene.splinecode', (splineScene) => {
    scene.add(splineScene);
  });

  const animate = () => {
    controls.update();
    renderer.render(scene, camera);
  };

  renderer.setAnimationLoop(animate);
  window.addEventListener('resize', setSize);
}
