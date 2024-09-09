import axios from 'axios';
import { notFound } from 'next/navigation';

import { initialize } from '@bloomreach/spa-sdk';
import BrxApp from '~/bloomreach/components/BrxApp';
import { buildConfiguration } from '~/bloomreach/utils';

interface PageProps {
  params: any;
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function CatchAllPage({ params, searchParams }: PageProps) {
  const { rest } = params;
  const path = '/' + rest.join('/');
  const configuration: any = buildConfiguration(path, searchParams)

  let page;
  let pageModel;
  try {
    page = await initialize({
      ...configuration,
      httpClient: axios
    });
    pageModel = page.toJSON();
  } catch (error) {
    notFound();
  }

  return (
    <div>
      <BrxApp configuration={configuration} page={pageModel} />
    </div>
  )
}
