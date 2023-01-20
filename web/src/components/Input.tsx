import { InputHTMLAttributes } from 'react'
interface InputProperties extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input(properties: InputProperties) {
  return (
    <input
    {...properties}
      className="bg-zinc-900 py-3 px-4 rounded placeholder:text-zinc-500" />
  )
}