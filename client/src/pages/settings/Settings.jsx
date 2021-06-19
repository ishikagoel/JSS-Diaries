import "./settings.css"
import SideBar from "../../components/sidebar/SideBar"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img
                            src="https://scontent-del1-1.xx.fbcdn.net/v/t1.6435-9/40650270_530630247386534_1331180776447803392_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=174925&_nc_ohc=Be7TVVw-QxMAX926OZi&_nc_ht=scontent-del1-1.xx&oh=5af93bd8c7dcecee87bf4fb67b3bbbdb&oe=60D375E7"
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Safak" />
                    <label>Email</label>
                    <input type="email" placeholder="safak@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <SideBar />
        </div>
    )
}
