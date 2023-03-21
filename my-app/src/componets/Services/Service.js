export const Service = ({
    service,
    description
}) =>{
    return (
        <div className="col-lg-4 col-md-6 mb-4">
                    <div className="service-item bg-white text-center mb-2 py-5 px-4">
                        <i className="fa fa-2x fa-route mx-auto mb-4"></i>
                        <h5 className="mb-2">{service}</h5>
                        <p className="m-0">{description}</p>
                    </div>
                </div>
    );
};