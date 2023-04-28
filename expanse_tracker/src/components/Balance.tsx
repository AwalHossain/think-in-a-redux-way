import { useAppSelector } from "../app/hooks";

export default function Balance() {
    const { transactions } = useAppSelector(state => state.transactions);
    const calculateBalance = () => {
        let balance = 0;
        transactions.forEach(transaction => {
            if (transaction.type === "expense") {
                balance -= transaction.amount;
            } else {
                balance += transaction.amount;
            }
        });
        return balance;
    }

    return (
        <div className="top_card">
            <p>Your Current Balance</p>
            <h3>
                <span>৳</span>
                <span>{calculateBalance()}</span>
            </h3>
        </div>
    )
}
