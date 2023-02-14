import { useState, useEffect } from 'react'

const useButtonNumbers = (currentPage: number, totalNrOfPages: number): number[] => {
  const [pageNumbers, setPageNumbers] = useState<number[]>([])

  useEffect(() => {
    let startNumberStartPage = currentPage - 2
    let endNumberStartPage = currentPage + 2
    if (startNumberStartPage - 2 <= 0) {
      startNumberStartPage = 1
      endNumberStartPage = startNumberStartPage + 4
    }
    if (totalNrOfPages - currentPage <= 1) {
      endNumberStartPage = totalNrOfPages
    }
    const buttonNumbers: number[] = []

    for (let i = startNumberStartPage; i <= endNumberStartPage; i++) {
      buttonNumbers.push(i)
    }
    setPageNumbers(buttonNumbers)
  }, [currentPage, totalNrOfPages])
  return pageNumbers
}

export default useButtonNumbers
