import mockData from '../assets/mock_data.json'

interface DataService<T> {
  getData(): T
}

interface DataDTO {
  [timestamp: string]: {
    id: string
    value_area: number
    value_bar: number
  }
}

class DataServiceImpl implements DataService<DataDTO> {
  getData(): DataDTO {
    return mockData.response as DataDTO
  }
}

export default DataServiceImpl
