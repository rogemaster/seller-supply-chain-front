import React from 'react';
import { Link } from 'react-router-dom';

interface INavigation {
  pageName: string;
}

const BreadcrumbNavigation = ({ pageName }: INavigation) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-2xl font-semibold text-black">{pageName}</h2>

      <nav>
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link className="font-medium" to="/">
              Main /
            </Link>
          </li>
          <li className="font-medium text-blue-600">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadcrumbNavigation;
