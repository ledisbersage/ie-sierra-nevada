"use client";

import ReactFlow, { Background, Controls, Edge, MiniMap, Node } from "reactflow";

const nodes: Node[] = [
  {
    id: "juan",
    type: "default",
    position: { x: 40, y: 210 },
    data: { label: "Juan y Medio\nSede principal" },
    style: {
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
    },
  },
  {
    id: "cascajalito",
    type: "default",
    position: { x: 700, y: 210 },
    data: { label: "Cascajalito\nBachillerato (6°-11°)" },
    style: {
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
    },
  },
  {
    id: "el-carmen",
    position: { x: 320, y: 40 },
    data: { label: "El Carmen" },
  },
  { id: "moreneros", position: { x: 320, y: 95 }, data: { label: "Los Moreneros" } },
  { id: "colonias", position: { x: 320, y: 150 }, data: { label: "Las Colonias" } },
  { id: "guillermina", position: { x: 320, y: 205 }, data: { label: "La Guillermina" } },
  { id: "palmas", position: { x: 320, y: 260 }, data: { label: "Las Palmas" } },
  { id: "puerto", position: { x: 320, y: 315 }, data: { label: "Puerto Colombia" } },
  { id: "casitas", position: { x: 320, y: 370 }, data: { label: "Las Casitas" } },
  { id: "contadero", position: { x: 320, y: 425 }, data: { label: "Contadero" } },
  { id: "limon", position: { x: 320, y: 480 }, data: { label: "El Limón" } },
  { id: "balsas", position: { x: 320, y: 535 }, data: { label: "Las Balsas" } },
  { id: "monos", position: { x: 320, y: 590 }, data: { label: "Los Monos" } },
].map((node) =>
  node.id === "juan" || node.id === "cascajalito"
    ? node
    : {
        ...node,
        style: {
          background: "#ffffff",
          border: "1px solid #e2e8f0",
          color: "#0f172a",
          width: 200,
          height: 38,
          borderRadius: 12,
          fontSize: 13,
          textAlign: "center",
          boxShadow: "0 6px 18px rgba(15,23,42,0.08)",
        },
      }
);

const edges: Edge[] = nodes
  .filter((node) => !["juan", "cascajalito"].includes(node.id))
  .flatMap((node) => [
    {
      id: `to-juan-${node.id}`,
      source: "juan",
      target: node.id,
      type: "smoothstep",
      style: { stroke: "#1e5f8c", strokeWidth: 2 },
    },
    {
      id: `to-cascajalito-${node.id}`,
      source: node.id,
      target: "cascajalito",
      type: "smoothstep",
      style: { stroke: "#2e7d32", strokeWidth: 2, strokeDasharray: "6 4" },
    },
  ]);

export default function SedesDiagram() {
  return (
    <div className="h-[520px] w-full rounded-2xl border border-stone-200 bg-white">
      <ReactFlow nodes={nodes} edges={edges} fitView fitViewOptions={{ padding: 0.2 }}>
        <Background color="#e2e8f0" gap={24} />
        <MiniMap
          nodeColor={(n) => (n.id === "juan" ? "#1e5f8c" : n.id === "cascajalito" ? "#2e7d32" : "#94a3b8")}
          maskColor="rgba(15,23,42,0.04)"
        />
        <Controls />
      </ReactFlow>
    </div>
  );
}
