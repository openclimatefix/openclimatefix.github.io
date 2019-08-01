import React from "react";
import * as THREE from "three";

import ImprovedNoise from "../../pages/KYLE/ImprovedNoise";

export default class Animation extends React.Component {
  componentDidMount() {
    var mouseX = 0;
    var container;
    var camera, scene, renderer, data, geometry;
    var mesh, texture;
    var worldWidth = 256,
      worldDepth = 512;
    var worldHalfWidth = worldWidth / 2;
    var worldHalfDepth = worldDepth / 2;
    init();
    animate();
    function init() {
      container = document.getElementById("animation-container");
      camera = new THREE.PerspectiveCamera(
        90,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      scene = new THREE.Scene();
      scene.background = new THREE.Color(0x2c3a51);
      scene.fog = new THREE.FogExp2(0x2c3a51, 0.003);
      data = generateHeight(worldWidth, worldDepth);
      // camera.position.y =
      //   data[worldHalfWidth + worldHalfDepth * worldWidth] * 10 + 200;
      camera.position.y = 367;
      camera.position.z = 890.2912621359222;
      camera.rotation.x = -1.1128640776699028;
      geometry = new THREE.PlaneBufferGeometry(
        10000,
        20000,
        worldWidth - 1,
        worldDepth - 1
      );
      geometry.rotateX(-Math.PI / 2);
      var vertices = geometry.attributes.position.array;
      for (var i = 0, j = 0, l = vertices.length; i < l; i++, j += 3) {
        vertices[j + 1] = data[i] * 10;
      }
      texture = new THREE.CanvasTexture(
        generateTexture(data, worldWidth, worldDepth)
      );
      mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshBasicMaterial({ map: texture })
      );
      scene.add(mesh);
      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.innerHTML = "";
      container.appendChild(renderer.domElement);
      window.addEventListener("resize", onWindowResize);
      window.addEventListener("scroll", onScroll);
      document.addEventListener("mousemove", mouseMove);
      onScroll();
    }
    function onScroll() {
      const percent = window.pageYOffset / window.innerHeight;
      // console.log(percent);
      // console.log(camera);
      // camera.position.z = percent * 800;
      camera.position.y = percent * 100 + 367;
      console.log(camera.position.y);
      // camera.rotation.z = -percent;
      // camera.rotation.x = -percent;
    }
    function mouseMove(e) {
      mouseX = e.clientX;
    }
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    function generateHeight(width, height) {
      var size = width * height,
        data = new Uint8Array(size),
        perlin = new ImprovedNoise(),
        quality = 1,
        z = Math.random() * 100;
      for (var j = 0; j < 4; j++) {
        for (var i = 0; i < size; i++) {
          var x = i % width,
            y = ~~(i / width);
          data[i] += Math.abs(
            perlin.noise(x / quality, y / quality, z) * quality * 1.1
          );
        }
        quality *= 2.5;
      }
      return data;
    }
    function generateTexture(data, width, height) {
      var canvas, canvasScaled, context, image, imageData, vector3, sun, shade;
      vector3 = new THREE.Vector3(0, 0, 0);
      sun = new THREE.Vector3(1, 1, 1);
      sun.normalize();
      canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      context = canvas.getContext("2d");
      context.fillStyle = "#f0f000";
      context.fillRect(0, 0, width, height);
      image = context.getImageData(0, 0, canvas.width, canvas.height);
      imageData = image.data;
      for (var i = 0, j = 0, l = imageData.length; i < l; i += 4, j++) {
        vector3.x = data[j - 2] - data[j + 2];
        vector3.y = 2;
        vector3.z = data[j - width * 2] - data[j + width * 2];
        vector3.normalize();
        shade = vector3.dot(sun);
        imageData[i] = (10 + shade * 128) * (0.5 + data[j] * 0.02);
        imageData[i + 1] = (32 + shade * 96) * (0.5 + data[j] * 0.03);
        imageData[i + 2] = shade * 96 * (0.5 + data[j] * 0.1);
      }
      context.putImageData(image, 0, 0);
      canvasScaled = document.createElement("canvas");
      canvasScaled.width = width * 4;
      canvasScaled.height = height * 4;
      context = canvasScaled.getContext("2d");
      context.scale(4, 4);
      context.drawImage(canvas, 0, 0);
      image = context.getImageData(
        0,
        0,
        canvasScaled.width,
        canvasScaled.height
      );
      imageData = image.data;
      for (var i = 0, l = imageData.length; i < l; i += 4) {
        var v = ~~(Math.random() * 5);
        imageData[i] += v;
        imageData[i + 1] += v;
        imageData[i + 2] += v;
      }
      context.putImageData(image, 0, 0);
      return canvasScaled;
    }
    function animate() {
      requestAnimationFrame(animate);
      const s = (new Date().getSeconds() * Math.PI) / 4;
      camera.position.x += Math.sin(s) / 5;
      camera.rotation.y +=
        (window.innerWidth / 2 - mouseX) / window.innerWidth / 500;
      render();
    }
    function render() {
      renderer.render(scene, camera);
    }
  }

  render() {
    return (
      <div>
        {/* Render target for Three.js */}
        <div id="animation-container" />
        {/* Gradient overlay. */}
        <div class="cover" />
      </div>
    );
  }
}
