import { usePatientStore } from "../store/store" 
import PatientDetails from "./PatientDetails"

export default function PatientsList() {

    const patients = usePatientStore(state => state.patients)
  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
        {patients.length ? (
            <>
                <h2 className="text-2xl font-bold">Listado de <span className="text-indigo-600">pacientes</span> </h2>
                <p className="text-xl font-bold">Administra tus  <span className="text-indigo-600">pacientes y citas</span> </p>
                {patients.map(patient => (
                    <PatientDetails 
                        patient={patient}
                        key={patient.id}
                    />
                ))}
            </>
        ) :
        (
           <>
                <p className="font-black text-3xl text-center">No hay pacientes.</p>
                <p className="text-xl font-bold">Comienza agregando pacientes <span className="text-indigo-600">y aparecerán aqui</span> </p>
           </>
        )}
    </div>
  )
}
