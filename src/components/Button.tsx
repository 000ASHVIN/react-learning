import { ReactNode } from "react";

interface Props {
    type?: 'btn-primary' | 'btn-danger';
    children: ReactNode;
    onClicked: () => void;
}

const Button = ({type = 'btn-primary', children, onClicked}:Props) => {
  return (
    <>
      <button type="button" className={"btn "+type} onClick={onClicked}>{children}</button>
    </>
  )
}

export default Button
