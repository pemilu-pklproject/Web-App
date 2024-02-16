import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Dynamic = (props) => {
    console.log("test");

    const active = props.active;
    const page = props.page;
    const title = props.title;

    return ( 
        <div>
            <Sidebar active={active}/>
            <main className="main-content position-relative border-radius-lg ">
                {/* Navbar */}
                <Navbar active={active} title={title}/>
                {/* End Navbar */}
                <div className="container-fluid py-4">

                    {page}

                </div>
            </main>
        </div>
     );
}
 
export default Dynamic;