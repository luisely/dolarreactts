import axios from 'axios'
import { format, subDays } from 'date-fns'

const currentDate = format(new Date(), 'MM-dd-yyyy')
const dateBegin = format(subDays(new Date(), 30), 'MM-dd-yyyy')

export const api = axios.create({
  baseURL: `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@dataInicial='${dateBegin}'&@dataFinalCotacao='${currentDate}'&$top=1095&$orderby=dataHoraCotacao%20desc&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`,
})
