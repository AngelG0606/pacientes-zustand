import type { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"
import { usePatientStore } from "../store/store"
import { toast } from "react-toastify"

type PatientDetailsProps = {
  patient : Patient
}

export default function PatientDetails({patient} : PatientDetailsProps) {

  const deletePatient = usePatientStore(state => state.deletePatient)
  const getPatientById = usePatientStore(state => state.getPatientById)

  const handleClickDelete = (id : Patient['id']) => {
    deletePatient(id)
    toast.success('Paciente Eliminado Correctamente')
  }

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
    
      <PatientDetailItem label="ID" data={patient.id}/>
      <PatientDetailItem label="Nombre" data={patient.name}/>
      <PatientDetailItem label="Nombre dueño" data={patient.caretaker}/>
      <PatientDetailItem label="correo" data={patient.email}/>
      <PatientDetailItem label="fecha alta" data={patient.date.toString()}/>
      <PatientDetailItem label="sintomas" data={patient.symptoms}/>

      <div className="flex-col md:flex justify-between gap-3 mt-10">
          <button className="bg-cyan-400 hover:bg-cyan-500 py-2 px-10 text-white font-bold rounded uppercase cursor-pointer transition-colors"
            type="button"
            onClick={() => getPatientById(patient.id)}
          >
            Editar
          </button>

          <button className="bg-red-400 hover:bg-red-500 py-2 px-10 text-white font-bold rounded uppercase cursor-pointer transition-colors"
            type="button"
            onClick={() => handleClickDelete(patient.id)}
          >
            Eliminar
          </button>
      </div>

    </div>
  )
}
