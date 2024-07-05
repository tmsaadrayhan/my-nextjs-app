import React from "react";

const DynamicPage = ({ params, searchParams }) => {
  console.log(params, searchParams);
  return (
    <div>
      <p>This is Dynamic Page-{params.id}</p>
      <p>Search-{searchParams.category}</p>
    </div>
  );
};

export default DynamicPage;
