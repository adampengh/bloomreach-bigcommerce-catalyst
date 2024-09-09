import { Configuration } from '@bloomreach/spa-sdk';

export const NEXT_PUBLIC_BRX_ENDPOINT = process.env.NEXT_PUBLIC_BRX_ENDPOINT ?? '';
export const NEXT_PUBLIC_BRX_MULTI_TENANT_SUPPORT = process.env.NEXT_PUBLIC_BRX_MULTI_TENANT_SUPPORT === 'true';

export type BuildConfigurationOptions = {
  endpoint: string | (string | null)[];
  baseUrl: string;
};
export type ConfigurationBuilder = Omit<Configuration & Partial<BuildConfigurationOptions>, 'httpClient'>;

export const BRX_CONFIGURATION_CONSTANTS = {
  PREVIEW_TOKEN_PARAM: 'token',
  PREVIEW_SERVER_ID_PARAM: 'server-id',
  PREVIEW_ENDPOINT_PARAM: 'endpoint',
}

export const buildConfiguration = (
  path: string,
  searchParams: { [key: string]: string | string[] | undefined },
  endpoint: string = NEXT_PUBLIC_BRX_ENDPOINT,
) => {
  // console.log('buildCongiguration [path]', path)
  // console.log('buildCongiguration [query]', query)

  const {
    token: authorizationToken,
    'server-id': serverId,
    endpoint: endpointQueryParam,
  } = searchParams

  const configuration: any = {
    endpoint: endpointQueryParam ? endpointQueryParam: endpoint,
    path: path,
    ...(authorizationToken ? { authorizationToken } : {}),
    ...(serverId ? { serverId } : {}),
    debug: true,
  }

  return configuration
}