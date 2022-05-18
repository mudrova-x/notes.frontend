// вспомогательная функция для помещения полученного токена в локальное хранилище

export function setAuthHeader(token: string | null | undefined) {
  localStorage.setItem("token", token ? token : "")
}
