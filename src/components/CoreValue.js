
export default function CoreValue({value}) {
  return (
    <div className='flex flex-col items-center justify-center md:mt-3 p-2'>
      <img src={value.icon} alt="icon" className="h-16 w-16"/>
      <h3 className="font-semibold mt-2">{value.name}</h3>
      <p className="text-center text-sm mt-4">{value.text}</p>
    </div>
  )
}
