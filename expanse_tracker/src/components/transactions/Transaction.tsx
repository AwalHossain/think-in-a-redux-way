import { useAppDispatch } from '../../app/hooks';
import { TransactionInterface, deleteTransaction, editingActive } from '../../features/transaction/transactionSlice';
import del from '../../images/delete.svg';
import edit from '../../images/edit.svg';

interface TransactionProps {
    transaction: TransactionInterface;
}

export default function Transaction({ transaction }: TransactionProps) {
    const { id, name, amount, type } = transaction;
    const dispatch = useAppDispatch();
    const handleEdit = () => {
        console.log("Edit");
        dispatch(editingActive(transaction))

    }
    const handdleDelete = () => {
        console.log("Delete");
        dispatch(deleteTransaction(id));
    }
    return (
        <div key={id}>
            <ul>
                <li className={` transaction ${type}`}>
                    <p>{name}</p>
                    <div className="right">
                        <p>৳ {amount}</p>
                        <button className="link">
                            <img
                                onClick={handleEdit}
                                className="icon"
                                src={edit}
                                alt="edit"
                            />
                        </button>
                        <button className="link">
                            <img
                                onClick={handdleDelete}
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
