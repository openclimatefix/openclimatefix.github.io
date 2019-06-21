import React from "react";
import * as THREE from "three";

import Header from "./Header";
import Photo from "./Photo";
import Title from "./Title";
import Footer from "./Footer";
import Tabs from "./Tabs";
import ImprovedNoise from "./ImprovedNoise";

export default class App extends React.Component {
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
      container = document.getElementById("container");
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
      camera.position.y =
        data[worldHalfWidth + worldHalfDepth * worldWidth] * 10 + 200;
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
      camera.position.z = percent * 800;
      camera.position.y = percent * 150 + 200;
      // camera.rotation.z = -percent;
      camera.rotation.x = -percent;
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
        <div id="container" />
        {/* Gradient overlay. */}
        <div class="cover" />
        <div class="wrap">
          <Header />
          <Title />
          <div class="content">
            <Photo />
            <div class="h1">
              We maximize impact through rapid prototyping, scalable solutions
              and open collaboration.
            </div>
            <div class="paragraph">
              Open Climate Fix is a non-profit research and development lab,
              totally focused on reducing greenhouse gas emissions as rapidly as
              possible. From our collaborative approach, to rapid prototyping,
              every part of our organization is designed to maximize climate
              impact, all with the aim of finding scalable solutions.
            </div>
            <div class="paragraph">
              By using an open-source approach, we can draw upon a much larger
              pool of knowledge and skills than any individual company, thereby
              combining existing islands of knowledge and accelerating progress.
              Our process is to:
            </div>
            <Tabs />
            <div class="h1">A short term plan for the long term future.</div>
            <div class="paragraph">
              The dream for the first few years is to build the world’s best
              solar PV nowcasting tool, in collaboration with the research
              community. Release all the code and data. Get state-of-the-art PV
              forecasts into the world’s grid control rooms ASAP. Also provide
              PV forecasts to anyone who wants them (e.g. battery schedulers).
              Paid for by research funding (e.g. NIA). Demonstrate carbon
              savings of more than a million tonnes per year; and sizable
              financial savings for consumers. Operate in a very open and
              collaborative way. Invite the research community to beat our
              nowcasting algorithm and, when they do, help them to get their
              better forecasts into grid control rooms.
            </div>
            <div class="paragraph">
              Leveraging that success, we'll pursue funding avenues to scale our
              impact to reducing emissions by billions of tonnes per year.
            </div>
            <div class="paragraph">
              Human ingenuity can fix climate change. But we only have a few
              years to act. If we focus on what's important, and tunnel through
              all the distractions, then we might just pull this off in time.
              Let's get started.
            </div>
            <div class="h1">Meet the founding team.</div>
            <div class="paragraph">
              <b>Jack Kelly</b> is terrified by climate change and is determined
              to do everything in his power to reduce emissions. For the last
              ten years, he's been applying machine learning to climate change
              mitigation, first at Imperial College London, and more recently at
              DeepMind as a research engineer teaching neural nets to predict
              wind power.
            </div>
            <div class="paragraph">
              <b>Dan Travers</b> has 20 years experience working in data
              analysis and engineering for energy markets trading and risk
              management. He' has a Masters in Mathematics, and reduced his work
              as a Senior Vice President of Product Management in financial
              markets to focus on solar energy forecasting and apply his vast
              knowledge to help slow climate change.
            </div>
            <div class="h1">Partners invested in our vision.</div>
            <div class="paragraph">
              <b>The RAAIS Foundation</b> awards grants for open source research
              and projects that align with their mission to advance research in
              artificial intelligence for the common good.
            </div>
            <div class="paragraph">
              The Foundation believes that the real-world impact of AI research
              will go well beyond solely for-profit applications, in particular,
              supporting communities that would otherwise not have a chance to
              participate in advancing AI.
            </div>
          </div>
          <div class="button__container">
            <a href="https://airtable.com/shrl59GJ96csVF4WB">
              <div class="button">Join the Cause</div>
            </a>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
