export const Package =  ({
    _ownerId,
    title,
    days,
    persons,
    imageUrl,
    summary
    }) => {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="package-item bg-white mb-2">
                <img className="img-fluid" src={imageUrl} alt="fluid" />
                <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                        <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>{title}</small>
                        <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>{days}</small>
                        <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>{persons}</small>
                    </div>
                    <a className="h5 text-decoration-none" href="#/">{summary}</a>
                    <div className="border-top mt-4 pt-4">
                        <div className="d-flex justify-content-between">
                            <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                            <h5 className="m-0">$350</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

