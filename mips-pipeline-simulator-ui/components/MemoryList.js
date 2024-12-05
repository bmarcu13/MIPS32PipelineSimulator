export default function MemoryList({ values, activeEntry }) {
    return (
        <div>
            {values.map((data, index) => {
                let conditionalClassName = "";
                if (activeEntry !== undefined && index == activeEntry) {
                    conditionalClassName = "bg-red-300";
                }
                return (
                    <div
                        key={index}
                        className={`flex flex-1 border-t border-slate-700 justify-between ${
                            activeEntry !== undefined && activeEntry - 1 == index
                                ? "bg-red-200"
                                : "bg-transparent"
                        }`}
                    >
                        <div>{index}</div>
                        <div>{data}</div>
                    </div>
                );
            })}
        </div>
    );
}
