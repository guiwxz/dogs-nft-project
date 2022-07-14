import React from "react";
import moment from "moment";
import {
  EditRowInput,
  Table,
  TableHeader,
  TableRow,
  TableRowData,
  TableTitle,
  TableWrapper,
} from "./index.style";
import { FiCheckSquare } from "react-icons/fi";
import { DogsNFTType } from "../../store/dogs/dogs.types";

interface DataTableProps {
  data: any[];
  onRowClick?(dogs: DogsNFTType): void;
  columns: {
    name: string;
    label: string;
    /** OBS: removeAction prop must have just one per column array */
    removeAction?: boolean;
    dateFormat?: boolean;
    icons?: {
      icon: React.ReactElement;
      onClick?(dog: DogsNFTType): void;
    }[];
  }[];
}

const DataTable: React.FC<DataTableProps> = ({ data, columns, onRowClick }) => {
  const [openEditInput, setOpenEditInput] = React.useState<{
    open: boolean;
    row: string | null;
  }>({ open: false, row: null });

  const [editedTitle, setEditedTitle] = React.useState("");

  const pushActionToRightStyle = React.useMemo(() => ({
    display: 'flex',
    justifyContent: 'flex-end',
  }), [])

  const _dateFormat = (date: string) => {
    return moment(date).format('DD/MM/YY HH:mm');
  }

  return (
    <TableWrapper>
      <Table cellPadding={10} cellSpacing={0}>
        <TableHeader>
          <TableRowData style={{ width: "20px" }}></TableRowData>
          {columns.map((column) => {
            if (column.removeAction) {
              return (
                <TableTitle key={column.label}>
                  <div style={pushActionToRightStyle}>
                    {column.label}
                  </div>
                </TableTitle>
              )
            }
            return <TableTitle key={column.label}>{column.label}</TableTitle>
          })}
        </TableHeader>

        {data.map((it, i) => (
          <TableRow key={it.name}>
            <TableRowData style={{ width: "20px" }}>{i + 1}.</TableRowData>
            {columns.map(({ name, icons, removeAction, dateFormat }) => {
              if (name === "action") {
                return (
                  <TableRowData key={name+i} style={removeAction ? {...pushActionToRightStyle } : {}}>
                    {icons?.map(({ icon, onClick }) => {
                      return (
                        <div
                          key={icon.toString()}
                          id={removeAction ? "removeButton" : ''}
                          onClick={onClick ? () => onClick(it) : () => {}}
                          style={{
                            float: "left", // kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk funcionou perfeitamente
                            paddingLeft: icons.length == 1 ? "15px" : "0",
                            width: "20px",
                            cursor: "pointer",
                          }}
                        >
                          {icon}
                        </div>
                      );
                    })}
                  </TableRowData>
                );
              }
              if (openEditInput.open && openEditInput.row == it[name]) {
                return (
                  <TableRowData
                    key={name+i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <EditRowInput
                      name="a"
                      value={editedTitle}
                      spellCheck={false}
                      onChange={(e) => setEditedTitle(e.target.value)}
                    />
                    <FiCheckSquare
                      size={18}
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        setOpenEditInput({ open: false, row: null })
                      }
                    />
                  </TableRowData>
                );
              }
              return (
                <TableRowData
                  key={name+i}
                  id="openEditModal"
                  onDoubleClick={onRowClick ? () => onRowClick(it) : () => {}}
                  //width="30%"
                  // onDoubleClick={() => {
                  //   setOpenEditInput({ open: true, row: it[name] });
                  //   setEditedTitle(it[name]);
                  // }}
                >
                  {dateFormat ? _dateFormat(it[name]) : it[name]}
                </TableRowData>
              );
            })}
          </TableRow>
        ))}
      </Table>
    </TableWrapper>
  );
};

export default DataTable;
