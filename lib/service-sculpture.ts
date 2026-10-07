import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface SculptureControls {
  setService: (slug: string) => void;
  setMotion: (enabled: boolean) => void;
  setReduced: (enabled: boolean) => void;
  rotate: (direction: number) => void;
  dispose: () => void;
}

/** Locally modelled objects; no remote models, images, or tracking requests. */
export function createServiceSculpture(host: HTMLElement, slug: string, reduced: boolean): SculptureControls {
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.domElement.setAttribute('aria-hidden', 'true');
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(33, 1, .1, 50);
  camera.position.set(0, 1.35, 8.8);
  camera.lookAt(0, -.15, 0);
  const room = new RoomEnvironment();
  const pmrem = new THREE.PMREMGenerator(renderer);
  const environment = pmrem.fromScene(room, .05);
  scene.environment = environment.texture;
  room.dispose(); pmrem.dispose();
  scene.add(new THREE.HemisphereLight(0xffffff, 0xb7cbbb, 1.2));
  const key = new THREE.DirectionalLight(0xffffff, 3);
  key.position.set(-3, 6, 5); key.castShadow = true;
  key.shadow.mapSize.set(512, 512); key.shadow.camera.left = -4; key.shadow.camera.right = 4;
  key.shadow.camera.top = 4; key.shadow.camera.bottom = -4; key.shadow.normalBias = .03;
  key.shadow.bias = -.0001; key.shadow.radius = 4; scene.add(key);
  const rim = new THREE.DirectionalLight(0xa3ffda, 2); rim.position.set(4, 2, -3); scene.add(rim);

  const green = new THREE.MeshPhysicalMaterial({ color: 0x087d59, metalness: .65, roughness: .24, clearcoat: 1, clearcoatRoughness: .12 });
  const silver = new THREE.MeshPhysicalMaterial({ color: 0xe8f2ec, metalness: .88, roughness: .2, clearcoat: .6 });
  const pearl = new THREE.MeshPhysicalMaterial({ color: 0xf0f3e9, metalness: .12, roughness: .24, clearcoat: 1 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x183e34, metalness: .3, roughness: .4 });
  const mint = new THREE.MeshPhysicalMaterial({ color: 0x8be3bb, metalness: .28, roughness: .22, clearcoat: 1 });
  const gold = new THREE.MeshStandardMaterial({ color: 0xbfa981, metalness: .72, roughness: .3 });
  const materials = [green, silver, pearl, dark, mint, gold];
  const sculpture = new THREE.Group(); scene.add(sculpture);
  const model = new THREE.Group(); sculpture.add(model);
  const add = (geometry: THREE.BufferGeometry, material: THREE.Material, x = 0, y = 0, z = 0, parent: THREE.Group = model) => {
    const mesh = new THREE.Mesh(geometry, material); mesh.position.set(x, y, z); mesh.castShadow = true; mesh.receiveShadow = true; parent.add(mesh); return mesh;
  };
  const box = (w: number, h: number, d: number, material: THREE.Material, x = 0, y = 0, z = 0, parent = model) => add(new RoundedBoxGeometry(w, h, d, 3, Math.min(.075, w / 4, h / 4, d / 4)), material, x, y, z, parent);
  const rod = (from: THREE.Vector3, to: THREE.Vector3, radius: number, material: THREE.Material, parent = model) => {
    const mesh = add(new THREE.CylinderGeometry(radius, radius, from.distanceTo(to), 24), material, 0, 0, 0, parent);
    mesh.position.copy(from).add(to).multiplyScalar(.5);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), to.clone().sub(from).normalize()); return mesh;
  };
  const extrude = (shape: THREE.Shape, depth: number, material: THREE.Material, x = 0, y = 0, z = 0) => add(new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: true, bevelSegments: 3, steps: 1, bevelSize: .035, bevelThickness: .035, curveSegments: 24 }), material, x, y, z);
  const coin = (radius: number, material: THREE.Material, x = 0, y = 0, z = 0) => {
    const mesh = add(new THREE.CylinderGeometry(radius, radius, .22, 80), material, x, y, z); mesh.rotation.x = Math.PI / 2;
    add(new THREE.TorusGeometry(radius * .92, .027, 12, 80), silver, x, y, z + .13); return mesh;
  };
  const check = (x: number, y: number, z: number, scale = 1) => {
    rod(new THREE.Vector3(x - .34 * scale, y, z), new THREE.Vector3(x - .06 * scale, y - .25 * scale, z), .065 * scale, silver);
    rod(new THREE.Vector3(x - .06 * scale, y - .25 * scale, z), new THREE.Vector3(x + .42 * scale, y + .32 * scale, z), .065 * scale, silver);
  };
  const paper = () => {
    box(1.9, 2.4, .16, pearl, 0, 0, -.14);
    for (let i = 0; i < 4; i++) box(i === 3 ? .65 : 1.23, .055, .025, i === 0 ? green : mint, i === 3 ? -.29 : 0, .65 - i * .25, -.035);
  };

  const buildModel = (slug: string) => {
  if (slug === 'trademark-ip') {
    coin(1.28, green);
    const r = new THREE.Shape();
    r.moveTo(-.4, -.7); r.lineTo(-.4, .7); r.lineTo(.09, .7);
    r.bezierCurveTo(.73, .7, .74, -.02, .17, -.12);
    r.lineTo(.65, -.7); r.lineTo(.3, -.7); r.lineTo(-.12, -.17); r.lineTo(-.13, -.17); r.lineTo(-.13, -.7); r.closePath();
    const hole = new THREE.Path(); hole.moveTo(-.13, .45); hole.lineTo(-.13, .1); hole.lineTo(.08, .1); hole.bezierCurveTo(.43, .1, .43, .45, .08, .45); hole.closePath(); r.holes.push(hole);
    extrude(r, .08, silver, -.03, 0, .14);
    add(new THREE.TorusGeometry(.97, .037, 16, 80), silver, 0, 0, .15);
    const orbit = add(new THREE.TorusGeometry(1.57, .013, 12, 100), gold); orbit.rotation.y = .45; orbit.rotation.x = .18;
  } else if (slug === 'business-registration') {
    [-.78, 0, .78].forEach((x, i) => {
      const height = [1.4, 2.4, 1.85][i];
      box(.66, height, .68, i === 1 ? green : pearl, x, height / 2 - 1.1, 0);
      for (let row = 0; row < (i === 1 ? 5 : 3); row++) for (let col = 0; col < 2; col++) box(.11, .13, .025, i === 1 ? silver : green, x - .15 + col * .3, -.85 + row * .37, .36);
    });
    box(2.7, .14, 1.12, silver, 0, -1.18, 0);
  } else if (slug === 'compliance') {
    const shield = new THREE.Shape(); shield.moveTo(0, 1.25); shield.bezierCurveTo(.3, 1.05, .7, .92, 1, .88); shield.lineTo(.92, -.15); shield.bezierCurveTo(.85, -.8, .4, -1.05, 0, -1.3); shield.bezierCurveTo(-.4, -1.05, -.85, -.8, -.92, -.15); shield.lineTo(-1, .88); shield.bezierCurveTo(-.7, .92, -.3, 1.05, 0, 1.25);
    extrude(shield, .22, green, 0, 0, -.15); check(0, .06, .19, 1.6);
    const ring = add(new THREE.TorusGeometry(1.55, .016, 12, 100), silver); ring.rotation.y = .45;
  } else if (slug === 'gst-tax') {
    paper(); coin(.65, green, .64, -.61, .2);
    // A raised percentage symbol represents tax without a currency-font dependency.
    add(new THREE.TorusGeometry(.12, .035, 12, 32), silver, .46, -.38, .36);
    add(new THREE.TorusGeometry(.12, .035, 12, 32), silver, .83, -.83, .36);
    rod(new THREE.Vector3(.42, -.9, .36), new THREE.Vector3(.87, -.33, .36), .03, silver);
  } else if (slug === 'licenses-registrations') {
    paper(); coin(.55, green, .54, -.62, .18); check(.54, -.61, .34, .65);
    const ribbonA = box(.2, .6, .04, green, .35, -1.14, .03); ribbonA.rotation.z = -.2;
    const ribbonB = box(.2, .6, .04, green, .73, -1.14, .03); ribbonB.rotation.z = .2;
  } else if (slug === 'accounting-payroll') {
    [-.95, -.32, .32, .95].forEach((x, i) => box(.46, .65 + i * .5, .65, i === 3 ? green : i === 2 ? mint : pearl, x, -.9 + (.65 + i * .5) / 2, 0));
    box(2.7, .12, 1.12, silver, 0, -1, 0); coin(.51, green, -.87, -.63, .68);
    box(.09, .5, .045, silver, -.87, -.63, .83); box(.35, .07, .045, silver, -.87, -.63, .83);
  } else {
    box(1.45, .18, .8, green, 0, -1.15); rod(new THREE.Vector3(0, -1.1, 0), new THREE.Vector3(0, 1.08, 0), .075, silver);
    add(new THREE.SphereGeometry(.13, 24, 16), gold, 0, 1.08);
    rod(new THREE.Vector3(-1.13, .77, 0), new THREE.Vector3(1.13, .77, 0), .05, gold);
    [-.94, .94].forEach((x) => {
      rod(new THREE.Vector3(x, .76, 0), new THREE.Vector3(x - .38, -.22, 0), .014, silver);
      rod(new THREE.Vector3(x, .76, 0), new THREE.Vector3(x + .38, -.22, 0), .014, silver);
      const bowl = add(new THREE.SphereGeometry(.42, 36, 20, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), green, x, -.22, 0); bowl.scale.y = .45;
      const rim = add(new THREE.TorusGeometry(.42, .025, 12, 48), silver, x, -.22, 0); rim.rotation.x = Math.PI / 2;
    });
  }
  };
  buildModel(slug);
  let currentSlug = slug;
  // The same studio lighting and plinth unify the seven distinct sculptures.
  const plinth = add(new THREE.CylinderGeometry(1.72, 1.82, .18, 80), pearl, 0, -1.73, 0, sculpture);
  plinth.receiveShadow = true;
  const plinthRim = add(new THREE.TorusGeometry(1.72, .019, 12, 80), silver, 0, -1.63, 0, sculpture); plinthRim.rotation.x = Math.PI / 2;
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(30, 30), new THREE.ShadowMaterial({ opacity: .13 })); ground.rotation.x = -Math.PI / 2; ground.position.y = -1.84; ground.receiveShadow = true; scene.add(ground);

  let motion = !reduced, visible = true, disposed = false, dirty = true;
  let turn = -.28, tilt = 0, dragging = false, pointerStart = 0, turnStart = 0;
  const scroll = { progress: 0 };
  const trigger = reduced ? null : gsap.to(scroll, { progress: 1, ease: 'none', scrollTrigger: { trigger: host.closest('section'), start: 'top top', end: 'bottom top', scrub: .65 }, onUpdate: () => { dirty = true; } });
  const intro = reduced ? null : gsap.from(model.scale, { x: .82, y: .82, z: .82, duration: 1.2, ease: 'power3.out', onUpdate: () => { dirty = true; } });
  let activeTime = 0, previousTime = 0, scrollPose = 0, lastFrame = 0;
  const render = (time: number) => {
    if (disposed || !visible || document.hidden) return;
    if (!dirty && time - lastFrame < 1000 / 30) return;
    lastFrame = time;
    const delta = previousTime ? Math.min((time - previousTime) / 1000, .05) : 0; previousTime = time;
    if (motion) { activeTime += delta; scrollPose = scroll.progress; }
    if (!dirty && !motion) return;
    const wave = reduced ? 0 : Math.sin(activeTime * .65);
    sculpture.rotation.y = turn + (scrollPose * .7 + wave * .08);
    sculpture.rotation.x = tilt * .2;
    model.position.y = wave * .06 + scrollPose * .22;
    model.rotation.z = currentSlug === 'trademark-ip' ? -.08 : 0;
    renderer.render(scene, camera); host.dataset.renderedService = currentSlug; dirty = false;
  };
  const resize = () => { const { width, height } = host.getBoundingClientRect(); if (!width || !height) return; renderer.setSize(width, height); camera.aspect = width / height; camera.updateProjectionMatrix(); dirty = true; };
  const observer = new ResizeObserver(resize); observer.observe(host); resize();
  const visibility = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; dirty = true; previousTime = 0; renderer.setAnimationLoop(visible && !document.hidden ? render : null); }); visibility.observe(host);
  const onVisibility = () => { dirty = true; previousTime = 0; renderer.setAnimationLoop(visible && !document.hidden ? render : null); }; document.addEventListener('visibilitychange', onVisibility);
  const down = (event: PointerEvent) => { if (event.button !== 0) return; dragging = true; pointerStart = event.clientX; turnStart = turn; host.setPointerCapture(event.pointerId); host.dataset.dragging = 'true'; };
  const move = (event: PointerEvent) => { if (dragging) { turn = turnStart + (event.clientX - pointerStart) * .008; dirty = true; } else if (event.pointerType === 'mouse' && motion) { const rect = host.getBoundingClientRect(); tilt = (event.clientY - rect.top) / rect.height - .5; dirty = true; } };
  const up = () => { dragging = false; host.dataset.dragging = 'false'; };
  const leave = () => { tilt = 0; dirty = true; };
  host.addEventListener('pointerdown', down); host.addEventListener('pointermove', move); host.addEventListener('pointerup', up); host.addEventListener('pointercancel', up); host.addEventListener('pointerleave', leave);
  renderer.setAnimationLoop(render);
  return {
    setService: (nextSlug) => {
      if (nextSlug === currentSlug) return;
      const oldGeometry = new Set<THREE.BufferGeometry>();
      model.traverse((object) => { if (object instanceof THREE.Mesh) oldGeometry.add(object.geometry); });
      model.clear(); oldGeometry.forEach((geometry) => geometry.dispose());
      buildModel(nextSlug); currentSlug = nextSlug; turn = -.28; activeTime = 0;
      if (!reduced) intro?.restart();
      dirty = true;
    },
    setMotion: (enabled) => { motion = enabled && !reduced; dirty = true; },
    setReduced: (enabled) => {
      reduced = enabled;
      if (enabled) { motion = false; scrollPose = 0; activeTime = 0; intro?.progress(1); trigger?.scrollTrigger?.disable(false); }
      else trigger?.scrollTrigger?.enable();
      dirty = true;
    },
    rotate: (direction) => { turn += direction * Math.PI / 6; dirty = true; },
    dispose: () => {
      disposed = true; renderer.setAnimationLoop(null); observer.disconnect(); visibility.disconnect(); document.removeEventListener('visibilitychange', onVisibility);
      host.removeEventListener('pointerdown', down); host.removeEventListener('pointermove', move); host.removeEventListener('pointerup', up); host.removeEventListener('pointercancel', up); host.removeEventListener('pointerleave', leave);
      trigger?.scrollTrigger?.kill(); trigger?.kill(); intro?.kill();
      const geometries = new Set<THREE.BufferGeometry>(); scene.traverse((object) => { if (object instanceof THREE.Mesh) geometries.add(object.geometry); }); geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose()); ground.material.dispose(); environment.dispose(); key.shadow.dispose(); renderer.dispose(); renderer.forceContextLoss(); renderer.domElement.remove();
    },
  };
}
