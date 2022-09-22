import { TableRoot } from './StyledPrimitives/TableRoot'
import { TableHeading } from './StyledPrimitives/TableHeading'
import { TableBody } from './StyledPrimitives/TableBody'

type TableProps = {
  columns: any[]
  data: any[]
  stripped?: boolean
}

export const Table = ({
  columns,
  data,
  stripped = false
}: TableProps) => {
  return (
    <div className="container w-full mx-auto">
      <TableRoot>
        <TableHeading columns={columns} />
        <TableBody
          stripped={stripped}
          columns={columns}
          data={data}
        />
      </TableRoot>
    </div>
  )
}