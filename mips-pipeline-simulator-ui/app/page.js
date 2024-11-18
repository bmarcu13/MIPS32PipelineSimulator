"use client";

import Diagram from "@/components/diagram";
import { InterStageRegister } from "@/components/JsComponents";
import useWebSocket from "@/hooks/useWebSocket";
import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const edges = [
    { id: "1-2", source: "1", target: "2", label: "to the", type: "step" },
];

const nodes2 = [
    {
        id: "1",
        position: { x: 10, y: 0 },
        data: {
            name: "IF/ID",
            fields: [
                { name: "ProgCnt", value: 4556145 },
                { name: "Instr", value: 45448621 },
            ],
        },
        type: "interStageRegister",
    },
    {
        id: "2",
        position: { x: 400, y: 0 },
        data: {
            name: "ID/EX",
            fields: [{ name: "ProgCnt", value: 4556145 }],
        },
        type: "interStageRegister",
    },
    {
        id: "3",
        position: { x: 800, y: 0 },
        data: {
            name: "EX/MEM",
            fields: [{ name: "ProgCnt", value: 4556145 }],
        },
        type: "interStageRegister",
    },
];

const types = { interStageRegister: InterStageRegister };

export default function Flow() {
    // const { isConnected, message, sendMessage } = useWebSocket(
    //     "ws://localhost:8080/ws"
    // );

    return (
        <div style={{ height: "100vh", width: "100%" }}>
            {/* <div>Message from server: </div> */}
            <Diagram />
        </div>
    );
}
