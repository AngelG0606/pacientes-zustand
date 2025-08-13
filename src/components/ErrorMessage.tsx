
export default function ErrorMessage({children} :{children : React.ReactNode}) {
  return (
    <div className="p-2 w-full text-center bg-red-200 text-red-600 uppercase font-bold text-sm mt-1">
        {children}
    </div>
  )
}
