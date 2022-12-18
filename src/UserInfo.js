import React ,{memo} from 'react'
import "./UserInfo.css"

function UserInfo(props) {
    const {lastName , firstName, avatarUrl} = props
  return (
    <div className='userContainer'>
        <div className="userItemContainer">
            <img src={avatarUrl} className = "avatarStyle" alt="userImage" />
            <h5 className='UserName'>{firstName} {lastName}</h5>
        </div>
 



    </div>

  )
}

export default memo(UserInfo)