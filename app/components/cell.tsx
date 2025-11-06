type cellProps = {
    id: number;
    go: string;
    setGo: React.Dispatch<React.SetStateAction<string>>;
    cells: string[];
    setCells: React.Dispatch<React.SetStateAction<string[]>>;
    cell: string;
    winningMessage: string;
};

const Cell = ({ id, go, setGo, cells, setCells, cell, winningMessage }: cellProps) => {

    const handleClick = () => { 
        const nottaken = !cells[id]; 
        if (winningMessage) {
            return
        }

        if (nottaken) {
            if (go === "circle") {
                handlecellChange("circle");
                setGo("cross");
            } else if (go === "cross") {
                handlecellChange("cross");
                setGo("circle");
                }
        } 
    };
    const handlecellChange = (cellToChange: string) => {
        const copyCells = [...cells];
        copyCells[id] = cellToChange;
        setCells(copyCells);
    }

    return <div className="square" onClick={handleClick}>
        <div className={cell}>{cell ? (cell === "circle" ? "O" : "X") : ""}</div>
    </div>;


};

export default Cell;