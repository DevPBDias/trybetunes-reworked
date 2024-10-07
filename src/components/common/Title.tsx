import React from "react";

interface TitleProps {
  title: string;
  subtitle: string;
}

const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <section className="container-title">
      <h1 className="login-title">{title}</h1>
      <p className="login-subtitle">{subtitle}</p>
    </section>
  );
};

export default Title;
