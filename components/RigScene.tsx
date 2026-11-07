"use client";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { getProject, createRafDriver } from "@theatre/core";

function authoredState() {
  const props: Record<string, number[]> = {
    yaw: [-0.5, 0.15, 0.65],
    lean: [-0.17, 0.25, -0.14],
    explode: [0, 0, 0.45],
    cameraZ: [5.5, 4.6, 5.3],
  };
  const trackIdByPropPath: Record<string, string> = {},
    trackData: Record<string, unknown> = {};
  Object.entries(props).forEach(([prop, values]) => {
    const id = `rig-${prop}`;
    trackIdByPropPath[JSON.stringify([prop])] = id;
    trackData[id] = {
      type: "BasicKeyframedTrack",
      keyframes: values.map((value, i) => ({
        id: `${id}-${i}`,
        position: i / 2,
        value,
        handles: [0.5, 0, 0.5, 1],
        connectedRight: i < 2,
        type: "bezier",
      })),
    };
  });
  return {
    definitionVersion: "0.4.0",
    revisionHistory: ["motosim-rig-v1"],
    sheetsById: {
      Prototype: {
        staticOverrides: { byObject: {} },
        sequence: {
          type: "PositionalSequence",
          length: 1,
          subUnitsPerUnit: 60,
          tracksByObject: { Rig: { trackIdByPropPath, trackData } },
        },
      },
    },
  };
}

export default function RigScene({
  funding = false,
  progress = 0,
}: {
  funding?: boolean;
  progress?: number;
}) {
  const host = useRef<HTMLDivElement>(null),
    input = useRef(0),
    exploded = useRef(false);
  const [lean, setLean] = useState(0),
    [explode, setExplode] = useState(false),
    [failed, setFailed] = useState(false);
  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "low-power",
      });
    } catch {
      setFailed(true);
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    el.appendChild(renderer.domElement);
    renderer.domElement.setAttribute("aria-hidden", "true");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(4, 2.8, 5.5);
    camera.lookAt(0, 0.6, 0);
    scene.add(new THREE.HemisphereLight("#bfd8ff", "#171622", 3));
    const light = new THREE.DirectionalLight("#ffffff", 5);
    light.position.set(1, 5, 3);
    scene.add(light);
    const red = new THREE.PointLight("#ff183d", 35, 12);
    red.position.set(-2, 2, -2);
    scene.add(red);
    const blue = new THREE.PointLight("#2675ff", 40, 12);
    blue.position.set(2, 1.5, 1);
    scene.add(blue);
    const steel = new THREE.MeshStandardMaterial({
      color: "#202b42",
      metalness: 0.85,
      roughness: 0.28,
    });
    const white = new THREE.MeshStandardMaterial({
      color: "#f0f4ff",
      metalness: 0.35,
      roughness: 0.25,
    });
    const crimson = new THREE.MeshStandardMaterial({
      color: "#ec1838",
      metalness: 0.6,
      roughness: 0.25,
    });
    const rubber = new THREE.MeshStandardMaterial({
      color: "#0a0c11",
      roughness: 0.9,
    });
    const glow = new THREE.MeshStandardMaterial({
      color: "#246bff",
      emissive: "#164aff",
      emissiveIntensity: 2,
    });
    const model = new THREE.Group();
    scene.add(model);
    function box(
      parent: THREE.Group,
      pos: number[],
      size: number[],
      mat: THREE.Material,
    ) {
      const m = new THREE.Mesh(
        new THREE.BoxGeometry(...(size as [number, number, number])),
        mat,
      );
      m.position.set(...(pos as [number, number, number]));
      parent.add(m);
      return m;
    }
    function tube(
      parent: THREE.Group,
      a: number[],
      b: number[],
      radius: number,
      mat: THREE.Material,
    ) {
      const start = new THREE.Vector3(...(a as [number, number, number])),
        end = new THREE.Vector3(...(b as [number, number, number]));
      const delta = end.clone().sub(start);
      const m = new THREE.Mesh(
        new THREE.CylinderGeometry(radius, radius, delta.length(), 12),
        mat,
      );
      m.position.copy(start.add(end).multiplyScalar(0.5));
      m.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        delta.normalize(),
      );
      parent.add(m);
      return m;
    }
    const moving = new THREE.Group();
    model.add(moving);
    let bars: THREE.Group | undefined;
    if (funding) {
      model.rotation.set(-0.12, 0, -0.08);
      box(model, [0, 0, 0], [5.8, 0.2, 0.7], steel);
      for (let i = 0; i < 20; i++) {
        const active = i < Math.floor(Math.min(1, progress) * 20);
        box(
          model,
          [-2.65 + i * 0.28, 0.22, 0],
          [0.23, 0.3, 0.52],
          active ? crimson : white,
        );
      }
      tube(model, [-3, -0.25, 0.48], [3, -0.25, 0.48], 0.015, glow);
      camera.position.set(1.2, 2, 6.8);
      camera.lookAt(0, 0, 0);
    } else {
      [-0.55, 0.55].forEach((z) => {
        tube(model, [-1.45, 0.05, z], [1.45, 0.05, z], 0.075, steel);
        box(model, [-1.45, 0.02, z], [0.25, 0.12, 0.3], rubber);
        box(model, [1.45, 0.02, z], [0.25, 0.12, 0.3], rubber);
      });
      [-1, 1].forEach((x) =>
        tube(model, [x, 0.05, -0.55], [x, 0.05, 0.55], 0.06, steel),
      );
      tube(model, [0, 0.15, 0], [0, 0.58, 0], 0.13, white);
      const pivot = new THREE.Mesh(
        new THREE.TorusGeometry(0.25, 0.045, 12, 40),
        crimson,
      );
      pivot.rotation.y = Math.PI / 2;
      pivot.position.y = 0.4;
      model.add(pivot);
      moving.position.y = 0.5;
      [-0.18, 0.18].forEach((z) => {
        tube(moving, [-0.9, 0.3, z], [0.65, 0.2, z], 0.055, crimson);
        tube(moving, [-0.9, 0.3, z], [-0.25, 1, z], 0.045, steel);
        tube(moving, [-0.25, 1, z], [0.65, 0.2, z], 0.045, steel);
        tube(moving, [0.65, 0.2, z], [0.85, 1.2, z], 0.055, white);
      });
      const saddle = box(moving, [-0.65, 0.86, 0], [0.85, 0.17, 0.48], rubber);
      saddle.rotation.z = 0.06;
      const tail = box(moving, [-1.05, 0.76, 0], [0.32, 0.22, 0.47], white);
      tail.rotation.z = -0.2;
      const tank = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 20), crimson);
      tank.scale.set(0.52, 0.28, 0.34);
      tank.position.set(0.07, 0.98, 0);
      moving.add(tank);
      [-0.32, 0.32].forEach((z) => {
        const knee = box(moving, [0.02, 0.73, z], [0.65, 0.3, 0.05], rubber);
        knee.rotation.z = -0.15;
      });
      box(moving, [0.66, 0.48, 0], [0.4, 0.36, 0.4], steel);
      [-0.48, 0.48].forEach((z) => {
        tube(
          moving,
          [-0.4, 0.02, z],
          [-0.4, 0.02, z > 0 ? 0.7 : -0.7],
          0.05,
          steel,
        );
        tube(moving, [-0.4, 0.02, z], [0.1, 0.12, z], 0.025, white);
      });
      bars = new THREE.Group();
      bars.position.set(0.83, 1.18, 0);
      moving.add(bars);
      tube(bars, [0, 0, -0.45], [0, 0, 0.45], 0.035, steel);
      [-1, 1].forEach((sign) => {
        tube(
          bars!,
          [0, 0, sign * 0.45],
          [-0.13, -0.03, sign * 0.68],
          0.065,
          rubber,
        );
        tube(
          bars!,
          [-0.03, 0.04, sign * 0.44],
          [-0.22, 0.04, sign * 0.64],
          0.018,
          white,
        );
      });
      const dash = box(bars, [0.08, 0.1, 0], [0.08, 0.2, 0.28], glow);
      dash.rotation.z = -0.3;
      box(moving, [-0.68, 0.66, 0], [0.5, 0.025, 0.51], glow);
      const grid = new THREE.GridHelper(12, 24, "#1f3d70", "#142039");
      grid.position.y = -0.08;
      scene.add(grid);
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(1.9, 0.008, 8, 100),
        glow,
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.y = -0.07;
      scene.add(ring);
    }
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const project = getProject("MotoSIM Cinematic v1", {
      state: authoredState() as never,
    });
    const sheet = project.sheet("Prototype", funding ? "funding" : "rig");
    const driver = createRafDriver({ name: funding ? "funding" : "rig" });
    const object = sheet.object("Rig", {
      yaw: 0,
      lean: 0,
      explode: 0,
      cameraZ: 5.5,
    });
    let values = { yaw: 0, lean: 0, explode: 0, cameraZ: 5.5 };
    const unsubscribe = object.onValuesChange((v) => {
      values = v;
    }, driver);
    const resize = new ResizeObserver(() => {
      const w = el.clientWidth,
        h = el.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    });
    resize.observe(el);
    let visible = true;
    const observer = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
    });
    observer.observe(el);
    let frame = 0;
    function render() {
      frame = requestAnimationFrame(render);
      if (!visible || document.hidden) return;
      const rect = el!.getBoundingClientRect();
      const p = Math.max(
        0,
        Math.min(
          1,
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height),
        ),
      );
      sheet.sequence.position = reduced ? 0.5 : p;
      driver.tick(performance.now());
      if (!funding) {
        model.rotation.y = values.yaw;
        moving.rotation.x = reduced ? 0 : values.lean + input.current * 0.012;
        moving.position.y = THREE.MathUtils.lerp(
          moving.position.y,
          exploded.current ? 1.1 : 0.5,
          0.08,
        );
        if (bars) bars.position.y = exploded.current ? 1.6 : 1.18;
        camera.position.z = values.cameraZ;
        camera.lookAt(0, 0.7, 0);
      } else
        model.rotation.y = reduced
          ? 0
          : Math.sin(performance.now() * 0.0003) * 0.08;
      renderer.render(scene, camera);
    }
    render();
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      observer.disconnect();
      unsubscribe();
      sheet.detachObject("Rig");
      scene.traverse((o) => {
        if (o instanceof THREE.Mesh) {
          o.geometry.dispose();
        }
      });
      [steel, white, crimson, rubber, glow].forEach((m) => m.dispose());
      renderer.dispose();
      el.removeChild(renderer.domElement);
    };
  }, [funding, progress]);
  return (
    <div className={funding ? "funding-visual" : "rig-visual"}>
      <div
        ref={host}
        className="canvas-host"
        role="img"
        aria-label={
          funding
            ? "Three-dimensional campaign progress bar"
            : "Interactive three-dimensional MotoSIM supported-lean prototype concept"
        }
      />
      {failed && (
        <div className="scene-fallback">
          <span>MS—01</span>
          <p>Supported lean · Race controls · Required VR</p>
          <p>
            3D preview requires WebGL. Explore the full specifications below.
          </p>
        </div>
      )}
      {!funding && (
        <>
          <div className="model-tag">
            <span className="status-dot" /> MS—01 / CONCEPT STUDY{" "}
            <small>Illustrative geometry · not manufacturing CAD</small>
          </div>
          <div className="rig-controls">
            <label>
              EXPLORE THE LEAN{" "}
              <input
                aria-label="Lean the prototype"
                type="range"
                min="-25"
                max="25"
                value={lean}
                onChange={(e) => {
                  setLean(+e.target.value);
                  input.current = +e.target.value;
                }}
              />
              <span>{lean}° visual</span>
            </label>
            <button
              aria-pressed={explode}
              onClick={() => {
                setExplode(!explode);
                exploded.current = !explode;
              }}
            >
              {explode ? "Assemble rig ↘" : "Explode view ↗"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
