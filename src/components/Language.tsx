const languages: Array<string> = ['EN', 'RU'];

interface LanguageItemProps {
  children?: React.ReactNode;
}

interface LanguageProps {
  className?: string;
}

const LanguageItem: React.FC<LanguageItemProps> = ({ children }) => (
  <option>{children}</option>
);

const Language: React.FC<LanguageProps> = ({ className = '', ...props }) => {
  return (
    <select className={`text-xl ${className}`} {...props}>
      {languages.map((language) => (
        <LanguageItem key={language}>{language}</LanguageItem>
      ))}
    </select>
  );
};

export default Language;
