import { useState } from 'react'
import './complaint.css';

const ComplaintForm = () => {
    const [selectedSeverity, setSelectedSeverity] = useState('');
    const [assignedStaff, setAssignedStaff] = useState('');

    const handleSeverityChange = (event) => {
        setSelectedSeverity(event.target.value);
    };

    const handleAssignToChange = (event) => {
        setAssignedStaff(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your submission logic here
        console.log('Form submitted');
        console.log('Selected Severity:', selectedSeverity);
        console.log('Assigned Staff:', assignedStaff);
    };

    return (
        <div className='complaint-form'>
            <div className='complaint-form-title'>Complaint</div>
            <div className='complaint-form-reporter'>Reported By: <span>{" "} Aisha lawal</span></div>
            <div className='complaint-form-reporter'>Date and Time: <span>{" "} &nbsp;24.12.2020</span></div>
            <div className='complaint-form-reporter'>Type: <span>{" "} &nbsp;Maintenenace</span></div>
            <div className='complaint-form-reporter'>Description</div>
            <div className='complaint-description'>
                I am having problems with the plumbing in my bathroom, every time i turn it on, it trickles down to the room downstairs and it’s beginning to give stains. I need maintenance to come help with this. Thank you
            </div>
            <form className='complaint-form-div' onSubmit={handleSubmit}>
                <div className='complaint-form-reporter'>Severity</div>
                <div className='complaint-form-severity'>
                    <div className="severity-container">
                        <div className="circle-container">
                            <input type="radio" id="low" name="severity" value="low" />
                            <label className="circle low" htmlFor="low"></label>
                            <span className="severity-text">Low</span>
                        </div>

                        <div className="circle-container">
                            <input type="radio" id="medium" name="severity" value="medium" />
                            <label className="circle medium" htmlFor="medium"></label>
                            <span className="severity-text">Medium</span>
                        </div>

                        <div className="circle-container">
                            <input type="radio" id="high" name="severity" value="high" />
                            <label className="circle high" htmlFor="high"></label>
                            <span className="severity-text">High</span>
                        </div>
                    </div>
                </div>
                <div className='complaint-form-reporter'>Assign To</div>
                <select onChange={handleAssignToChange} value={assignedStaff}>
                <option value="">Select Staff</option>
                    <option value="staff1">Staff 1</option>
                    <option value="staff2">Staff 2</option>                </select>
                <button className='complaint-form-button'>Complete</button>
            </form>
        </div>
    )
}

export default ComplaintForm