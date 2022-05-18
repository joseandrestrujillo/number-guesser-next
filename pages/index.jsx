import Formulario from "../components/Formulario"
import ShowNumber from "../components/ShowNumber"
import AppProvider from "../components/AppProvider"

export default function Home() {
  return (
    <>
      <AppProvider>
        <Formulario/>
        <ShowNumber/>
      </AppProvider>
    </>
  )
}
