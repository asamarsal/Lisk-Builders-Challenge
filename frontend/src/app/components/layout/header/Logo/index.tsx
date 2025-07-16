
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface HeaderProps {}
const Logo: React.FC<HeaderProps> = () => {
  return <Link href="/">Home</Link>;
};

export default Logo;
