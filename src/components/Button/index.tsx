interface ButtonProps {
  children: React.ReactNode,
  type?: 'button' | 'submit'
}

const Button = ({ children, type = 'button' }: ButtonProps) => {
  return (
    <button>{children}</button>
  );
};

export default Button;