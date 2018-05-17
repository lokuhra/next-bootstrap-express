import React from "react";
import Link from "next/link";

export default ({href,text}) => (
      <li>
        <Link href={href}>
          <a>{text}</a>
        </Link>
      </li>
);