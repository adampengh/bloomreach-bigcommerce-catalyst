
import React from "react";
import { BrComponent } from "@bloomreach/react-sdk";

export const TwoColumn = () => {
  return (
    <section data-page-layout="two-column">
      <BrComponent path='top'>
        <section className="mb-3">
          <BrComponent />
        </section>
      </BrComponent>

      <section className="flex justify-between mb-3">
        <BrComponent path='main'>
          <main style={{width: "70%"}}>
            <BrComponent />
          </main>
        </BrComponent>
        <BrComponent path='aside'>
          <aside style={{width: "30%"}}>
            <BrComponent />
          </aside>
        </BrComponent>
      </section>

      <BrComponent path='bottom'>
        <section>
          <BrComponent />
        </section>
      </BrComponent>
    </section>
  )
}
