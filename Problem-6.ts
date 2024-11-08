
interface Profile {
    name :string 
    age:number
     email:string
  }

  
  function updateProfile (profile:Profile,updateProfile:Partial<Profile>):Profile{
   return {...profile,...updateProfile}
  
  
  }
  
  const Profil:Profile = {
    name:'Dipto',
    age:1,
    email:'dsdsds'
  }
  
  console.log(updateProfile(Profil,{age:2}));