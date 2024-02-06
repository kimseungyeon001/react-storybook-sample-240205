import { http, HttpResponse, delay } from 'msw'
import { config } from '@/config'

const { baseUrl } = config

export function buildFetch() {
  return http.get(`${baseUrl}/page`, async () => {
    return HttpResponse.json('with data')
  })
}

export function buildFetchError() {
  return http.get(`${baseUrl}/page`, async () => {
    return HttpResponse.error()
  })
}

export function buildFetchLoading() {
  return http.get(`${baseUrl}/page`, async () => {
    await delay('infinite')
    return HttpResponse.json('with data')
  })
}

export const handlers = [buildFetch()]
