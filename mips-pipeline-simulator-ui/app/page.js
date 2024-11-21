"use client";

import Diagram from "@/components/diagram";
import useWebSocket from "@/hooks/useWebSocket";

const placeholders = {
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

const tickCommand = {
    command: "tick",
};

const commands = {
    tick: {
        command: "tick",
    },
    reset: {
        command: "reset",
    },
};

export default function Flow() {
    const { isConnected, message, sendMessage } = useWebSocket("ws://localhost:8080/ws");

    return (
        <div
            className="flex"
            style={{ height: "100vh", width: "100vw" }}
        >
            <div className="flex flex-col items-center grow-0 bg-zinc-100 px-3 pt-4 my-3 ml-2 rounded-lg">
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
            </div>
            <Diagram values={message == null ? placeholders : JSON.parse(message)} />
        </div>
    );
}
