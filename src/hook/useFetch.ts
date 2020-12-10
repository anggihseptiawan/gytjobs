const useFetch = async (keyword, location) => {
  const getData = await fetch(`https://jobs.github.com/positions.json?description=${keyword}&location=${location}`)
  const res = await getData.json()
  return res
}

export default useFetch
