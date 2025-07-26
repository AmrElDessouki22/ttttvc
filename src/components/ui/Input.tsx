interface InputProps {
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

export default function Input({
  type = 'text',
  value,
  onChange,
  placeholder = '',
  className = '',
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={`border rounded-md p-2 ${className}`}
      placeholder={placeholder}
    />
  )
}