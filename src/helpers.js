
export function errorResponse (message) {
  return {
    success: false,
    data: { message },
  }
}

export function successResponse (data) {
  return {
    success: true,
    data,
  }
}

export async function processResponse (response) {
  const data = await response.json()

  if (response.ok) {
    return successResponse(data)
  }

  return errorResponse(`Request failed with status: ${response.status}`)
}
  
export function getHeaders (token) {
  const headers = { }
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  return headers
}