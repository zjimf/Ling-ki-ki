import React from "react";
import ForumPage from "./ForumPage";

const Discuss = () => {
  const data = [
    {
      title: "超省電「冷」知識！",
      des: "我是住在新竹的一位全職工程師，每天回家地一件事就是開冷氣，後來我才發現...",
      like: 222,
      msg: 154,
      save: 599,
      image: 3,
    },
    {
      title: "家裡一直發霉怎辦求救?",
      des: "我是住在新竹的一位全職工程師，每天回家地一件事就是開冷氣，後來我才發現...",
      like: 322,
      msg: 154,
      save: 609,
      image: 4,
    },
    {
      title: "今年暑假這樣做就對了?",
      des: "我是住在新竹的一位全職工程師，每天回家地一件事就是開冷氣，後來我才發現...",
      like: 322,
      msg: 154,
      save: 609,
      image: 5,
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

export default Discuss;
