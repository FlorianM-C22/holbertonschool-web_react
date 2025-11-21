import './Notifications.css'
import closeIcon from './assets/close-button.png'
import { getLatestNotification } from '../utils/utils'

function Notifications() {
    return (
        <div className="notification-items" style={{ position: 'relative' }}>
            <button
                aria-label="Close"
                onClick={() => console.log('Close button has been clicked')}
                style={{
                    position: 'absolute',
                    right: '5px',
                    top: '5px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                }}
            >
                <img src={closeIcon} alt="close-icon" style={{ width: '10px', height: '10px' }} />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    );
}

export default Notifications;