import React from "react";
import ForumPage from "./ForumPage";

const Extension = () => {
  const data = [
    {
      title: "Líng-ki-ki",
      des: "夏天必備「冷」笑話套件！你是否預算有限，不想開冷氣但又想降溫？試試我們...",
      like: 222,
      msg: 154,
      save: 599,
      image: 1,
    },
    {
      title: "日曆冷氣",
      des: "我是住在新竹的一位全職工程師，每天回家地一件事就是開冷氣，後來我才發現...",
      like: 322,
      msg: 154,
      save: 609,
      image: 2,
    },
  ];

  return (
    <>
      {data.map((item) => (
        <ForumPage
          title={item.title}
          des={item.des}
          like={item.like}
          msg={item.msg}
          save={item.save}
          image={item.image}
        />
      ))}
    </>
  );
};

export default Extension;
