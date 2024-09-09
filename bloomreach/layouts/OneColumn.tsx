
import React from "react";
import { BrComponent } from "@bloomreach/react-sdk";

export const OneColumn = () => {
  return (
    <main data-page-layout="one-column">
      <BrComponent path='top'>
        <section>
          <BrComponent />
        </section>
      </BrComponent>

      <BrComponent path='main'>
        <section>
          <BrComponent />
        </section>
      </BrComponent>

      <BrComponent path='bottom'>
        <section>
          <BrComponent />
        </section>
      </BrComponent>
    </main>
  )
}
