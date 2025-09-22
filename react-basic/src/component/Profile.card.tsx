type ProfileCard ={
    nama: string;
    alamat: string;
    hobi: string;
}
const ProfileCard =() =>{

    const nama = " Ahmad Maftuh";
    const alamat = " Gordah";
    const hobi =  " main";

    return (
        <div className="card">
        <p> Nama :{nama}</p>
        <p> Alamat :{alamat}</p>
        <p> Hobi :{hobi}</p>
        </div>
    )
    
}
export default ProfileCard