import React, { useState } from "react";

export default function Form() {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [amount, setAmount] = useState("");

    const reset = () => {
        setName("");
        setType("");
        setAmount("");
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Hey there");
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            name,
            type,
            amount: +amount,
        }
        console.log(newTransaction);

    }
    return (
        <div>
            <div className="form">
                <h3>Add new transaction</h3>
                <form onSubmit={(e) => handleSubmit(e)}>
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

                    <button className="btn">Add Transaction</button>

                    <button className="btn cancel_edit">Cancel Edit</button>
                </form>

            </div>
        </div>
    )
}
