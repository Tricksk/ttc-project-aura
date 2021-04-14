import React from 'react';

import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { NoFinalBorder } from './styles';

interface TableProps {
  columns: any[],
  rows: APTableRow[],
  onDelete: any,
  onEdit: any
}

export interface APTableRow {
  [name: string]: any
}

const APTable: React.FC<TableProps> = (props) => {
  const { columns, rows, onEdit, onDelete } = props;

  return (
    <TableContainer component={Paper} elevation={1} style={{ background: '#49484605', padding: '0px 16px' }}>
      <Table>
        <TableHead>
          <TableRow>
            {
              columns.map(column => (
                <TableCell align="center" key={column.field}>
                  <strong style={{ color: 'var(--gray-4)' }} >{column.headerName}</strong>
                </TableCell>
              ))
            }
            <TableCell align="center">Opções</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rows.map((row, i) => (
              <TableRow key={i}>
                {
                  columns.map((column, ii) => (
                    <TableCell size="small" align="center" key={i + '+' + ii}>
                      <strong style={{ color: 'var(--gray-2)' }} >{row[column.field]}</strong>
                    </TableCell>
                  ))
                }
                <TableCell size="small" align="center">
                  <IconButton onClick={() => onEdit(row)} >
                    <FiEdit size={20} />
                  </IconButton>
                  <IconButton onClick={() => onDelete(row)}>
                    <FiTrash2 size={20} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
        <NoFinalBorder>
          <TableRow>
            <TablePagination
              count={10}
              page={0}
              rowsPerPage={10}
              labelDisplayedRows={(pag) => <span>{pag.from}-{pag.to} de {pag.count}</span>}
              rowsPerPageOptions={[]}
              variant="footer"
              onChangePage={() => { }}
            />
          </TableRow>
        </NoFinalBorder>
      </Table>
    </TableContainer>
  )
}

export default APTable;