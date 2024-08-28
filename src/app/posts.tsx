// export const revalidate = 0

const Posts = async () => {
  const res = await fetch('https://api.adviceslip.com/advice', {
    next: { revalidate: 2 },
  })
  //   const res = await fetch('https://api.adviceslip.com/advice')
  const data = await res.json()
  const randomText = data.slip.advice

  console.log(randomText)

  return (
    <>
      <strong>{randomText}</strong>
    </>
  )
}

export default Posts
