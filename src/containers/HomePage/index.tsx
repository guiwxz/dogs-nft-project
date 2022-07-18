import { useRouter } from 'next/router';
import React from 'react';
import { Grid } from '../../components/Grid';
import PaperCard from '../../components/PaperCard';

const HomePage: React.FC = () => {
  const router = useRouter();

  return (
    <Grid container style={{ margin: '0 auto' }} onClick={() => router.push('/mell')}>
      <Grid item xs={12}>
        <Grid container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Grid item xs={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <PaperCard />
          </Grid>
          <Grid item xs={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <PaperCard />
          </Grid>
          <Grid item xs={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <PaperCard />
          </Grid>
          <Grid item xs={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <PaperCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HomePage;