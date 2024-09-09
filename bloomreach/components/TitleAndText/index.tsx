import React from 'react';
import { ContainerItem, getContainerItemContent } from '@bloomreach/spa-sdk';
import { BrProps } from '@bloomreach/react-sdk';

interface TitleAndTextCompound {
  title?: string;
  text?: string;
}

export function TitleAndText({ component, page }: BrProps<ContainerItem>): React.ReactElement | null {
  if (!component || !page) { return null; }

  if (component.isHidden()) {
    return page.isPreview() ? <div /> : null;
  }

  let title;
  let text;

  const content = getContainerItemContent<TitleAndTextCompound>(component, page);
  if (content !== null) {
    title = content.title;
    text = content.text;
  }

  const {
    titlesize = 'H3',
    textalignment = 'center',
  } = component.getParameters();

  console.log('parameters', component.getParameters());

  return (
    <section className={`mb-10 align-${textalignment}`}>
      {titlesize === 'H1' && <h1 className="text-5xl font-black mb-4">{title}</h1>}
      {titlesize === 'H2' && <h2 className="text-4xl font-black mb-4">{title}</h2>}
      {titlesize === 'H3' && <h3 className="text-3xl font-black mb-4">{title}</h3>}
      {titlesize === 'H4' && <h4 className="text-2xl font-black mb-4">{title}</h4>}
      {titlesize === 'H5' && <h5 className="text-1xl font-black mb-4">{title}</h5>}
      {text && <p>{text}</p>}
    </section>
  );
}