import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'User',
    dataIndex: 'user',
    sorter: (a, b) => a.user.length - b.user.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Cookie',
    dataIndex: 'cookie',
    ellipsis: true,
  },
  {
    title: 'País',
    dataIndex: 'pais',
    sorter: (a, b) => a.pais.length - b.pais.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Estado',
    dataIndex: 'estado',
    sorter: (a, b) => -1,
    sortDirections: ['descend', 'ascend'],
  },
];

export const DataTable = ({ data, loading }) => {
  return (
    <Table
      loading={loading}
      columns={columns}
      dataSource={data}
      rowKey="id"
      pagination={{
        pageSizeOptions: ["10", "20", "30", "50", "100"],
        showSizeChanger: true,
        locale: { items_per_page: "" }
      }}
    />
  )
}