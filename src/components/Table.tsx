import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { User } from "@/utils/userListing";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "first_name", headerName: "First name", width: 150 },
  { field: "last_name", headerName: "Last name", width: 150 },
  { field: "phone", headerName: "Phone", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "company", headerName: "Company", flex: 1 },
  { field: "job_title", headerName: "Job Title", flex: 1 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable({ userList }: { userList: User[] }) {
  return (
    <Paper sx={{ height: 629, width: "100%" }}>
      <DataGrid
        rows={userList}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        disableRowSelectionOnClick={true}
        sx={{
          border: 0,
          "& .MuiDataGrid-row:nth-of-type(odd)": {
            backgroundColor: "#f5f5f5",
          },
          "& .MuiDataGrid-row:nth-of-type(even)": {
            backgroundColor: "#ffffff",
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "#e0e0e0",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#1976d2",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: 'bold',
            fontSize: '16px'
          },
          "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-cell:focus": {
            outline: "none",
            boxShadow: "none",
          },
        }}
      />
    </Paper>
  );
}
