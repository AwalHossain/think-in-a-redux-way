import Transaction from "./Transaction";

export default function Transactions() {
    return (
        <div>
            <p className="second_heading">Your Transactions:</p>

            <div className="conatiner_of_list_of_transactions">
                <Transaction />
            </div>
        </div>
    )
}
