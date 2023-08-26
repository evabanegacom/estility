import React, { useState } from 'react'
import './new-member.css';

const NewMember = () => {
    const [activeScreen, setActiveScreen] = useState('member-form')
    const [activeHeader, setActiveHeader] = useState('properties')

    const handleToggle = (screen) => {
        setActiveScreen(screen)
    }

    const MemberForm = () => (
        <div className='staff-form'>
            <div className='staff-form-title'>Add Staff/Team Member</div>
        <form>
            <input type='text' placeholder='Enter first name' />
            <input type='email' placeholder='Email' />
            <input type='text' placeholder='Phone number' />
            <button>Next</button>
        </form>
        </div>
    )

    const RoleForm = () => (
        <div className='role-form'>
          <div className='staff-form-title'>Add new  role</div>
          <div className='role-form-text'>Add other role to your staffing system</div>
        <form>
            <div className='add-role-type'>
              <input type='text' placeholder='Role name' />
              <select>
                <option>Role type</option>
              </select>
            </div>
            <textarea type='text' placeholder='Role description' />
        </form>
        </div>
    )

const styles = {
    background: activeScreen==='member-form' ? '#716EAA' : '#fff',
    color: activeScreen==='member-form' ? '#fff' : '#000000'
}

const addRoleStyles = {
    background: activeScreen==='add-role' ? '#716EAA' : '#fff',
    color: activeScreen==='add-role' ? '#fff' : '#000000'
}

const properties = [
  {
    id: 1,
    name: 'View Properties Page',
  },
  {
    id: 2,
    name: 'Create new Property',
  },
  {
    id: 3,
    name: 'Add new unit to Property',
  },
  {
    id: 4,
    name: 'Edit Property Details',
  },
  {
    id: 5,
    name: 'Push Notifications',
  }
]

const Residents = [
  {
    id: 1,
    name: 'View Residents Page',
  },
  {
    id: 2,
    name: 'Create new Resident',
  },
  {
    id: 3,
    name: 'Add new Resident',
  },
  {
    id: 4,
    name: 'Edit Resident Details',
  },
  {
    id: 5,
    name: 'Push Notifications',
  }
]

const Finances = [
  {
    id: 1,
    name: 'View Finances Page',
  },
  {
    id: 2,
    name: 'Add withhdrawal method',
  },
  {
    id: 3,
    name: 'Withdraw funds',
  },
  {
    id: 4,
    name: 'View transactions',
  },
  {
    id: 5,
    name: 'Push Notifications',
  }
]

const Visitors = [
  {
    id: 1,
    name: 'View Visitor Requests',
  },
  {
    id: 2,
    name: 'Change visitor status',
  },
  {
    id: 3,
    name: 'Create new requests',
  },
  {
    id: 4,
    name: 'Delete past requests',
  },
  {
    id: 5,
    name: 'Push Notifications',
  }
]

const Broadcasts = [
  {
    id: 1,
    name: 'Read past messages',
  },
  {
    id: 2,
    name: 'Send new messages',
  },
  {
    id: 3,
    name: 'Edit message schedule',
  },
  {
    id: 4,
    name: 'Delete past messages',
  },
  {
    id: 5,
    name: 'Push Notifications',
  }
]

const Complaints = [
  {
    id: 1,
    name: 'Resolve Complaints',
  },
  {
    id: 2,
    name: 'Assign complaints to staff',
  },
  {
    id: 3,
    name: 'Create new complaints',
  },
  {
    id: 4,
    name: 'Delete past messages',
  },
  {
    id: 5,
    name: 'Push Notifications',
  }
]

const Options = ({options}) => (
  <>
    {options.map((option) => (
      <div className='options'>
        <div className='options-input'><input type='checkbox' /></div>
        <div>{option.name}</div>
      </div>
    ))}
    </>
)

const selectedOptionStyle = (title) => {
  if(activeHeader===title){
    return {
      borderBottom: '2px solid #716EAA',
      color: '#7975B6'
    }
  }else {
    return {
      background: '#fff',
    }
  }
}

const changeHeader = (header) => {
  setActiveHeader(header)

}

  return (
    <div className='new-member-container'>
     <div className='new-staff'>
      <button style={styles} onClick={()  => handleToggle('member-form')}>Add staff details</button>
      <button style={addRoleStyles} onClick={() => handleToggle('add-role')}>Add Roles and permissions</button>
     </div>
     <div className='new-roles'>
     {activeScreen==='member-form' && <MemberForm />}
     {activeScreen==='add-role'
      &&
      <div className='roles-and-permission'> 
      <RoleForm />
     <div>Permissions</div>
     <div>Add permissions to these roles</div>
     <div className='role-toggle'>
      <button onClick={() => changeHeader('properties')} style={selectedOptionStyle('properties')}>Properties</button>
      <button onClick={() => changeHeader('residents')} style={selectedOptionStyle('residents')}>Residents</button>
      <button onClick={() => changeHeader('finances')} style={selectedOptionStyle('finances')}>Finances</button>
      <button onClick={() => changeHeader('visitors')} style={selectedOptionStyle('visitors')}>Visitors</button>
      <button onClick={() => changeHeader('broadcasts')} style={selectedOptionStyle('broadcasts')}>Broadcasts</button>
      <button onClick={() => changeHeader('complaints')} style={selectedOptionStyle('complaints')}>Co</button>
     </div>
     <div className='role-options'>
      {activeHeader==='properties' && <Options options={properties} />}
      {activeHeader==='residents' && <Options options={Residents} />}
      {activeHeader==='finances' && <Options options={Finances} />}
      {activeHeader==='visitors' && <Options options={Visitors} />}
      {activeHeader==='broadcasts'&& <Options options={Broadcasts} />}
      {activeHeader==='complaints' && <Options options={Complaints} />}
     </div>
     </div>
     }
     </div>
    </div>
  )
}

export default NewMember