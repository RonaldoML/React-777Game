import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useSelector } from "react-redux";

export const Table = () => {
  const { records } = useSelector((state) => state.play);
  return (
    <div style={{ height: "50vh", width: "100%", marginBottom: "150px" }}>
      <DataGrid
        columns={[
          { field: "id" },
          { field: "username", flex: 1 },
          { field: "time", flex: 1 },
          { field: "slots", flex: 1 },
        ]}
        rows={records}
        rowsPerPageOptions={[]}
      />
    </div>
  );
};
