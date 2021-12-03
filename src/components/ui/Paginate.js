import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";

export default function Paginate({ count, handleChangePage }) {
  const handleChangePaginate = (e, page) => {
    handleChangePage(page);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ margin: "1rem" }}
    >
      <Stack spacing={2}>
        <Pagination
          count={count}
          color="primary"
          onChange={handleChangePaginate}
        />
      </Stack>
    </Grid>
  );
}
