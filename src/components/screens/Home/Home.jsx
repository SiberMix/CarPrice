import styles from './Home.module.css'
import { cars  as carsData} from './cars'
import { CarItem } from './car-item/CarItem'
import CreateCarForm from './create-car-form/CreateCarForm'
import { useState } from 'react'
function Home() {
    const [cars, setCars] = useState(carsData)
    return (
      <div>
        <h1>
          Каталог японских автомобилей в Новосибирске
        </h1>
        <CreateCarForm  setCars={setCars}/>  
        <div>
            {cars.length ? (
                cars.map(car => (<CarItem key={car.id} car={car}/>)
            )): <p>Машин нету</p>}

        </div>
      </div>
    )
  }
  
  export default Home