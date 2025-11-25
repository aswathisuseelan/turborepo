import React from 'react'

interface HeaderProps {
    children: string;
}

export default function Header({ children }: HeaderProps) {
  return (
    <h1>{children}</h1>
  )
}
