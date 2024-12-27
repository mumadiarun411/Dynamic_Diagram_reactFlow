import React, { useState } from "react";

const Sidebar = ({ addNode, addEdge }) => {
  const [nodeLabel, setNodeLabel] = useState("");
  const [sourceId, setSourceId] = useState("");
  const [targetId, setTargetId] = useState("");

  const handleAddNode = () => {
    if (nodeLabel.trim()) {
      addNode(nodeLabel);
      setNodeLabel("");
    }
  };

  const handleAddEdge = () => {
    if (sourceId.trim() && targetId.trim()) {
      addEdge(sourceId, targetId);
      setSourceId("");
      setTargetId("");
    }
  };

  return (
    <div className="sidebar">
      <h3>Add Node</h3>
      <input
        type="text"
        placeholder="Node Label"
        value={nodeLabel}
        onChange={(e) => setNodeLabel(e.target.value)}
      />
      <button onClick={handleAddNode}>Add Node</button>

      <h3>Add Edge</h3>
      <input
        type="text"
        placeholder="Source ID"
        value={sourceId}
        onChange={(e) => setSourceId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Target ID"
        value={targetId}
        onChange={(e) => setTargetId(e.target.value)}
      />
      <button onClick={handleAddEdge}>Add Edge</button>
    </div>
  );
};

export default Sidebar;