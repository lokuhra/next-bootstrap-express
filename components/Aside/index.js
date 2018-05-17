import React from "react";
import Link from "./partials/Link";

export default () => (
  <aside className="menu column is-2 has-background-primary">
    <p className="menu-label">General</p>
    <p className="menu-label">Transactions</p>
    <ul className="menu-list">
      <Link href="/" text={"Home"} />
      <Link href="/carga" text={"Carga"} />
      <Link href="/carga2" text={"Carga2"} />
      <Link href="/faltantes" text={"Faltantes"} />
      <Link href="/context" text={"Context"} />
    </ul>
  </aside>
);
