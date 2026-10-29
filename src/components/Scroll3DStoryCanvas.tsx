import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const STORY_STAGES: Record<string, { label: string; subtext: string }> = {
  hero: { label: 'Atelier Desk', subtext: 'Welcome to Harini’s portfolio' },
  about: { label: 'Background & Mission', subtext: 'Exploring academic excellence' },
  achievements: { label: 'Honors & Milestones', subtext: 'Holding the merit gold star' },
  projects: { label: 'Project Showcase', subtext: 'Holding EcoLens green leaf' },
  skills: { label: 'Technical Capabilities', subtext: 'Browsing engineering toolkit' },
  leadership: { label: 'Student Leadership', subtext: 'Technegen CS Department Chair' },
  education: { label: 'Vellore Institute of Tech', subtext: 'Merit scholarship journey' },
  contact: { label: 'Postcard Atelier', subtext: 'Holding collaboration letter' },
};

export default function Scroll3DStoryCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState<boolean>(true);
  const [activeStoryStage, setActiveStoryStage] = useState<{
    key: string;
    label: string;
    subtext: string;
  }>({
    key: 'hero',
    label: STORY_STAGES.hero.label,
    subtext: STORY_STAGES.hero.subtext,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Detect WebGL capability
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl2') || testCanvas.getContext('webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let isMobile = window.innerWidth < 768;

    // 1. SCENE & CAMERA
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 9);

    // 2. RENDERER
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 3. LIGHTING (Warm Atelier Palette matching scrapbook theme)
    const ambientLight = new THREE.AmbientLight(0xFFFBF2, 2.4);
    scene.add(ambientLight);

    const keySunLight = new THREE.DirectionalLight(0xFFFAF0, 2.2);
    keySunLight.position.set(5, 6, 5);
    scene.add(keySunLight);

    const terracottaRim = new THREE.PointLight(0xF5CAC2, 3.5, 14);
    terracottaRim.position.set(-4, -2, 4);
    scene.add(terracottaRim);

    const sageFill = new THREE.DirectionalLight(0xDDE8D4, 0.9);
    sageFill.position.set(0, -5, 2);
    scene.add(sageFill);

    // -------------------------------------------------------------
    // PROCEDURAL 3D STORYTELLING MASCOT: "CODI" (The Creative AI Companion)
    // -------------------------------------------------------------
    const rootCompanion = new THREE.Group();
    scene.add(rootCompanion);

    // Sub-group for local idle floating & tilting
    const mascotGroup = new THREE.Group();
    rootCompanion.add(mascotGroup);

    // MATERIAL PALETTE
    // Cream porcelain body
    const porcelainMat = new THREE.MeshStandardMaterial({
      color: 0xFFFCF5,
      roughness: 0.32,
      metalness: 0.05,
    });

    // Signature warm crimson trim (#7E2231)
    const crimsonTrimMat = new THREE.MeshStandardMaterial({
      color: 0x7E2231,
      roughness: 0.4,
      metalness: 0.1,
    });

    // Terracotta clay body (#D97768)
    const terracottaMat = new THREE.MeshStandardMaterial({
      color: 0xD97768,
      roughness: 0.45,
      metalness: 0.05,
    });

    // Dark warm visor plate
    const visorMat = new THREE.MeshStandardMaterial({
      color: 0x2A1D1A,
      roughness: 0.2,
      metalness: 0.4,
    });

    // Glowing friendly eyes
    const eyeGlowMat = new THREE.MeshBasicMaterial({
      color: 0x38BDF8, // Soft cyan glow
    });

    // Cute blush cheeks (#F9DDD6)
    const blushMat = new THREE.MeshBasicMaterial({
      color: 0xF9DDD6,
      transparent: true,
      opacity: 0.85,
    });

    // Buttercup yellow accent (#FEF3C7)
    const buttercupMat = new THREE.MeshStandardMaterial({
      color: 0xFDE68A,
      roughness: 0.3,
      metalness: 0.2,
    });

    // Emerald plant leaf material for EcoLens
    const emeraldMat = new THREE.MeshStandardMaterial({
      color: 0x3E6B27,
      emissive: 0x2A471A,
      emissiveIntensity: 0.4,
      roughness: 0.3,
    });

    // Golden star material for Achievements
    const goldStarMat = new THREE.MeshStandardMaterial({
      color: 0xF59E0B,
      emissive: 0xD97706,
      emissiveIntensity: 0.5,
      roughness: 0.25,
      metalness: 0.3,
    });

    // PART A: HEAD
    const headGroup = new THREE.Group();
    headGroup.position.set(0, 0.65, 0);
    mascotGroup.add(headGroup);

    const headGeom = new THREE.SphereGeometry(0.72, 32, 24);
    headGeom.scale(1.05, 0.95, 0.98);
    const headMesh = new THREE.Mesh(headGeom, porcelainMat);
    headGroup.add(headMesh);

    // Visor faceplate
    const visorGeom = new THREE.SphereGeometry(0.58, 24, 18);
    visorGeom.scale(1.0, 0.72, 0.55);
    const visorMesh = new THREE.Mesh(visorGeom, visorMat);
    visorMesh.position.set(0, 0.02, 0.46);
    headGroup.add(visorMesh);

    // Glowing expressive eyes (can blink)
    const eyeGeom = new THREE.CapsuleGeometry(0.065, 0.1, 8, 16);
    
    const leftEye = new THREE.Mesh(eyeGeom, eyeGlowMat);
    leftEye.position.set(-0.2, 0.05, 0.72);
    headGroup.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeom, eyeGlowMat);
    rightEye.position.set(0.2, 0.05, 0.72);
    headGroup.add(rightEye);

    // Pink blush cheeks
    const blushGeom = new THREE.CircleGeometry(0.09, 16);
    const leftBlush = new THREE.Mesh(blushGeom, blushMat);
    leftBlush.position.set(-0.38, -0.1, 0.64);
    leftBlush.rotation.y = -0.4;
    headGroup.add(leftBlush);

    const rightBlush = new THREE.Mesh(blushGeom, blushMat);
    rightBlush.position.set(0.38, -0.1, 0.64);
    rightBlush.rotation.y = 0.4;
    headGroup.add(rightBlush);

    // Antenna on top
    const antennaStemGeom = new THREE.CylinderGeometry(0.025, 0.03, 0.28, 12);
    const antennaStem = new THREE.Mesh(antennaStemGeom, crimsonTrimMat);
    antennaStem.position.set(0, 0.8, 0);
    headGroup.add(antennaStem);

    const antennaBulbGeom = new THREE.SphereGeometry(0.09, 16, 16);
    const antennaBulb = new THREE.Mesh(antennaBulbGeom, buttercupMat);
    antennaBulb.position.set(0, 0.95, 0);
    headGroup.add(antennaBulb);

    // Crimson side ear-pods
    const earGeom = new THREE.CylinderGeometry(0.12, 0.12, 0.1, 16);
    earGeom.rotateZ(Math.PI / 2);
    const leftEar = new THREE.Mesh(earGeom, crimsonTrimMat);
    leftEar.position.set(-0.75, 0, 0);
    headGroup.add(leftEar);

    const rightEar = new THREE.Mesh(earGeom, crimsonTrimMat);
    rightEar.position.set(0.75, 0, 0);
    headGroup.add(rightEar);

    // PART B: BODY / TORSO
    const bodyGeom = new THREE.CapsuleGeometry(0.42, 0.4, 16, 24);
    const bodyMesh = new THREE.Mesh(bodyGeom, terracottaMat);
    bodyMesh.position.set(0, -0.22, 0);
    mascotGroup.add(bodyMesh);

    // Chest Core Badge (Represents AI & Product Thinking)
    const coreBadgeGeom = new THREE.CylinderGeometry(0.14, 0.14, 0.06, 16);
    coreBadgeGeom.rotateX(Math.PI / 2);
    const coreBadge = new THREE.Mesh(coreBadgeGeom, buttercupMat);
    coreBadge.position.set(0, -0.18, 0.42);
    mascotGroup.add(coreBadge);

    // Belt / Trim
    const beltGeom = new THREE.TorusGeometry(0.43, 0.028, 12, 32);
    beltGeom.rotateX(Math.PI / 2);
    const belt = new THREE.Mesh(beltGeom, crimsonTrimMat);
    belt.position.set(0, -0.36, 0);
    mascotGroup.add(belt);

    // PART C: FLOATING MAGNETIC HANDS (Gesture with secondary motion)
    const handGeom = new THREE.SphereGeometry(0.14, 16, 16);
    handGeom.scale(1.2, 0.9, 1.0);

    const leftHandGroup = new THREE.Group();
    leftHandGroup.position.set(-0.85, -0.2, 0.2);
    mascotGroup.add(leftHandGroup);
    const leftHandMesh = new THREE.Mesh(handGeom, porcelainMat);
    leftHandGroup.add(leftHandMesh);

    const rightHandGroup = new THREE.Group();
    rightHandGroup.position.set(0.85, -0.2, 0.2);
    mascotGroup.add(rightHandGroup);
    const rightHandMesh = new THREE.Mesh(handGeom, porcelainMat);
    rightHandGroup.add(rightHandMesh);

    // PART D: ORBITAL WHIMSICAL ASTROLABE HALO
    const haloGroup = new THREE.Group();
    mascotGroup.add(haloGroup);

    const haloRingGeom = new THREE.TorusGeometry(1.35, 0.016, 12, 64);
    haloRingGeom.rotateX(Math.PI / 2.3);
    const haloRing = new THREE.Mesh(haloRingGeom, crimsonTrimMat);
    haloGroup.add(haloRing);

    // Orbiting mini stars on halo
    const miniStarGeom = new THREE.OctahedronGeometry(0.08, 0);
    const miniStar1 = new THREE.Mesh(miniStarGeom, buttercupMat);
    haloGroup.add(miniStar1);

    const miniStar2 = new THREE.Mesh(miniStarGeom, new THREE.MeshStandardMaterial({ color: 0xF9DDD6, roughness: 0.3 }));
    haloGroup.add(miniStar2);

    // PART E: INTERACTIVE STORY PROPS IN HANDS
    // 1. EcoLeaf (Active during EcoLens)
    const leafGeom = new THREE.ConeGeometry(0.12, 0.3, 8);
    leafGeom.rotateZ(Math.PI / 4);
    const ecoLeafProp = new THREE.Mesh(leafGeom, emeraldMat);
    ecoLeafProp.position.set(0.1, 0.2, 0.1);
    ecoLeafProp.visible = false;
    rightHandGroup.add(ecoLeafProp);

    // 2. Gold Trophy Star (Active during Milestones)
    const achievementStarGeom = new THREE.OctahedronGeometry(0.18, 0);
    const achievementStarProp = new THREE.Mesh(achievementStarGeom, goldStarMat);
    achievementStarProp.position.set(-0.1, 0.24, 0.1);
    achievementStarProp.visible = false;
    leftHandGroup.add(achievementStarProp);

    // 3. Mini Paper Letter (Active during Contact)
    const letterGeom = new THREE.BoxGeometry(0.24, 0.16, 0.03);
    const letterProp = new THREE.Mesh(letterGeom, new THREE.MeshStandardMaterial({ color: 0xFFFDF8, roughness: 0.4 }));
    letterProp.position.set(0, 0.2, 0.15);
    letterProp.rotation.z = 0.2;
    letterProp.visible = false;
    rightHandGroup.add(letterProp);

    // -------------------------------------------------------------
    // SCROLL POSITIONING & STORY WAYPOINTS
    // -------------------------------------------------------------
    // Calculate 3D waypoints for each section
    interface Waypoint {
      x: number;
      y: number;
      z: number;
      rotX: number;
      rotY: number;
      rotZ: number;
      scale: number;
      prop: 'none' | 'leaf' | 'star' | 'letter';
    }

    const getWaypoints = (isSmallScreen: boolean): Record<string, Waypoint> => {
      if (isSmallScreen) {
        // Mobile-optimized waypoints: keep mascot centered or tucked safely
        return {
          hero: { x: 0.8, y: 1.2, z: -1.2, rotX: 0.05, rotY: -0.3, rotZ: 0, scale: 0.82, prop: 'none' },
          about: { x: -0.8, y: 0.6, z: -1.0, rotX: 0.1, rotY: 0.35, rotZ: -0.05, scale: 0.78, prop: 'none' },
          achievements: { x: 0.8, y: 0.8, z: -1.0, rotX: -0.05, rotY: -0.3, rotZ: 0.05, scale: 0.82, prop: 'star' },
          projects: { x: -0.7, y: 0.5, z: -0.8, rotX: 0, rotY: 0.25, rotZ: 0, scale: 0.85, prop: 'leaf' },
          skills: { x: 0.7, y: 0.6, z: -1.0, rotX: 0.1, rotY: -0.3, rotZ: 0, scale: 0.8, prop: 'none' },
          leadership: { x: -0.8, y: 0.6, z: -1.0, rotX: 0, rotY: 0.3, rotZ: 0, scale: 0.8, prop: 'star' },
          education: { x: 0.7, y: 0.5, z: -1.0, rotX: 0.05, rotY: -0.3, rotZ: 0, scale: 0.8, prop: 'none' },
          contact: { x: 0, y: 1.0, z: -0.8, rotX: 0.1, rotY: 0, rotZ: 0, scale: 0.88, prop: 'letter' },
        };
      }

      // Desktop cinematic waypoints
      return {
        // Hero: Floating on right beside title, looking friendly at user
        hero: { x: 2.8, y: 0.4, z: 0.2, rotX: 0.05, rotY: -0.38, rotZ: -0.04, scale: 1.12, prop: 'none' },
        // About: Crosses to the left beside the narrative story, tilting attentively
        about: { x: -3.0, y: -0.1, z: 0.1, rotX: 0.12, rotY: 0.42, rotZ: 0.03, scale: 1.0, prop: 'none' },
        // Achievements: Floats up on right near metric cards, holding golden star
        achievements: { x: 2.9, y: 0.5, z: 0.2, rotX: -0.08, rotY: -0.35, rotZ: 0.06, scale: 1.05, prop: 'star' },
        // Projects: Hovering over the projects showcase with the eco sprout
        projects: { x: -2.9, y: 0.1, z: 0.3, rotX: 0.08, rotY: 0.4, rotZ: -0.02, scale: 1.08, prop: 'leaf' },
        // Skills: Floating gracefully near the stationery index tabs
        skills: { x: 2.8, y: 0.3, z: 0.1, rotX: 0.14, rotY: -0.38, rotZ: 0.04, scale: 0.98, prop: 'none' },
        // Leadership: Stationed near the Technegen Chairman timeline
        leadership: { x: -2.9, y: -0.2, z: 0.1, rotX: 0.04, rotY: 0.36, rotZ: -0.03, scale: 1.0, prop: 'star' },
        // Education: Beside the diploma card
        education: { x: 2.8, y: 0.2, z: 0.1, rotX: 0.08, rotY: -0.35, rotZ: 0.02, scale: 0.98, prop: 'none' },
        // Contact: Nestled beside the postcard inquiry form holding the mail letter
        contact: { x: 2.6, y: -0.6, z: 0.4, rotX: 0.12, rotY: -0.28, rotZ: 0.02, scale: 1.15, prop: 'letter' },
      };
    };

    let waypoints = getWaypoints(isMobile);

    const sectionSequence = ['hero', 'about', 'achievements', 'projects', 'skills', 'leadership', 'education', 'contact'];

    // State for smooth lerp
    let currentX = waypoints.hero.x;
    let currentY = waypoints.hero.y;
    let currentZ = waypoints.hero.z;
    let currentRotX = waypoints.hero.rotX;
    let currentRotY = waypoints.hero.rotY;
    let currentRotZ = waypoints.hero.rotZ;
    let currentScale = waypoints.hero.scale;

    let mouseX = 0;
    let mouseY = 0;
    let isVisible = true;

    // POINTER LISTENER FOR GENTLE PARALLAX
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // RESIZE LISTENER
    const handleResize = () => {
      isMobile = window.innerWidth < 768;
      waypoints = getWaypoints(isMobile);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // VISIBILITY OBSERVER (Pauses when user leaves tab)
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // -------------------------------------------------------------
    // ANIMATION & SCROLL EVALUATION LOOP
    // -------------------------------------------------------------
    const clock = new THREE.Clock();
    let animId: number;
    let blinkTimer = 0;
    let nextBlinkTime = 2.5;
    let lastActiveKey = 'hero';

    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // 1. CALCULATE CONTINUOUS SCROLL PROGRESS ACROSS SECTIONS
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate document offsets of sections
      const sectionTops = sectionSequence.map((id) => {
        const el = document.getElementById(id);
        if (!el) return 0;
        return el.getBoundingClientRect().top + scrollY;
      });

      let fromIndex = 0;
      let toIndex = 0;
      let sectionFraction = 0;

      if (scrollY <= 50) {
        // Firmly in Hero section
        fromIndex = 0;
        toIndex = 0;
        sectionFraction = 0;
      } else {
        // Trigger line positioned at ~40% viewport height
        const triggerY = scrollY + windowHeight * 0.4;
        for (let i = 0; i < sectionSequence.length; i++) {
          if (triggerY >= sectionTops[i]) {
            fromIndex = i;
            toIndex = Math.min(i + 1, sectionSequence.length - 1);
            if (fromIndex !== toIndex) {
              const span = Math.max(1, sectionTops[toIndex] - sectionTops[fromIndex]);
              sectionFraction = Math.max(0, Math.min(1, (triggerY - sectionTops[fromIndex]) / span));
            } else {
              sectionFraction = 0;
            }
          }
        }
      }

      const fromKey = sectionSequence[fromIndex];
      const toKey = sectionSequence[toIndex];
      const fromWp = waypoints[fromKey] || waypoints.hero;
      const toWp = waypoints[toKey] || fromWp;

      // Smooth hermite / smoothstep curve
      const t = sectionFraction * sectionFraction * (3 - 2 * sectionFraction);

      const targetX = fromWp.x + (toWp.x - fromWp.x) * t;
      const targetY = fromWp.y + (toWp.y - fromWp.y) * t;
      const targetZ = fromWp.z + (toWp.z - fromWp.z) * t;
      const targetRotX = fromWp.rotX + (toWp.rotX - fromWp.rotX) * t;
      const targetRotY = fromWp.rotY + (toWp.rotY - fromWp.rotY) * t;
      const targetRotZ = fromWp.rotZ + (toWp.rotZ - fromWp.rotZ) * t;
      const targetScale = fromWp.scale + (toWp.scale - fromWp.scale) * t;

      // Active story prop in hand
      const activeProp = t > 0.5 ? toWp.prop : fromWp.prop;

      // Update story stage HUD
      const currentActiveKey = t > 0.5 ? toKey : fromKey;
      if (currentActiveKey !== lastActiveKey) {
        lastActiveKey = currentActiveKey;
        const stageInfo = STORY_STAGES[currentActiveKey] || STORY_STAGES.hero;
        setActiveStoryStage({
          key: currentActiveKey,
          label: stageInfo.label,
          subtext: stageInfo.subtext,
        });
      }

      // Fluid scaling for props rather than binary snap
      const targetLeafScale = activeProp === 'leaf' ? 1.0 : 0.001;
      const targetStarScale = activeProp === 'star' ? 1.0 : 0.001;
      const targetLetterScale = activeProp === 'letter' ? 1.0 : 0.001;

      ecoLeafProp.scale.lerp(new THREE.Vector3(targetLeafScale, targetLeafScale, targetLeafScale), 0.12);
      achievementStarProp.scale.lerp(new THREE.Vector3(targetStarScale, targetStarScale, targetStarScale), 0.12);
      letterProp.scale.lerp(new THREE.Vector3(targetLetterScale, targetLetterScale, targetLetterScale), 0.12);

      ecoLeafProp.visible = ecoLeafProp.scale.x > 0.02;
      achievementStarProp.visible = achievementStarProp.scale.x > 0.02;
      letterProp.visible = letterProp.scale.x > 0.02;

      // Gentle interactive rotations for props
      if (achievementStarProp.visible) {
        achievementStarProp.rotation.y = elapsed * 1.6;
        achievementStarProp.rotation.z = Math.sin(elapsed * 2.2) * 0.15;
      }
      if (ecoLeafProp.visible) {
        ecoLeafProp.rotation.y = elapsed * 1.3;
        ecoLeafProp.rotation.z = 0.2 + Math.sin(elapsed * 1.8) * 0.1;
      }
      if (letterProp.visible) {
        letterProp.rotation.z = 0.2 + Math.sin(elapsed * 2.0) * 0.08;
      }

      // 2. SMOOTH LERP TOWARD TARGET
      const lerpSpeed = prefersReducedMotion ? 0.15 : 0.06;
      currentX += (targetX - currentX) * lerpSpeed;
      currentY += (targetY - currentY) * lerpSpeed;
      currentZ += (targetZ - currentZ) * lerpSpeed;
      currentRotX += (targetRotX - currentRotX) * lerpSpeed;
      currentRotY += (targetRotY - currentRotY) * lerpSpeed;
      currentRotZ += (targetRotZ - currentRotZ) * lerpSpeed;
      currentScale += (targetScale - currentScale) * lerpSpeed;

      // 3. APPLIED POSITION & SCALE
      rootCompanion.position.set(currentX, currentY, currentZ);
      rootCompanion.scale.setScalar(currentScale);

      // 4. ROTATION WITH POINTER PARALLAX
      const pointerTiltX = prefersReducedMotion ? 0 : -mouseY * 0.2;
      const pointerTiltY = prefersReducedMotion ? 0 : mouseX * 0.28;

      rootCompanion.rotation.set(
        currentRotX + pointerTiltX,
        currentRotY + pointerTiltY,
        currentRotZ
      );

      // 5. CHARMING IDLE BREATHING & SECONDARY PHYSICS
      if (!prefersReducedMotion) {
        // Gentle vertical hover bob
        const hoverBob = Math.sin(elapsed * 2.0) * 0.07;
        mascotGroup.position.y = hoverBob;

        // Head looking slightly toward pointer
        headGroup.rotation.y = mouseX * 0.2;
        headGroup.rotation.x = -mouseY * 0.14;

        // Hands organic floating
        leftHandGroup.position.y = -0.2 + Math.sin(elapsed * 2.2 + 0.5) * 0.05;
        leftHandGroup.position.x = -0.85 + Math.cos(elapsed * 1.5) * 0.03;

        rightHandGroup.position.y = -0.2 + Math.sin(elapsed * 2.2 + 2.0) * 0.05;
        rightHandGroup.position.x = 0.85 + Math.cos(elapsed * 1.5 + 1.0) * 0.03;

        // Halo slow rotation
        haloGroup.rotation.z = elapsed * 0.25;
        miniStar1.position.x = Math.cos(elapsed * 0.6) * 1.35;
        miniStar1.position.y = Math.sin(elapsed * 0.6) * 1.35;
        miniStar2.position.x = Math.cos(elapsed * 0.6 + Math.PI) * 1.35;
        miniStar2.position.y = Math.sin(elapsed * 0.6 + Math.PI) * 1.35;

        // Antenna bulb pulse
        antennaBulb.rotation.y = elapsed * 1.5;

        // Eye blinking mechanism
        blinkTimer += delta;
        if (blinkTimer > nextBlinkTime) {
          leftEye.scale.y = 0.08;
          rightEye.scale.y = 0.08;
          if (blinkTimer > nextBlinkTime + 0.16) {
            leftEye.scale.y = 1.0;
            rightEye.scale.y = 1.0;
            blinkTimer = 0;
            nextBlinkTime = 2.5 + Math.random() * 3.0; // Random next blink
          }
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // CLEANUP
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animId);

      headGeom.dispose();
      visorGeom.dispose();
      eyeGeom.dispose();
      blushGeom.dispose();
      bodyGeom.dispose();
      coreBadgeGeom.dispose();
      beltGeom.dispose();
      handGeom.dispose();
      haloRingGeom.dispose();
      miniStarGeom.dispose();
      leafGeom.dispose();
      achievementStarGeom.dispose();
      letterGeom.dispose();

      porcelainMat.dispose();
      crimsonTrimMat.dispose();
      terracottaMat.dispose();
      visorMat.dispose();
      eyeGlowMat.dispose();
      blushMat.dispose();
      buttercupMat.dispose();
      emeraldMat.dispose();
      goldStarMat.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  if (!webglSupported) return null;

  return (
    <>
      <div
        ref={containerRef}
        className="fixed inset-0 z-30 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      />

      {/* Floating 3D Story Companion Status Pill */}
      <aside
        className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#FAF7EE]/95 backdrop-blur-md border border-[#7E2231]/30 shadow-[3px_3px_0px_#7E2231] text-[#332624] pointer-events-auto transition-transform duration-300 select-none group"
        aria-label="3D Story Companion Status"
      >
        <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-[#F9DDD6] border border-[#7E2231]/30 text-[#7E2231] shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7] animate-ping absolute" />
          <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
        </div>
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="font-typewriter text-[10px] font-bold tracking-wider uppercase text-[#7E2231]">
              Codi · Atelier Guide
            </span>
            <span className="text-[10px] text-[#8A635D]">({activeStoryStage.label})</span>
          </div>
          <span className="text-xs font-cursive font-bold text-[#4A3B37] leading-tight">
            {activeStoryStage.subtext}
          </span>
        </div>
      </aside>
    </>
  );
}
