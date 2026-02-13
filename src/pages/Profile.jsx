import { useState, useEffect } from "react";
import { fetchUserProfile } from "../api/auth";

const Profile = () => {

    const [profile, setProfile] = useState(null);

    const getProfile = async () => {
        try {
            const profileData = await fetchUserProfile();
            setProfile(profileData);
        } catch (error) {
            console.error('Error fetching profile:', error);
        }   

    }


   useEffect(() => {

    getProfile();  

    }, []);

    console.log('User Profile:', profile);

    return (


        <>

        <h2>Profile Page</h2>
        { (
            <div>
                <p><strong>Name:</strong> {profile?.user?.name}</p>    
                <p><strong>Email:</strong> {profile?.user?.email}</p>
            </div>
        )  }  


        
        </>



    )  }   
    
    export default Profile;