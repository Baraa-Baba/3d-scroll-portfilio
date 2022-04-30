import './src/style.css'
import './output.css'
import * as THREE from 'three'

const scence = new THREE.Scene()

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(30)

renderer.render(scence, camera)


const ambentLight = new THREE.AmbientLight(0xfffff)
scence.add(ambentLight)


function addstar() {
  const goematry = new THREE.SphereGeometry(0.25, 24, 24)
  const matriel = new THREE.MeshBasicMaterial({ color: 0xffffff })
  const star = new THREE.Mesh(goematry, matriel)

  const x = THREE.MathUtils.randFloatSpread(1000)
  const y = THREE.MathUtils.randFloatSpread(100)
  const z = THREE.MathUtils.randFloatSpread(200)
  star.position.set(x, y, z)
  scence.add(star)
}
const Baraatexture = new THREE.TextureLoader().load('https://i.ibb.co/3YS0Y3j/profile.jpg')

const baraa = new THREE.Mesh(
  new THREE.BoxGeometry(9, 9, 9),
  new THREE.MeshBasicMaterial({ map: Baraatexture })
)
baraa.position.x = 20
baraa.position.y = 0
scence.add(baraa)

Array(2000).fill().forEach(addstar)

var skillcubelist = []
function createskillcube(imgurl, shape, x, y, z) {
  const textureLoader = new THREE.TextureLoader()
  textureLoader.crossOrigin = "Anonymous"
  const myTexture = textureLoader.load(imgurl)
  const skillcube = new THREE.Mesh(
    shape,
    new THREE.MeshBasicMaterial({ map: myTexture })
  )
  skillcubelist = [...skillcubelist, skillcube]
  skillcube.position.x = x + skillY * 3
  skillcube.position.y = y - skillY
  skillcube.position.z = z
  scence.add(skillcubelist[skillcubelist.length - 1])
}
var skillY = 20
createskillcube('https://i.ibb.co/tPVDQ4T/tailwindcssicon.png', new THREE.CylinderGeometry(3, 3, 3), 100, 0, 0)
createskillcube('https://i.ibb.co/fMYyjnT/html-icon.png', new THREE.BoxGeometry(4, 4, 4), 140, 14, 0)
createskillcube('https://i.ibb.co/68ybrXD/next-icon.png', new THREE.BoxGeometry(4, 4, 4), 150, 0, 0)
createskillcube('https://i.ibb.co/Bt3QyMp/svelte-icon.png', new THREE.BoxGeometry(4, 4, 4), 120, 10, 0)
createskillcube('https://i.ibb.co/WkxYJ0S/github-icon.png', new THREE.BoxGeometry(4, 4, 4), 130, 0, 0)
createskillcube('https://i.ibb.co/r5LRCmY/js-icon.png', new THREE.BoxGeometry(4, 4, 4), 100, 15, 0)
createskillcube('https://i.ibb.co/THPh4NV/react-icon.png', new THREE.BoxGeometry(6, 6, 6), 130, 15, 0)
createskillcube('https://i.ibb.co/JzV3NgH/css-icon.png', new THREE.BoxGeometry(4, 4, 4), 110, -5, 0)


const spaceTexture = new THREE.TextureLoader().load('https://i.ibb.co/X3Vj5G7/space.jpg')
scence.background = spaceTexture;
function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  baraa.rotation.x += 0.05
  baraa.rotation.z += 0.005
  baraa.rotation.y += 0.01
  scence.position.x = t * 0.1
  console.log(t)

  for (var i = 0; i < skillcubelist.length; i++) {
    skillcubelist[i].rotation.x -= 0.1
    skillcubelist[i].rotation.z -= 0.09
    skillcubelist[i].rotation.y -= 0.1
  }
}
document.body.onscroll = moveCamera
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {

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



