"use client";

import Diagram from "@/components/diagram";
import useWebSocket from "@/hooks/useWebSocket";
import { useEffect, useRef, useState } from "react";

const valuesPlaceholders = {
    if_id: {
        pc: 4,
        instr: 0x10586f21,
    },
    id_ex: {
        pc: 4,
        rd1: "rd1_val",
        rd2: "rd2_val",
        sa: "sa_val",
        opExt: "op_ext_val",
        func: "func_val",
        rt: "rt_val",
        rd: "rd_val",
        ctrlSig: {
            AluSrc: true,
            RegDst: true,
            aluOp: 0,
        },
    },
    ex_mem: {
        branchAddr: "branch_val",
        zero: true,
        aluRes: "alu_res_val",
        rd2: "rd2_val",
        dst: "dst_val",
        ctrlSig: {
            Beq: true,
            Bgtz: true,
            Bne: true,
            MemWrite: true,
        },
    },
    mem_wb: {
        memData: "data_val",
        aluRes: "alu_res_val",
        dst: "dst_val",
        ctrlSig: {
            MemToReg: true,
        },
    },
    programCounter: "pc_val",
    registerFile: [
        "val0",
        "val1",
        "val2",
        "val3",
        "val4",
        "val5",
        "val6",
        "val7",
        "val8",
        "val9",
        "val10",
        "val11",
        "val12",
        "val13",
        "val14",
        "val15",
        "val16",
        "val17",
        "val18",
        "val19",
        "val20",
        "val21",
        "val22",
        "val23",
        "val24",
        "val25",
        "val26",
        "val27",
        "val28",
        "val29",
        "val30",
        "val31",
    ],
    memory: [
        "val0",
        "val1",
        "val2",
        "val3",
        "val4",
        "val5",
        "val6",
        "val7",
        "val8",
        "val9",
        "val10",
        "val11",
        "val12",
        "val13",
        "val14",
        "val15",
        "val16",
        "val17",
        "val18",
        "val19",
        "val20",
        "val21",
        "val22",
        "val23",
        "val24",
        "val25",
        "val26",
        "val27",
        "val28",
        "val29",
        "val30",
        "val31",
    ],
};

const instructionsPlaceholders = [];

let commands = {
    tick: {
        command: "tick",
    },
    reset: {
        command: "reset",
    },
    translateInstructions: {
        command: "translateInstructions",
        instructions: "",
    },
};

export default function Flow() {
    const handleWebSocketMessage = (message) => {
        if (message == null) {
            return;
        }

        let json = JSON.parse(message);
        console.log(json);
        switch (json.type) {
            case "updateUi":
                setValues(json.payload);
                break;
            case "response":
                if (json.payload.status == "error") {
                    setErrorMessages(json.payload.message);
                } else if (json.payload.status == "success") {
                    validInstructions.current = [].concat(textFieldRef.current.value);
                    console.log(validInstructions.current);
                    setInstructions(
                        validInstructions.current.concat(
                            Array(64 - validInstructions.current.length).fill("noop")
                        )
                    );
                    setErrorMessages("");
                    setIsPopupVisible(false);
                    console.log("modifying...");
                }
                textFieldRef.current.disabled = false;
                break;
        }
    };

    const { sendMessage } = useWebSocket("ws://localhost:8080/ws", handleWebSocketMessage);

    function sendInstructions(instructions) {
        let json = {
            command: "translateInstructions",
            instructions: instructions,
        };
        sendMessage(JSON.stringify(json));
    }

    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);
    const [values, setValues] = useState(valuesPlaceholders);
    const [instructions, setInstructions] = useState(instructionsPlaceholders);

    const textFieldRef = useRef(null);
    const validInstructions = useRef([]);

    return (
        <div
            className="flex"
            style={{ height: "100vh", width: "100vw" }}
        >
            <div
                className="absolute flex items-center justify-center w-full h-full bg-black/25"
                style={{ visibility: isPopupVisible ? "visible" : "hidden" }}
            >
                <div className="flex flex-col p-2 bg-white rounded w-4/12 drop-shadow-2xl">
                    <div className="flex flex-row justify-between items-center">
                        <div className="">Instructions</div>
                        <div
                            onClick={() => {
                                setIsPopupVisible(false);
                                setErrorMessages("");
                            }}
                            className="rotate-45 text-2xl hover:cursor-pointer"
                        >
                            +
                        </div>
                    </div>
                    <textarea
                        ref={textFieldRef}
                        name="Text1"
                        cols="40"
                        rows="5"
                        className="border rounded"
                    ></textarea>
                    <div className="flex flex-row justify-between items-center">
                        <div className="text-red-600 border-l-2 border-red-600 pl-2 text-sm">
                            {errorMessages}
                        </div>
                        <button
                            onClick={() => {
                                let text = textFieldRef.current.value;
                                console.log(text);
                                let tmpInstructionList = text
                                    .trim()
                                    .split("\n")
                                    .map((instr) => instr.trim());
                                sendInstructions(tmpInstructionList);
                                textFieldRef.current.disabled = true;
                            }}
                            className="self-end border-2 rounded-full px-2 mt-1"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center grow-0 bg-red-100 px-3 pt-4 my-3 ml-2 rounded-lg">
                <b>Controls</b>
                <button
                    className="
                        h-fit border-2 rounded-full border-red-500 px-4 py-1 mt-4 font-bold text-red-500
                        hover:text-white hover:bg-red-500
                    "
                    onClick={() => sendMessage(JSON.stringify(commands.tick))}
                >
                    Tick
                </button>
                <button
                    onClick={() => sendMessage(JSON.stringify(commands.reset))}
                    className=" 
                        h-fit border-2 rounded-full border-red-500 px-4 py-1 mt-4 font-bold text-red-500 
                        hover:text-white hover:bg-red-500
                    "
                >
                    Reset
                </button>
                <button
                    onClick={() => {
                        textFieldRef.current.value = validInstructions.current.join("\n");
                        setIsPopupVisible(true);
                    }}
                    className="mt-4"
                >
                    Modify Code
                </button>
            </div>
            <Diagram
                values={values}
                instructions={instructions}
            />
        </div>
    );
}
