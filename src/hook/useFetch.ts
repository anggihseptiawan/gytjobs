const useFetch = async () => {
  const getData = await fetch('https://jobs.github.com/positions.json?description=python&location=germany')
  const res = await getData.json()
  return res
}

export default useFetch
