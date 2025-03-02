type ContentEstadisticsProps = {
    children: React.ReactNode
    title: string
}


export const ContentEstadistics = ({children, title}:ContentEstadisticsProps) => {
  return (
    <div className="text-m-gray-text bg-m-purple-bg-high rounded-lg flex space-x-2 mb-2 px-4 py-1.5">
        <p className="border-r pr-4 border-m-gray-bg py-2">{title}</p>
        <p className="py-2 pl-2">{children}</p>
    </div>
  )
}
