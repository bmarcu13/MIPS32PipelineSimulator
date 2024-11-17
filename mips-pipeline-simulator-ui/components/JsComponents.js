export function InterStageRegister({ data }) {
    return (
        <div className="m-1 rounded border border-black w-fit h-96 bg-zinc-200">
            <div className="bg-red-700 text-center font-semibold text-white">
                {data.registerName}
            </div>
            <div>
                {data.fields.map((field, index) => {
                    return (
                        <div className="text-center my-1.5 mx-1 rounded border border-black bg-white">
                            <div className="border-b bg-red-300">
                                {field.name}
                            </div>
                            <div className="px-1">{field.value}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
