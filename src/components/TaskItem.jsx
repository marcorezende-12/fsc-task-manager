const TaskItem = ({ task }) => {
  const getStatusClasses = () => {
    if (task.status === "done") {
      // aqui eu deixo os estilos que são específicos em cada status
      return "bg-[#00ADB5] text-[#00ADB5] bg-opacity-10 "
    }

    if (task.status === "in_progress") {
      return "bg-[#FFAA04] text-[#FFAA04] bg-opacity-10 "
    }

    if (task.status === "not_started") {
      return "bg-[#35383E] text-[#35383E] bg-opacity-10"
    }
  }

  return (
    <div
      className={`flex items-center gap-2 rounded-lg px-4 py-3 text-sm ${getStatusClasses()}`} // aqui eu deixo os estilos que são comuns em todos os itens
    >
      {task.title}
    </div>
  )
}

export default TaskItem
