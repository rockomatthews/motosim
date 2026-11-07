"use client";
import dynamic from "next/dynamic";
const RigScene = dynamic(() => import("./RigScene"), {
  ssr: false,
  loading: () => (
    <div className="scene-loading">
      LOADING THE NEXT APEX <span>Three.js / Theatre.js</span>
    </div>
  ),
});
export default function Experience() {
  return <RigScene />;
}
