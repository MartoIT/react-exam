

export const EditComment = () => {
    return (
        <section >
            <form method="post" style={{ margin: "90px 0", paddingLeft: "550px", display: "yable-row" }} >
                <div className="edit-page" >
                    <p></p>
                    <label htmlFor="summary" className="color" >Edit comment:</label>
                    <textarea type="text"
                        id="story"
                        name="story"
                        className="textarea"
                         ></textarea>
                    <input className="btn btn-primary btn-block py-3 mybtn" type="submit" value="Send" />

                </div>
            </form>
        </section>
    );
};
