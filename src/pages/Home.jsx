import DashboardCards from "../components/DashboardCards"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import TaskItem from "../components/TaskItem"
import { useGetTasks } from "../hooks/data/use-get-tasks"

const HomePage = () => {
  const { data, isLoading, isError } = useGetTasks()
  const tasks = Array.isArray(data) ? data : []

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full space-y-6 px-8 py-16">
        <Header subtitle="Dashboard" title="Dashboard" />
        <DashboardCards />

        <div className="grid grid-cols-[1.5fr,1fr] gap-6">
          {/* Coluna da esquerda */}
          <div className="space-y-6 rounded-[10px] bg-white p-6">
            <div>
              <h3 className="text-xl font-semibold">Tarefas</h3>
              <span className="text-sm text-brand-dark-gray">
                Resumo das tarefas disponíveis
              </span>
            </div>

            <div className="space-y-3">
              {isLoading && (
                <p className="text-sm text-brand-dark-gray">
                  Carregando tarefas...
                </p>
              )}
              {isError && (
                <p className="text-sm text-red-500">
                  Erro ao carregar tarefas.
                </p>
              )}
              {!isLoading && tasks.length === 0 && (
                <p className="text-sm text-brand-dark-gray">
                  Nenhuma tarefa encontrada.
                </p>
              )}
              {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </div>
          </div>

          {/* Coluna da direita */}
          <div className="flex items-center justify-center rounded-[10px] bg-white p-6">
            <p className="text-center text-brand-dark-gray">
              Cada pequena ação de hoje te aproxima das grandes conquistas de
              amanhã. <br />
              Faça o que precisa ser feito!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
