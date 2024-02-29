import React from 'react';
import Layout from '../components/Layout';
import Table from '../components/Table';
import TableRow from '../components/TableRow';
import { sampleCarData } from '../utils/sample-data'; 

const IndexPage = () => (
  <Layout title="Teste Tecnico Frontend">
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
  </Layout>
);

export default IndexPage;
