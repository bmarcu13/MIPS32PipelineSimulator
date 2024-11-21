export default function MemoryList({ values }) {
    return (
        <div>
            {values.map((data, index) => {
                return (
                    <div
                        key={index}
                        className="flex flex-1 border-t border-slate-700"
                    >
                        <div>{index}</div>
                        <div>{data}</div>
                    </div>
                );
            })}
        </div>
    );
}
