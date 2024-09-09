'use client'

import axios from 'axios';
import { BrPage, BrPageContext } from '@bloomreach/react-sdk';
import { Page } from '@bloomreach/spa-sdk';
import { ConfigurationBuilder } from '../utils';

import { BRX_COMPONENT_MAPPING } from '../BrxComponentMapping';
import BrxLayout from '../layouts';

interface BrxAppProps {
  configuration: ConfigurationBuilder;
  page: Page;
}

const BrxApp = ({ configuration, page }: BrxAppProps) => (
  <BrPage
    configuration={{ ...configuration, httpClient: axios }}
    mapping={BRX_COMPONENT_MAPPING}
    page={page}
  >
    <BrPageContext.Consumer>
      {(pageContext) => {
        const layout = pageContext?.getComponent()?.getName() || 'one-column';
        return <BrxLayout layout={layout} />
      }}
    </BrPageContext.Consumer>
  </BrPage>
)

export default BrxApp;