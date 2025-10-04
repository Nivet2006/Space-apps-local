import React, { useEffect, useRef } from "react";
import OpenSeadragon from "openseadragon";

export default function Viewer() {
  const viewerRef = useRef(null);

  useEffect(() => {
    if (viewerRef.current) return;

    viewerRef.current = OpenSeadragon({
      id: "openseadragon-viewer",
      prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
      tileSources: {
        type: "image",
        url: "/moon.jpg" // image in /public
      }
    });
  }, []);

  return (
    <div id="openseadragon-viewer" style={{ width: "70%", height: "100%" }} />
  );
}
