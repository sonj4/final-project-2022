import React from 'react'
import useAxios from '../hooks/useAxios'

export default function Tag({url}) {
    const { response, loading, error } = useAxios({ method: 'get', url })
  return (
    <button>{response.name}</button>
  )
}
