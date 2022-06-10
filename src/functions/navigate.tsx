
import { useNavigate } from 'react-router-dom';

export default function navigateCallback(path: string) {
    const navigate = useNavigate();
    return () => navigate(path)
}
