import React, { useEffect, useRef } from "react";
import OpenSeadragon from "openseadragon";

export default function Viewer({ annotations, onAddAnnotation }) {
  const viewerRef = useRef(null);

  useEffect(() => {
    viewerRef.current = OpenSeadragon({
      id: "openseadragon-viewer",
      prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
      tileSources: {
        type: "image",
        url: "https://openseadragon.github.io/example-images/highsmith/highsmith.dzi" // Sample NASA-like deep zoom image
      }
    });

    // Add click to annotate
    viewerRef.current.addHandler("canvas-click", function (event) {
      const viewportPoint = viewerRef.current.viewport.pointFromPixel(event.position);
      const annotation = {
        id: Date.now(),
        coords: viewportPoint,
        label: prompt("Enter annotation label:")
      };
      if (annotation.label) onAddAnnotation(annotation);
    });

    return () => {
      if (viewerRef.current) viewerRef.current.destroy();
    };
  }, []);

  return <div id="openseadragon-viewer" style={{ width: "100%", height: "600px" }} />;
}