import del from '../../images/delete.svg';
import edit from '../../images/edit.svg';


export default function Transaction() {
    return (
        <div>
            <ul>
                <li className="transaction income">
                    <p>Earned this month</p>
                    <div className="right">
                        <p>৳ 100</p>
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
