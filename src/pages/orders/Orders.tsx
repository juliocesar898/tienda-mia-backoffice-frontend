import "./orders.scss";
import DataTable from "../../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import { useQuery } from '@tanstack/react-query';

const columns: GridColDef[] = [
  {
    field: "status",
    type: "string",
    headerName: "Status",
    width: 150,
  },
  {
    field: "shipping_address",
    type: "string",
    headerName: "Shipping Address",
    width: 200,
  },
  {
    field: "shipping_promise",
    headerName: "Shipping Promise",
    type: "string",
    width: 200,
  },
  {
    field: "created_at",
    headerName: "Created At",
    width: 200,
    type: "string",
  }
];

const Orders = () => {

  // TEST THE API

  const { isLoading, data } = useQuery({
    queryKey: ["allproducts"],
    queryFn: () =>
      fetch("http://localhost:4000/api/orders").then(
        (res) => res.json()
      ),
  });

  return (
    <div className="products">
      <div className="info">
        <h1>Orders</h1>
      </div>
      {/* <DataTable slug="products" columns={columns} rows={orders} /> */}
      {/* TEST THE API */}

      {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="products" columns={columns} rows={data} />
      )}
    </div>
  );
};

export default Orders;
