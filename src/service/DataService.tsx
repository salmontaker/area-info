import mockData from '../assets/mock_data.json'

interface DataService<T> {
  getData(): T
}

export interface AreaData {
  timestamp: string
  id: string
  value_area: number
  value_bar: number
}

class DataServiceImpl implements DataService<AreaData[]> {
  getData(): AreaData[] {
    const data = Object.entries(mockData.response).map(([timestamp, value]) => ({
      timestamp,
      ...value,
    }))

    return data
  }
}

export default DataServiceImpl
