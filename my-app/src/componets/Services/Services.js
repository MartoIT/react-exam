import { Service } from "./Service";

export const Services = ({
    services
}) => {
    return (
        <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
                <h6 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}>Services</h6>
                <h1>Tours & Travel Services</h1>
            </div>
            <div className="row">
               
                {services.map(s => <Service  key={s._id} {...s} />)}

            </div>
        </div>
    </div>
    );
};