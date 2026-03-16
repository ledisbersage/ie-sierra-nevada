"use client";

import ReactFlow, { Background, Controls, Edge, MiniMap, Node } from "reactflow";
import type { CSSProperties } from "react";
import { sedes } from "@/data/sedes";

const hubStyle: CSSProperties = {
  background: "#e6f2fb",
  border: "2px solid #1e5f8c",
  color: "#0f172a",
  width: 200,
  height: 70,
  borderRadius: 16,
  fontWeight: 600,
  textAlign: "center",
  whiteSpace: "pre-line",
  boxShadow: "0 12px 30px rgba(30,95,140,0.15)",
};

const bachilleratoStyle: CSSProperties = {
  background: "#ecf6ed",
  border: "2px solid #2e7d32",
  color: "#0f172a",
  width: 220,
  height: 70,
  borderRadius: 16,
  fontWeight: 600,
  textAlign: "center",
  whiteSpace: "pre-line",
  boxShadow: "0 12px 30px rgba(46,125,50,0.15)",
};

const nodeStyle: CSSProperties = {
  background: "#ffffff",
  border: "1px solid #e2e8f0",
  color: "#0f172a",
  width: 200,
  height: 38,
  borderRadius: 12,
  fontSize: 13,
  textAlign: "center",
  boxShadow: "0 6px 18px rgba(15,23,42,0.08)",
};

const principal = sedes.find((sede) => sede.destacada === "principal") ?? sedes[0];
const bachillerato = sedes.find((sede) => sede.destacada === "bachillerato");
const otrasSedes = sedes.filter((sede) => sede.slug !== principal?.slug && sede.slug !== bachillerato?.slug);

const baseY = 60;
const rowGap = 55;

const nodes: Node[] = [
  {
    id: principal.slug,
    type: "default",
    position: { x: 40, y: baseY + rowGap * 2 },
    data: { label: `${principal.nombre}\nSede principal` },
    style: hubStyle,
  },
  bachillerato && {
    id: bachillerato.slug,
    type: "default",
    position: { x: 700, y: baseY + rowGap * 2 },
    data: { label: `${bachillerato.nombre}\nBachillerato (6°-11°)` },
    style: bachilleratoStyle,
  },
  ...otrasSedes.map((sede, index) => ({
    id: sede.slug,
    position: { x: 320, y: baseY + index * rowGap },
    data: { label: sede.nombre },
    style: nodeStyle,
  })),
].filter(Boolean) as Node[];

const edges: Edge[] = nodes
  .filter((node) => node.id !== principal.slug && node.id !== bachillerato?.slug)
  .flatMap((node) => [
    {
      id: `to-principal-${node.id}`,
      source: principal.slug,
      target: node.id,
      type: "smoothstep",
      style: { stroke: "#1e5f8c", strokeWidth: 2 },
    },
    ...(bachillerato
      ? [
          {
            id: `to-bachillerato-${node.id}`,
            source: node.id,
            target: bachillerato.slug,
            type: "smoothstep",
            style: { stroke: "#2e7d32", strokeWidth: 2, strokeDasharray: "6 4" },
          },
        ]
      : []),
  ]);

export default function SedesDiagram() {
  return (
    <div className="h-[560px] w-full rounded-2xl border border-stone-200 bg-white">
      <ReactFlow nodes={nodes} edges={edges} fitView fitViewOptions={{ padding: 0.2 }}>
        <Background color="#e2e8f0" gap={24} />
        <MiniMap
          nodeColor={(n) =>
            n.id === principal.slug ? "#1e5f8c" : n.id === bachillerato?.slug ? "#2e7d32" : "#94a3b8"
          }
          maskColor="rgba(15,23,42,0.04)"
        />
        <Controls />
      </ReactFlow>
    </div>
  );
}
