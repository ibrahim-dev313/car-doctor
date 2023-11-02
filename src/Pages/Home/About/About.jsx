import parts from "../../../assets/images/about_us/parts.jpg";
import person from "../../../assets/images/about_us/person.jpg";
const About = () => {
    return (
        <div className="h-[35rem] hero  ">
            <div className="flex-col hero-content lg:flex-row">
                <div className="relative mb-20 lg:mb-0 lg:w-1/2">
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="absolute w-1/2 border-8 border-white rounded-lg shadow-2xl top-1/2 right-5" />
                </div>

                <div className="space-y-5 lg:w-1/2">
                    <h1 className="text-3xl font-bold text-orange-500">About Us</h1>
                    <h1 className="text-5xl font-bold ">We are qualified & of experience in this field</h1>
                    <p className="py-3 font-light">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <p className="py-3 font-extralight">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <button className="btn btn-error">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;