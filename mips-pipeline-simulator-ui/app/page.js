import { InterStageRegister } from "@/components/ReactFlowComponents";
import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const edges = [
    { id: "1-2", source: "1", target: "2", label: "to the", type: "step" },
];

const nodes1 = [
    {
        id: "1",
        data: { label: "Hello" },
        position: { x: 0, y: 0 },
        type: "input",
    },
    {
        id: "2",
        data: { label: "World" },
        position: { x: 100, y: 100 },
    },
];

const nodes2 = [
    {
        id: "1",
        position: { x: 0, y: 0 },
        data: [{ name: "ProgCnt", value: 4556145 }],
        type: "interStageRegister",
    },
    {
        id: "2",
        position: { x: 400, y: 0 },
        data: [{ name: "ProgCnt", value: 4556145 }],
        type: "interStageRegister",
    },
];

const types = { interStageRegister: InterStageRegister };

export default function Flow() {
    return (
        <div style={{ height: "100vh", width: "100vw" }}>
            <ReactFlow
                nodes={nodes2}
                nodeTypes={types}
                edges={edges}
            ></ReactFlow>
        </div>
    );
}
