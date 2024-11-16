"use client";

export function InterStageRegister({ data }) {
    return (
        <div className="rounded border border-black w-fit min-w-48">
            {data.map((field, index) => {
                return (
                    <div className="m-1" key={index}>
                        {field.name}={field.value}
                    </div>
                );
            })}
        </div>
    );
}
