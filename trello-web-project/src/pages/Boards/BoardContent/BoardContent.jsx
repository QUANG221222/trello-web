import Box from "@mui/material/Box"
import ListColumns from "./ListColumns/ListColumns"
import { mapOrder } from "~/utils/sorts"
import {
  DndContext,
  // PointerSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors
} from "@dnd-kit/core"
import { arrayMove } from "@dnd-kit/sortable"
import { useEffect, useState } from "react"

function BoxContent({ board }) {
  // https://docs.dndkit.com/api-documenta...
  // Nếu dùng pointerSensor mặc định thì phải kết hợp với thuộc tính css touch-action: none ở những phần tử kéo thả - nhưng mà còn bug
  // const pointerSensor = useSensor(PointerSensor, {
  //   activationConstraint: { distance: 10 },
  // });
  // Yêu cầu chuột di chuyển 10px thì mới kích hoạt event, fix trường hợp click bị gọi event
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 }
  })

  // Nhấn giữ 250ms và dung sai của cảm ứng 500px thì mới kích hoạt event
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 500 }
  })

  // Ưu tiên sử dụng kết hợp 2 loại sensors là mouse và touch để có trải nghiệm trên mobile tốt nhất, không bị bug
  // const sensors = useSensors(pointerSensor);
  const sensors = useSensors(mouseSensor, touchSensor)
  const [orderedColumns, setOrderedColumns] = useState([])
  useEffect(() => {
    const orderedColumns = mapOrder(
      board?.columns,
      board?.columnOrderIds,
      "_id"
    )
    setOrderedColumns(orderedColumns)
  }, [board])

  const handleDragEnd = (event) => {
    // console.log("handleDragEnd: ", event);
    const { active, over } = event

    //Kiểm tra nếu không tồn tại over (kéo ra ngoài)
    if (!over) return

    //Nếu vị trí sau khi kéo thả khác với vị trí ban đầu
    if (active.id !== over.id) {
      //Lấy vị trí cũ từ active
      const oldIndex = orderedColumns.findIndex((c) => c._id === active.id)
      //Lấy vị trí mới từ over
      const newIndex = orderedColumns.findIndex((c) => c._id === over.id)
      //Dùng arrayMove của dnd-kit để sắp xếp lại mảng column ban đầu
      //Code của arrayMove ở đây: dnd-kit/packages/sortable/src/utilites/arrayMove.ts
      const dndOrderedColumn = arrayMove(orderedColumns, oldIndex, newIndex)
      // Dùng để xử lý gọi API
      // const dndOrderedColumnIds = dndOrderedColumn.map((c) => c._id);
      // console.log("dndOrderedColumn", dndOrderedColumn);
      // console.log("dndOrderedColumnIds", dndOrderedColumnIds);

      // Cập nhật lại state columns ban đầu sau khi kéo thả
      setOrderedColumns(dndOrderedColumn)
    }
  }
  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box
        sx={{
          width: "100%",
          height: (theme) => theme.trello.boardContentHeight,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
          p: "10px 0"
        }}
      >
        <ListColumns columns={orderedColumns} />
      </Box>
    </DndContext>
  )
}

export default BoxContent
