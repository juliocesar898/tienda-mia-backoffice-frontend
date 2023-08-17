import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./Users.scss";
import { useQuery } from '@tanstack/react-query';


const columns: GridColDef[] = [
  {
    field: "avatar",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.avatar || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "first_name",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "last_name",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "is_verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
  {
    field: "created_at",
    headerName: "Created At",
    width: 200,
    type: "string",
  }
];

const Users = () => {

  const { isLoading, data } = useQuery({
    queryKey: ["allusers"],
    queryFn: () =>
      fetch("http://localhost:4000/api/users").then(
        (res) => res.json()
      ),
  });

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
      </div>

      {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )}
    </div>
  );
};

export default Users;
