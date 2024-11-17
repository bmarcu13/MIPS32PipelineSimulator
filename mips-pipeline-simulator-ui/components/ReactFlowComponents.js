"use client";

import { Handle, Position } from "@xyflow/react";

export function InterStageRegister({ data }) {
    return (
        <div className="rounded border border-black w-fit min-w-40">
            <div className="bg-red-700 text-center font-semibold text-white">
                {data.name}
            </div>
            {data.fields.map((field, index) => {
                return (
                    <div className="" key={index}>
                        <Handle
                            type="target"
                            position={Position.Left}
                            id={index}
                            isConnectable={true}
                            style={{
                                top: 25 + 12 * (2 * index + 1),
                                padding: 4,
                            }}
                        />
                        <Handle
                            type="source"
                            position={Position.Right}
                            id={index}
                            isConnectable={true}
                            style={{
                                top: 25 + 12 * (2 * index + 1),
                                padding: 4,
                            }}
                        />
                        <div className="px-1.5">
                            {field.name}={field.value}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export function MemoryComponent({ data }) {
    return <div className="rounded border border-black w-fit min-w-48"></div>;
}
