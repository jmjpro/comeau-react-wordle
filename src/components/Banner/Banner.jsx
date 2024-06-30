function Banner({ mood, children }) {
  return <div className={`${mood} banner`}>{children}</div>
}

export default Banner
