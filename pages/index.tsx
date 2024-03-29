import React from 'react';
import Layout from '../components/Layout';
import CardMobile from '../components/CardMobile';
import { useMediaQuery } from 'react-responsive';
import { sampleCarData } from '../utils/sample-data';
import Table from '../components/Table';
import TableRow from '../components/TableRow';

const renderMobileContent = () => (
  <div>
    {sampleCarData.map((data, index) => (
      <CardMobile
        index={index}
        key={`${data.id};${index}`}
        car={data.car}
        image={data.image}
        nextReservation={data.nextReservation}
        status={data.status}
        rating={data.rating}
      />
    ))}
  </div>
);

const renderDesktopContent = () => (
  <Table>
    {sampleCarData.map((data, index) => (
      <TableRow
        index={index}
        key={`${data.id};${index}`}
        car={data.car}
        image={data.image}
        nextReservation={data.nextReservation}
        status={data.status}
        rating={data.rating}
      />
    ))}
  </Table>
);

const IndexPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 900 });

  return (
    <Layout title="Teste Tecnico Frontend">
      {isMobile ? renderMobileContent() : renderDesktopContent()}
    </Layout>
  );
};

export default IndexPage;
