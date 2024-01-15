/*
 *   Copyright (c) 2024 Dilshan Ramesh
 *   All rights reserved.
 *   Nova Solutions (Pvt) Ltd. All rights reserved.
 */
import type { AppProps } from 'next/app'
 
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}