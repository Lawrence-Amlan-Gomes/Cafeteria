import useGetCurrentUser from "../hooks/useGetCurrentUser";


export default function Profile() {
  const userInfo = useGetCurrentUser();
  console.log(userInfo);
  return (
    <div className="flex justify-center items-center h-full w-full">
      {userInfo ? (
        <div className="border-2 border-gray-700 w-[50%] p-5 rounded-md">
            <div className="w-full text-center text-2xl text-yellow-500 mb-5">My Profile</div>
          <div className="w-full mt-5 float-left">
            <div className="w-[45%] ml-[5%] float-left">Id</div>
            <div className="w-[45%] ml-[5%] float-left">:  {userInfo.id}</div>
          </div>
          <div className="w-full mt-5 float-left">
            <div className="w-[45%] ml-[5%] float-left">Name</div>
            <div className="w-[45%] ml-[5%] float-left">:  {userInfo.name}</div>
          </div>
          <div className="w-full mt-5 float-left">
            <div className="w-[45%] ml-[5%] float-left">Address</div>
            <div className="w-[45%] ml-[5%] float-left">
              : {userInfo.address}
            </div>
          </div>
          <div className="w-full mt-5 float-left">
            <div className="w-[45%] ml-[5%] float-left">Phone</div>
            <div className="w-[45%] ml-[5%] float-left">: {userInfo.phone}</div>
          </div>
          <div className="w-full mt-5 float-left">
            <div className="w-[45%] ml-[5%] float-left">Date Of Birth</div>
            <div className="w-[45%] ml-[5%] float-left">: {userInfo.dob}</div>
          </div>
          <div className="w-full mt-5 float-left">
            <div className="w-[45%] ml-[5%] float-left">Email</div>
            <div className="w-[45%] ml-[5%] float-left">: {userInfo.email}</div>
          </div>
          <div className="w-full mt-5 float-left mb-5">
            <div className="w-[45%] ml-[5%] float-left">Expenses</div>
            <div className="w-[45%] ml-[5%] float-left">
              : {userInfo.expenses} TK
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
