import { Package } from "./Package";
export const Packages = ({
    packages,
}) => {
    return (
        <div className="container-fluid py-5">
            <div className="container pt-5 pb-3">
                <div className="text-center mb-3 pb-3">
                    <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Packages</h6>
                    <h1>Pefect Tour Packages</h1>
                </div>
                <div className="row">

                    {packages.map(x =>
                        <Package key={x._id} {...x} />
                    )}

                </div>
            </div>
        </div>
    );

};