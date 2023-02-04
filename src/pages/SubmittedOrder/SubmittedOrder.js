import { useSelector } from "react-redux";

const SubmittedOrder = () => {
    const state = useSelector((state) => state.users);
    return (
        <div>
            <h1>Submitted Order {state.name}</h1>
        </div>
    );
};

export default SubmittedOrder;