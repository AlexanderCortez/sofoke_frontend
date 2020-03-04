import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'País',
    dataIndex: 'country',
    sorter: (a, b) => a.country.length - b.country.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Cantidad',
    dataIndex: 'quantity',
    sorter: (a, b) => -1,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Entradas Hoy',
    dataIndex: 'last',
  },
];

export const DataTable = ({ data, loading }) => {
  return (
    <Table
      loading={loading}
      columns={columns}
      dataSource={data}
      rowKey="country"
      pagination={false}
    />
  )
}