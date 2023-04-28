import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addTransaction, editTransaction } from "../features/transaction/transactionSlice";

export default function Form() {

    const dispatch = useAppDispatch();

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [amount, setAmount] = useState<string | number>("");
    const [editMode, setEditMode] = useState(false);

    const { editing, transactions } = useAppSelector(state => state.transactions);
    const reset = () => {
        setName("");
        setType("");
        setAmount("");
    }

    useEffect(() => {
        const { id, type, amount, name } = editing;
        if (id !== 0) {
            setName(name);
            setType(type);
            setAmount(amount);
            setEditMode(true);
        } else {
            reset();
            setEditMode(false);
        }



    }, [editing])


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Hey there");
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            name,
            type,
            amount: +amount,
        }
        dispatch(addTransaction(newTransaction));
        reset();

    }

    useEffect(() => {
    }, [dispatch, transactions])

    const handleUpdate = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(editMode, "checking edit mode");

        const updatedTransaction = {
            id: editing.id,
            name,
            type,
            amount: +amount,
        }
        console.log("checking update transaction");

        dispatch(editTransaction(updatedTransaction));
        reset();
    }
    const cancelEditMode = () => {
        setEditMode(false);
        reset();
    }
    return (
        <div>
            <div className="form">
                <h3>Add new transaction</h3>
                <form onSubmit={editMode ? handleUpdate : handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="transaction_name">Name</label>
                        <input
                            type="text"
                            name="transaction_name"
                            placeholder="My Salary"
                            value={name}
                            onChange={(e) => setName(e.target.value)}

                        />
                    </div>

                    <div className="form-group radio">
                        <label htmlFor="transaction_type">Type</label>
                        <div className="radio_group">
                            <input
                                type="radio"
                                name="transaction_type"
                                placeholder="Income"
                                value="income"
                                checked={type === "income"}
                                onChange={(e) => setType(e.target.value)}

                            />
                            <label htmlFor="transaction_type">Income</label>
                        </div>
                        <div className="radio_group">
                            <input
                                type="radio"
                                name="transaction_type"
                                value="expense"
                                checked={type === "expense"}
                                onChange={(e) => setType(e.target.value)}
                            />
                            <label htmlFor="transaction_type">Expense</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="transaction_amount">Amount</label>
                        <input
                            type="number"
                            placeholder="300"
                            name="transaction_amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>

                    <button className="btn">
                        {editMode ? "Update Transaction" : "Add Transaction"}
                    </button>

                </form>
                {editMode && (
                    <button className="btn cancel_edit" onClick={cancelEditMode}>
                        Cancel Edit
                    </button>
                )}
            </div>
        </div>
    )
}
