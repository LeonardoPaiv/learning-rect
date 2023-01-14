import React from "react";

const Users = (props: any) => {
  const users: { user: string; idade: number }[] = props.users;

  const removeUser = (index: number) => {
    props.deleteUser(index)
  }

  if (users.length === 0) {
    return (
        <div className="bg-blue-300 border-round my-5 w-full md:w-6 text-center py-2">Não existem ususarios no momento</div>
    )
  }

  else {
    return<>
      {users.map( (user, index) => {
        return(
          <div key={index} onClick={() => removeUser(index)} className="bg-blue-300 border-round mt-5 w-full md:w-6 text-center py-2">
            <p>{user.user} - {user.idade}</p>
          </div>
        )
    })}
    </>
  }
};

export default Users;
