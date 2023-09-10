import { createContext, PropsWithChildren } from 'react'

import DataServiceImpl from '../service/DataService'

interface DataContextType {
  dataService: DataServiceImpl
}

export const DataContext = createContext<DataContextType | null>(null)

function DataProvider({ children, dataService }: PropsWithChildren<DataContextType>) {
  return <DataContext.Provider value={{ dataService }}>{children}</DataContext.Provider>
}

export default DataProvider
