export default ({
  store,
  app: {
    $axios
  },
  redirect
}) => {
  // {store, app: {$axios}, redirect} это все контекст по сути
  // можем вызывать его хуки onRequest при заждом запросе
  // хук на onResponse и onError
  // интерсетеры 
  // можем перехватывать реквест и доб данные, обработчик ошибок один, распаршивать респонс
  $axios.onRequest(request => {
    console.log('request', request)
  })

  $axios.onResponse(response => {
    console.log('response', response)
  })

  $axios.onError(function (error) {
    console.log('error.response.data', error.response.data)
  })
}
