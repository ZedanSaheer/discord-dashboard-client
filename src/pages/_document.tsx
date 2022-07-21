import Head from "next/head"
import Html from 'next/document'
import Script from 'next/script'
import Main from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <title>Discord Dashboard</title>
      <body>
        <Main />
        <Script />
      </body>
    </Html>
  )
}