import React, { useState } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useEdgesState,
  useNodesState,
} from "react-flow-renderer";
import Sidebar from "./components/Sidebar";

const DiagramFlow = () => {
  const initialNodes = [
    { id: "1", type: "default", position: { x: 100, y: 100 }, data: { label: "Node 1" } },
    { id: "2", type: "default", position: { x: 300, y: 100 }, data: { label: "Node 2" } },
  ];
  const initialEdges = [{ id: "e1-2", source: "1", target: "2", type: "default" }];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  const addNode = (label) => {
    const newNode = {
      id: `${nodes.length + 1}`,
      type: "default",
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label },
    };
    setNodes((nds) => [...nds, newNode]);
  };

  const addNewEdge = (source, target) => {
    const newEdge = { id: `e${source}-${target}`, source, target, type: "default" };
    setEdges((eds) => [...eds, newEdge]);
  };

  return (
    <div className="diagram-container">
      <Sidebar addNode={addNode} addEdge={addNewEdge} />
      <div className="diagram-area">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          style={{ width: "100%", height: "90vh" }}
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
};

export default DiagramFlow;
