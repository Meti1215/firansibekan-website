import React from 'react'
import { redirect } from 'next/navigation'

export const dynamicParams = false

export function generateStaticParams() {
  return ['1', '2', '3', '4', '5', '6', '7', '8'].map((id) => ({ id }))
}

export default async function ArticleRedirectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  redirect(`/articles/view/?id=${encodeURIComponent(resolvedParams.id)}`)
}
