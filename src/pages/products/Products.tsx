import "./Products.scss";
import DataTable from "../../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import { useQuery } from '@tanstack/react-query';

const columns: GridColDef[] = [
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "description",
    type: "string",
    headerName: "Description",
    width: 150,
  },
  {
    field: "url",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.url || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "stock",
    headerName: "Stock",
    type: "string",
    width: 200,
  },
  {
    field: "created_at",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
];

const Products = () => {

  // TEST THE API

  const { isLoading, data } = useQuery({
    queryKey: ["allproducts"],
    queryFn: () =>
      fetch("http://localhost:4000/api/products").then(
        (res) => res.json()
      ),
  });

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
      </div>

      {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="products" columns={columns} rows={data} />
      )}
    </div>
  );
};

export default Products;
