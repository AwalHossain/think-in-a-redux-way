import { TransactionInterface } from '../../features/transaction/transactionSlice';
import del from '../../images/delete.svg';
import edit from '../../images/edit.svg';

interface TransactionProps {
    transaction: TransactionInterface;
}

export default function Transaction({ transaction }: TransactionProps) {
    const { id, name, amount } = transaction;
    return (
        <div key={id}>
            <ul>
                <li className="transaction income">
                    <p>{name}</p>
                    <div className="right">
                        <p>৳ {amount}</p>
                        <button className="link">
                            <img
                                className="icon"
                                src={edit}
                                alt="edit"
                            />
                        </button>
                        <button className="link">
                            <img
                                className="icon"
                                src={del}
                                alt="delete"
                            />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
