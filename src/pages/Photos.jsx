import { useSearchParams } from 'react-router-dom';
import Gallary from '../components/Gallary';

export default function Photos() {

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Gallary groupId={[...searchParams][0][1]} album={[...searchParams][1][1]} /> 
  )
}
