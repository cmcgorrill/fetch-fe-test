'use client'
import { API_URL } from "./constants"

export const login = (name: string, email: string) => {
  return fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify({ name, email }),
    headers: {
      "Content-Type": "application/json",
    },
  })
}