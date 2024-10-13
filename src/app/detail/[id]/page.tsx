import React from "react";

/*
export async function generateStaticParams() {
    const posts = await fetch('https://.../posts').then((res) => res.json())
   
    return posts.map((clubs) => ({
      id: clubs.id,
    }))
  }
*/

const page = ({ params }: { params: { id: number } }) => {
    return <div>id:{params.id}</div>;
};

export default page;
