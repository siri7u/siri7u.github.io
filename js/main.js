var renderer, scene, camera, composer, circle, skelet, particle;

window.onload = function () {
  init();
  animate();
}

function init() {
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });
  renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.autoClear = false;
  renderer.setClearColor(0x000000, 0.0);
  document.getElementById('canvas').appendChild(renderer.domElement);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 1500;
  camera.position.x = -1000;
  camera.position.y = -1000;
  scene.add(camera);

  circle = new THREE.Object3D();
  skelet = new THREE.Object3D();
  particle = new THREE.Object3D();

  scene.add(circle);
  scene.add(skelet);
  scene.add(particle);

  var geometry = new THREE.TetrahedronGeometry(2, 0);
  var geom = new THREE.IcosahedronGeometry(7, 1);
  var geom2 = new THREE.IcosahedronGeometry(15, 1);

  var material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    shading: THREE.FlatShading
  });

  for (var i = 0; i < 3000; i++) {
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
    mesh.position.multiplyScalar(90 + (Math.random() * 1500));
    mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
    particle.add(mesh);
  }

  var mat = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    shading: THREE.FlatShading
  });

  var mat2 = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    wireframe: true,
    side: THREE.DoubleSide

  });

  var planet = new THREE.Mesh(geom, mat);
  planet.scale.x = planet.scale.y = planet.scale.z = 16;
  circle.add(planet);

  var planet2 = new THREE.Mesh(geom2, mat2);
  planet2.scale.x = planet2.scale.y = planet2.scale.z = 10;
  skelet.add(planet2);

  var ambientLight = new THREE.AmbientLight(0x999999);
  scene.add(ambientLight);

  var lights = [];
  lights[0] = new THREE.DirectionalLight(new THREE.Color('black'), 1);
  lights[0].position.set(1, 0, 0);
  lights[1] = new THREE.DirectionalLight(new THREE.Color('black'), 1);
  lights[1].position.set(0.75, 1, 0.5);
  lights[2] = new THREE.DirectionalLight(new THREE.Color('white'), 1);
  lights[2].position.set(-0.75, -1, 0.5);
  scene.add(lights[0]);
  scene.add(lights[1]);
  scene.add(lights[2]);


  window.addEventListener('resize', onWindowResize, false);

};

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

var firstFrame = true;

function animate() {
  TWEEN.update();
  requestAnimationFrame(animate);

  particle.rotation.x += 0.0000;
  particle.rotation.y -= 0.0040;

  circle.rotation.x -= 0.0020;
  circle.rotation.y -= 0.0030;

  skelet.rotation.x -= 0.0010;
  skelet.rotation.y += 0.0020;

  renderer.clear();
  renderer.render(scene, camera);

  if (firstFrame) {
    console.log("First frame");
    firstFrame = false;
    animationStart()
  }
};


function animationStart() {
  let animationLength = 1000
  new TWEEN.Tween(camera.position).to({
    x: 10,
    y: 5,
    z: 600 - 200
  }, animationLength).easing(TWEEN.Easing.Quintic.InOut).start()
  setTimeout(function () {
    console.log('animation ended')
  }, animationLength)
}

function afficherPage() {
  document.querySelector('.page').remove()
  document.querySelector('.main').classList.remove('hidden')
}

function bye() {

  let animationLength = 2300
  new TWEEN.Tween(camera.position).to({
    x: 0,
    y: 2500,
    z: camera.position.z - 200
  }, 1200).easing(TWEEN.Easing.Exponential.In).start();
  setTimeout(function(){
    console.log('')
    afficherPage()
  }, animationLength)
}


//TWEEN.Easing.Elastic.Out