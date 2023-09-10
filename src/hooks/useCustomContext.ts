import { Context, useContext } from 'react'

export const useCustomContext = <T>(customContext: Context<T>) => {
  const context = useContext(customContext)
  if (context === null) {
    throw Error('Context is null!')
  }
  return context
}
