import { Grid, Typography } from "@mui/material";
import React from "react";

const Home: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} order={{ xs: 1 }}>
        <Typography variant="h5">Acasa</Typography>
      </Grid>
      <Grid item xs={12} md={6} order={{ xs: 2 }}>
        <Typography variant="body1">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        style={{ marginTop: "2rem" }}
        order={{ xs: 4, md: 3 }}
      >
        <Typography variant="body1">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        style={{ marginTop: "2rem" }}
        order={{ xs: 3, md: 4 }}
      >
        <Typography variant="h5">This but a scratch</Typography>
      </Grid>
      <Grid item xs={12} md={6} style={{ marginTop: "2rem" }} order={{ xs: 5 }}>
        <Typography variant="h5">Or is it?</Typography>
      </Grid>
      <Grid item xs={12} md={6} style={{ marginTop: "2rem" }} order={{ xs: 6 }}>
        <Typography variant="body1">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
