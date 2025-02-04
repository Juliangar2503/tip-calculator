import { Dispatch, SetStateAction } from "react"

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type TipPercentageFormProps = {
  //Dispatch = disparar una acción
  setTip: Dispatch<SetStateAction<number>>,
  tip: number
}

export default function TipPercentageForm({ setTip, tip }: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      <form>
        {
          tipOptions.map((tipOption) => (
            <label key={tipOption.id} className="flex items-center">
              <input
                type="radio"
                name="tip"
                value={tipOption.value}
                onChange={e => setTip(+e.target.value)} //Se pone el + para transformar el string en un number
                className="mr-2"
                checked={tip === tipOption.value}
              />
              <p className="font-black">{tipOption.label}</p>
            </label>
          ))
        }
      </form>
    </div>
  )
}
