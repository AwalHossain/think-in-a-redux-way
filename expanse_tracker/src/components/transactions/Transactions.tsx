import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchTransactions } from "../../features/transaction/transactionSlice";
import Transaction from "./Transaction";

export default function Transactions() {
    const dispatch = useAppDispatch();
    const { transactions, error, loading } = useAppSelector(state => state.transactions);
    useEffect(() => {
        dispatch(fetchTransactions());
    }, [dispatch])
    let content = null;
    if (loading) {
        content = <p>Loading...</p>
    } else if (error) {
        content = <p>{error}</p>
    } else if (transactions.length === 0) {
        content = <p>No Transactions</p>
    } else {
        content = transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction} />)
    }

    return (
        <div>
            <p className="second_heading">Your Transactions:</p>

            <div className="conatiner_of_list_of_transactions">
                {content}
            </div>
        </div>
    )
}
