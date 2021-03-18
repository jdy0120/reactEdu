import React, { Component,useState } from 'react';

type Props = {
  name?:string
  children?:string
  favoriteNumber?:number
}

const MyComponent: React.FC<Props> = (props) => {
  const { name,children,favoriteNumber } = props;
  return (<div>
    안녕하세요, 제이름은 {name} 입니다.
    children 값은 {children}입니다.
    제일 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름'
};

export default MyComponent;