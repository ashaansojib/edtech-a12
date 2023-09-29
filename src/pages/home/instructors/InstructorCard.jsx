import { Link } from "react-router-dom";

const InstructorCard = ({ instructor }) => {
    const { _id, name, photo, role } = instructor;
    return (
        <div className='member-div'>
            <div className='flex justify-center items-center py-3 overflow-hidden relative'>
                <div class="background-effect"></div>
                <img className="w-[150px] h-[150px] rounded-full border" src={photo} alt="" />
            </div>
            <div className="text-center">
                {/* <p className='text-gray-600 py-2'>Position - {role}</p> */}
                <h3 className='text-xl font-semibold'>{name}</h3>
                <Link className="default my-2" to={`/instructor-details/${_id}`}>Read More</Link>
            </div>
        </div>
    );
};

export default InstructorCard;