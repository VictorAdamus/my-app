import React, {useState} from "react"
import API from "../api"

const Users = () => {
    const [users, setUsers] = useState(API.users.fetchAll());
    const handlerDelete=(userId)=> setUsers(users.filter((user)=>user._id !==userId));
    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1));
        if(number > 4 && number < 15) return 'человек тусанет';
        if(number === 1) return 'человек тусанет';
        if([2,3,4].indexOf((lastOne)>=0)) return 'человека тусанут';
    };
    return (
    <>
    <h2 className="tittle"><span className={
            'badge bg-'+(users.length > 0 ? 'primary':'danger')
          }
    >
     {users.length > 0 ? `Сегодня пятница!Вот список твоих бывших коллег, реши сам кого оставишь =) ${users.length} ${renderPhrase(users.length)} с тобой сегодня` : 'Правильно! Нахер надо!'}
    </span></h2>
    {users.length > 0 &&
    <table className="table table-striped">
        <thead>
        <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Количество встреч</th>
            <th scope="col">Рейтинг</th>
            <th />
        </tr>
    </thead>
    <tbody>
        {users.map((user)=>(
            <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                    {user.qualities.map((item)=>(
                    <span className={"badge m-1 bg-"+item.color} key={item._id}>{item.name}</span>
                ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td><button className={'btn btn-danger'} onClick={()=>handlerDelete(user._id)}>удалить</button></td>
            </tr>
        ))}
    </tbody>
  </table>
}
  </>
    )
}

export default Users;