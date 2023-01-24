import { api } from '../lib/axios'
import { useEffect, useState } from 'react'
import { format, parseISO } from 'date-fns'

type listDolarProps = {
  cotacaoCompra: number
  cotacaoVenda: number
  dataHoraCotacao: string
}[]

export function Dolar() {
  const [list, setList] = useState<listDolarProps>([])

  function coletaDados() {
    api.get('').then((response) => setList(response.data.value))
  }

  useEffect(() => {
    coletaDados()
  }, [])

  return (
    <>
      <div className="flex gap-10">
        <div>Data</div>
        <div>Cotacao Compra</div>
        <div>Cotacao Venda</div>
      </div>
      <div>
        {list.length > 0 &&
          list.map((cotacao) => (
            <div key={Math.random() * 1000} className="flex gap-10">
              <div className="">
                {format(parseISO(cotacao.dataHoraCotacao), 'dd/MM/yyyy')}
              </div>
              <div className="">{cotacao.cotacaoCompra.toFixed(4)}</div>
              <div className="">{cotacao.cotacaoVenda.toFixed(4)}</div>
            </div>
          ))}
      </div>
    </>
  )
}
