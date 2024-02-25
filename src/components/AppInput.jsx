
function AppInput({ RightIcon, LeftIcon, placeholder, style, type, value, handleOnChange, disabled = false }) {
  return (
    <div className=" bg-white relative flex w-full items-center mb-5 py-3 px-2 border-2 rounded">
      {LeftIcon ? LeftIcon : null}
      <input disabled={disabled} onChange={handleOnChange} value={value} type={type || 'text'} placeholder={placeholder} className={"  outline-none w-full h-full" + style} />
      {RightIcon ? RightIcon : null}
    </div>
  )
}

export default AppInput
