
function AppInput({ RightIcon, LeftIcon, placeholder, style = {}, type, value, handleOnChange, disabled = false }) {
  return (
    <div
      style={style}
      className=" bg-white font-bold relative flex w-full items-center mb-5 py-3 px-2 border-2 text-black rounded"
    >
      {LeftIcon ? LeftIcon : null}
      <input disabled={disabled} onChange={handleOnChange} value={value} type={type || 'text'} placeholder={placeholder} className={"  outline-none w-full h-full text-black" + style} />
      {RightIcon ? RightIcon : null}
    </div>
  )
}

export default AppInput
