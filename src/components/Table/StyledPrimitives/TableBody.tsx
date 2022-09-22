import classnames from "classnames";

export const TableBody = ({ stripped, data, columns }) => {
  return (
    <tbody className="flex-1 sm:flex-none">
      {data.map((item, idx) => (
        <tr
          key={`${idx}-${item.name}`}
          className={classnames(
            item.active
              ? "bg-red-800" 
              : stripped && "even:bg-white odd:bg-green-100",
            "border-green-400 border-b flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0"
          )}
        >
          {columns.map((column, i) => (
            <td key={`${idx}-${i}-${column.name}`}>
              <div
                className={classnames(
                  "flex",
                  "justify-between",
                  "items-center",
                  "text-emerald-800",
                  column.title === "Default" && "font-semibold",
                  "py-2",
                  "px-3",
                  "gap-2",
                )}
              >
                <span className={`${item.active && 'text-white'}`}>{item[column.itemField]}</span>
                {column.action?.(item)}
              </div>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
