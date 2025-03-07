import SectionComponent from './SectionComponent';
import UserDetailsComponent from './UserDetailsComponent';
import CreateAndEditComponent from './CreateAndEditComponent';
import DeleteUserComponent from './DeleteUserComponent';
import '../App.css';

function Main() {
    return (
        <>
            {/* <!-- Main component  --> */}
            <main className="main">

                <SectionComponent />

                <UserDetailsComponent />

                <CreateAndEditComponent />

                <DeleteUserComponent />

            </main>
        </>
    )
}

export default Main;