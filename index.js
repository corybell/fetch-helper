import { processResponse, errorResponse, getHeaders } from './src/helpers'

export async function get (url, token) {
  try {
    const response = await fetch(url, {
      headers: getHeaders(token),
    })

    return processResponse(response)
  } catch (error) {
    return errorResponse(error.message)
  }
}

export async function post (url, body, token) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: getHeaders(token),
      body: JSON.stringify(body),
    })

    return processResponse(response)
  } catch (error) {
    return errorResponse(error.message)
  }
}

export async function put (url, body, token) {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: getHeaders(token),
      body: JSON.stringify(body),
    })

    return processResponse(response)
  } catch (error) {
    return errorResponse(error.message)
  }
}

export async function postForm (url, body, token) {
  try {
    const formData = new FormData()
    for (const k in body) {
      formData.append(k, body[k])
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: getHeaders(token),
      body: formData
    })

    return processResponse(response)
  } catch (error) {
    return errorResponse(error.message)
  }
}
