import './src/style.css'
import './output.css'
import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import './assets/fbx/textures/Lowpoly_Laptop_1.jpg'
import './assets/fbx/textures/Lowpoly_Laptop_2.jpg'
import './assets/fbx/textures/Lowpoly_Laptop_Nor_2.jpg'
import './assets/fbx/textures/Lowpoly_Laptop_Nor_1.jpg'
var contact = document.getElementById('contact')
contact.addEventListener('click', () => {
  var contactplace = document.getElementById('contact-me')
  contactplace.scrollIntoView({ behavior: "smooth" })
})



const scence = new THREE.Scene()

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(30)

renderer.render(scence, camera)




function addstar() {
  const goematry = new THREE.SphereGeometry(0.25, 24, 24)
  const matriel = new THREE.MeshBasicMaterial({ color: 0xffffff })
  const star = new THREE.Mesh(goematry, matriel)

  const x = THREE.MathUtils.randFloatSpread(200)
  const y = THREE.MathUtils.randFloatSpread(1000)
  const z = THREE.MathUtils.randFloatSpread(200)
  star.position.set(x, y, z)
  scence.add(star)
}
const Baraatexture = new THREE.TextureLoader().load('https://i.ibb.co/3YS0Y3j/profile.jpg')

const baraa = new THREE.Mesh(
  new THREE.BoxGeometry(9, 9, 9),
  new THREE.MeshStandardMaterial({ map: Baraatexture })
)
var baraaX
var baraaY
if (innerWidth > 900) {
  baraaX = 20
  baraaY = 0
} else {
  baraaX = 0
  baraaY = -20
}

const baraalight = new THREE.PointLight(0xfffffff, 5, 300)
baraalight.position.set(10, 10, 5)
scence.add(baraalight)

baraa.position.x = 20
baraa.position.y = 0
scence.add(baraa)




Array(2000).fill().forEach(addstar)


/*

const fbxLoader = new FBXLoader()
fbxLoader.load(
  'assets/fbx/laptopp.fbx',
  (object) => {
    object.traverse(function (child) {
      if (child.isMesh) {

      }
    })
    object.scale.set(.05, .05, .05)
    object.position.y = -80
    object.position.x = -25
    const light = new THREE.PointLight(0xff000, 1000, 100)
    light.position.set(-40, -70, 5)
    scence.add(light)
    setInterval(() => {
      object.rotation.y -= 0.05
      renderer.render(scence, camera)
    }, 100)
    scence.add(object)
  },
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
  },
  (error) => {
    console.log(error)
  }
)


const light2 = new THREE.PointLight(0xfffff, 1000, 100)
light2.position.set(-30, -70, 5)
scence.add(light2)
*/

const light = new THREE.PointLight(0xfffff, 10, 100)
light.position.set(20, -210, 0)
scence.add(light)

var loader = new THREE.TextureLoader();
loader.load('https://i.ibb.co/tPVDQ4T/tailwindcssicon.png', function (texture) {

  var geometry = new THREE.SphereGeometry(200, 20, 20);

  var material = new THREE.MeshBasicMaterial({ map: texture, overdraw: 0.5 });
  var mesh = new THREE.Mesh(geometry, material);
  mesh.position.y = -200
  mesh.position.x = 0
  group.add(mesh);

});

var skillcubelist = []
function createskillcube(imgurl, shape, x, y, z) {
  const textureLoader = new THREE.TextureLoader()
  textureLoader.crossOrigin = "Anonymous"
  const myTexture = textureLoader.load(imgurl)
  var material = new THREE.MeshStandardMaterial({ map: myTexture })
  material.side = THREE.DoubleSide
  const skillcube = new THREE.Mesh(
    shape,
    material
  )
  const light = new THREE.PointLight(0xffffff, 8, 40)
  light.position.set(x - 45, y + 25, z)
  scence.add(light)
  skillcubelist = [...skillcubelist, skillcube]
  skillcube.position.x = x
  skillcube.position.y = y
  skillcube.position.z = z
  scence.add(skillcubelist[skillcubelist.length - 1])
}
if (innerWidth < 800) {
  createskillcube('https://i.ibb.co/tPVDQ4T/tailwindcssicon.png',
    new THREE.CylinderGeometry(3, 3, 3), 0, -110, 0)
  createskillcube('https://i.ibb.co/fMYyjnT/html-icon.png',
    new THREE.BoxGeometry(4, 4, 4), 70, -120, 0)
  createskillcube('https://i.ibb.co/68ybrXD/next-icon.png',
    new THREE.BoxGeometry(4, 4, 4), 10, -120, 0)
  createskillcube('https://i.ibb.co/Bt3QyMp/svelte-icon.png',
    new THREE.BoxGeometry(4, 4, 4), -10, -130, 0)
  createskillcube('https://i.ibb.co/WkxYJ0S/github-icon.png',
    new THREE.BoxGeometry(4, 4, 4), 0, -130, 0)
  createskillcube('https://i.ibb.co/r5LRCmY/js-icon.png',
    new THREE.BoxGeometry(4, 4, 4), 10, -130, 0)
  createskillcube('https://i.ibb.co/THPh4NV/react-icon.png',
    new THREE.BoxGeometry(4, 4, 4), -10, -120, 0)
  createskillcube('https://i.ibb.co/JzV3NgH/css-icon.png',
    new THREE.BoxGeometry(4, 4, 4), 10, -110, 0)

} else {
  createskillcube('https://i.ibb.co/tPVDQ4T/tailwindcssicon.png',
    new THREE.CylinderGeometry(3, 3, 3), -20, -140, 0)
  createskillcube('https://i.ibb.co/fMYyjnT/html-icon.png',
    new THREE.BoxGeometry(4, 4, 4), -40, -150, 0)
  createskillcube('https://i.ibb.co/68ybrXD/next-icon.png',
    new THREE.BoxGeometry(4, 4, 4), 30, -150, 0)
  createskillcube('https://i.ibb.co/Bt3QyMp/svelte-icon.png'
    , new THREE.BoxGeometry(4, 4, 4), -30, -130, 0)
  createskillcube('https://i.ibb.co/WkxYJ0S/github-icon.png',
    new THREE.BoxGeometry(4, 4, 4), 0, -130, 0)
  createskillcube('https://i.ibb.co/r5LRCmY/js-icon.png',
    new THREE.BoxGeometry(4, 4, 4), -10, -160, 0)
  createskillcube('https://i.ibb.co/THPh4NV/react-icon.png',
    new THREE.BoxGeometry(4, 4, 4), 10, -160, 0)
  createskillcube('https://i.ibb.co/JzV3NgH/css-icon.png',
    new THREE.BoxGeometry(4, 4, 4), 10, -135, 0)

}

const spaceTexture = new THREE.TextureLoader().load('https://i.ibb.co/X3Vj5G7/space.jpg')
scence.background = spaceTexture;


var projectlist = []
var projectY = 0
function createsproject() {
  const textureLoader = new THREE.TextureLoader()
  textureLoader.crossOrigin = "Anonymous"
  const myTexture = textureLoader.load('https://i.ibb.co/JzV3NgH/css-icon.png')
  const project = new THREE.Mesh(
    new THREE.BoxGeometry(100, 30, 2),
    new THREE.MeshBasicMaterial({ map: myTexture })
  )
  projectlist = [...projectlist, project]
  project.position.x = 300 + projectY * 3
  project.position.y = -5 - projectY
  project.position.z = 1
  scence.add(projectlist[projectlist.length - 1])
}
createsproject()
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  baraa.rotation.x += 0.05
  baraa.rotation.z += 0.005
  baraa.rotation.y += 0.01
  scence.position.y = t * -0.1

  for (var i = 0; i < skillcubelist.length; i++) {
    skillcubelist[i].rotation.x -= 0.1
    skillcubelist[i].rotation.z -= 0.09
    skillcubelist[i].rotation.y -= 0.1
  }
}
document.body.onscroll = moveCamera
var Ypos
window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
  if (innerWidth > 900) {
    baraa.position.x = 20
    baraa.position.y = 0
  } else {
    baraa.position.x = 0
    baraa.position.y = -20
  }
  if (innerWidth < 800) {
    skillcubelist[0].position.y = -110
    skillcubelist[1].position.y = -120
    skillcubelist[2].position.y = -120
    skillcubelist[3].position.y = -130
    skillcubelist[4].position.y = -130
    skillcubelist[5].position.y = -130
    skillcubelist[6].position.y = -120
    skillcubelist[7].position.y = -110
    skillcubelist[0].position.x = 70
    skillcubelist[1].position.x = 0
    skillcubelist[2].position.x = 10
    skillcubelist[3].position.x = -10
    skillcubelist[4].position.x = 0
    skillcubelist[5].position.x = 10
    skillcubelist[6].position.x = -10
    skillcubelist[7].position.x = 10
  } else {
    skillcubelist[0].position.y = -140
    skillcubelist[1].position.y = -150
    skillcubelist[2].position.y = -150
    skillcubelist[3].position.y = -130
    skillcubelist[4].position.y = -130
    skillcubelist[5].position.y = -160
    skillcubelist[6].position.y = -160
    skillcubelist[7].position.y = -135
    skillcubelist[0].position.x = -20
    skillcubelist[1].position.x = -40
    skillcubelist[2].position.x = 30
    skillcubelist[3].position.x = -30
    skillcubelist[4].position.x = 0
    skillcubelist[5].position.x = -10
    skillcubelist[6].position.x = 10
    skillcubelist[7].position.x = 10
  }
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}
const axesHelper = new THREE.AxesHelper(5);
scence.add(axesHelper);
function animate() {
  requestAnimationFrame(animate)
  onWindowResize()

  baraa.rotation.x += 0.005
  for (var i = 0; i < skillcubelist.length; i++) {
    skillcubelist[i].rotation.x += 0.005
    skillcubelist[i].rotation.y += 0.01
  }
  renderer.render(scence, camera)
}
animate()
var i = 0
var text = ['frontend developer', 'blogger', 'contributer']
var typing = ''
var typingfinished = false
var k = 0
const int = setInterval(() => {
  if (i < text[k].length) {
    typing += text[k][i]
    document.getElementById('something').innerText = typing
    i++
  }
  else {
    typing = ''
    i = 0
    if (k != text.length - 1) {
      k++
    } else {
      k = 0
    }
  }
}, 350)



