import { useNavigate } from 'react-router-dom';

export default function Button({Text, Callback, Destination}) {
    const navigate = useNavigate();

    return (
        <button className="button" onClick={() => {
            if (Destination) {
                console.log(Destination);
                navigate(Destination, {replace: true})
            }

            if (Callback) {
                Callback()
            }
        }}>
            {Text}
        </button>
    )
}