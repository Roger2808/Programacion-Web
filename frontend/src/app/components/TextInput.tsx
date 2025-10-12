interface TextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function TextInput({ value, onChange, placeholder }: TextInputProps) {
  return <input value={value} onChange={onChange} placeholder={placeholder} />;
}
