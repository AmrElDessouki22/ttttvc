'use client'

import { useState, useEffect } from 'react'

interface ApiResponse<T> {
  data: T | null
  error: string | null
  loading: boolean
}

export function useApi<T>(url: string): ApiResponse<T> {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(url)
        if (!response.ok) throw new Error('Network response was not ok')
        const result = await response.json()
        setData(result)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, error, loading }
}