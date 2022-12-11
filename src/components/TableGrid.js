import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import data from "../context/data";
import { darken, lighten } from '@mui/material/styles';

const columns = [
    {
        field: "first_name",
        headerName: "First name",
        width: 150,
        editable: true
    },
    {
        field: "last_name",
        headerName: "Last name",
        width: 150,
        editable: true
    },
    {
        field: "gender",
        headerName: "Gender",
        type: "number",
        width: 110,
        editable: true
    },
    {
        field: "fullName",
        headerName: "Full name",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 160,
        valueGetter: (params) =>
        `${params.row.first_name || ""} ${params.row.last_name || ""}`
    },
    {
        field: "email",
        headerName: "Email",
        width: 250,
        editable: true
    },
    {
        field: "mobile",
        headerName: "Phone",
        width: 150,
        editable: true
    },
    {
        field: "area",
        headerName: "Area",
        width: 180,
        editable: true
    },
    {
        field: "airport code",
        headerName: "Airport Code",
        width: 120,
        editable: true
    },
    {
        field: "status",
        headerName: "Status",
        width: 120,
        editable: false
    }
];

const rows = data;

const getTrueColor = "#99ffaf";
const getFalseColor = "#ff858d";

export default function TableGrid() {

    return (
        <Box
        sx={{
        height: 400,
        width: '100%',
        '& .super-app-theme--true': {
            bgcolor: getTrueColor,
        },
        '& .super-app-theme--false': {
            bgcolor: getFalseColor,
        },
        height: 700
        }}
    >
        <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        experimentalFeatures={{ newEditingApi: true }}
        getRowClassName={(params) => `super-app-theme--${params.row.status}`}
        />
    </Box>
    );
}
