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
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b-2 border-zinc-500">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-bold text-white px-6 py-2 text-center"
                    >
                      Data
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold text-white px-6 py-2 text-center"
                    >
                      Compra
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-bold text-white px-6 py-2 text-center"
                    >
                      Venda
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {list.length > 0 &&
                    list.map((cotacao, i) => {
                      return (
                        <tr
                          key={i}
                          className="border-b border-zinc-500 transition duration-300 ease-in-out hover:bg-zinc-700"
                        >
                          <td className="text-xs text-white font-medium py-2 text-center">
                            {format(
                              parseISO(cotacao.dataHoraCotacao),
                              'dd/MM/yyyy',
                            )}
                          </td>
                          <td className="text-xs text-white font-medium py-2 text-center">
                            {cotacao.cotacaoCompra.toFixed(4)}
                          </td>
                          <td className="text-xs text-white font-medium py-2 text-center">
                            {cotacao.cotacaoVenda.toFixed(4)}
                          </td>
                        </tr>
                      )
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
