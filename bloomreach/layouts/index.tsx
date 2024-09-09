import { OneColumn } from './OneColumn';
import { TwoColumn } from './TwoColumn';

export default function BrxLayout({ layout }: {layout: string}) {
  switch (layout) {
    case 'one-column':
      return <OneColumn />;
    case 'two-column':
      return <TwoColumn />;
    default:
      return <OneColumn />;
    }
}