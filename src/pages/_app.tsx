import '../styles/tailwind-init.css'

import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactNode, ReactElement, FC } from 'react';

import ErrorBoundary from '@/app/ui/ErrorBoundary';
import { MainLayout } from '@/app/ui/MainLayout';

type Props<T> = AppProps<T> & {
  Component: NextPage<T> & {
    getLayout?: (page: ReactNode) => ReactNode;
  };
};

interface PageProps {
}

export default function App({ Component, pageProps }: Props<PageProps>) {
  const getLayout = Component.getLayout
    ? Component.getLayout
    : (page: ReactElement) => <MainLayout>{page}</MainLayout>;

  return (
    <>
      <HeadApp />
      <ErrorBoundary>{getLayout(<Component {...pageProps} />)}</ErrorBoundary>
    </>
  );
}

const HeadApp: FC = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>Account Page</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
    </Head>
  );
};
