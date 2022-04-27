import React from 'react';

export default function AddProducts(props) {

    const handleToggle = props.handleToggle;

    return (
        <div className='margin padding transparent animate-top'>
            <div className='display-container'>
                <h1>Add Products</h1>
                <div className=' display-right button round-large border borderc-3 margin-right xlarge' onClick={handleToggle}> x </div>
            </div>

            <form>
                <div className="center" >
                    <div className="bar margin display-container" >
                        <div className="bar-item xlarge textc-3 bottombar borderc-3">ADD</div>
                    </div>
                </div>
                <div className="row-padding">
                    <div className="col s100 padding" >
                        <label className=' xlarge textc-3'>Title :</label>
                        <input type="text" className="input transparent round focus-border" placeholder="Enter Title" required/>
                    </div>
                    <div className="col s100 padding" >
                        <label className=' xlarge textc-3'>Summary :</label>
                        <input type="text" className="input transparent round focus-border" placeholder="Write Short Description..." required/>
                    </div>
                    <div className="col s100 padding" >
                        <label className=' xlarge textc-3'>Description :</label>
                        <input type="text" className="input transparent round focus-border" placeholder="Write Detail Description..." required/>
                    </div>
                    <div className="col s100 padding" >
                        <label className=' xlarge textc-3'>Brands :</label>
                        <select className="select transparent round focus-border" name="Brand">
                            <option value=" " disabled>Select Any Brand</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                    <div className="col s100 padding" >
                        <label className=' xlarge textc-3'>Category :</label>
                        <select className="select transparent round focus-border" name="Category">
                            <option value=" " disabled>Select Any Category</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                    <div className="col s100 padding" >
                        <label className=' xlarge textc-3'>Price $ :</label>
                        <input type="number" className="input transparent round focus-border" placeholder="Enter Price" required/>
                    </div>
                    <div className="col s100 padding" >
                        <label className=' xlarge textc-3'>Discount % :</label>
                        <input type="number" className="input transparent round focus-border" placeholder="Enter Discount" required/>
                    </div>
                    <div className="col s100 padding" >
                        <label className=' xlarge textc-3'>Size :</label>
                        <select className="select transparent round focus-border" name="Size">
                            <option value=" " disabled>Select Any Size</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                    <div className="col s100 padding" >
                        <label className=' xlarge textc-3'>Condition :</label>
                        <select className="select transparent round focus-border" name="Condition">
                            <option value=" " disabled>Select Any Condition</option>
                            <option value="New">New</option>
                            <option value="Old">Old</option>
                            <option value="Hot">Hot</option>
                        </select>
                    </div>
                    <div className="col s100 padding" >
                        <label className=' xlarge textc-3'>Quantity :</label>
                        <input type="number" className="input transparent round focus-border" placeholder="Enter Quantity" required/>
                    </div>
                    <div className="col s100 padding" >
                        <label className=' xlarge textc-3'>Photo :</label>
                        <input type="file" className="input transparent round focus-border" placeholder="Choose" required/>
                    </div>
                    <div className="col s100 padding" >
                        <label className=' xlarge textc-3'>Status :</label>
                        <select className="select transparent round focus-border" name="Status">
                            <option value=" " disabled>Choose your Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                    <div className="col s100 padding" >
                        <button type="reset" className="button round-large border margin-right">Reset</button>
                        <button type="submit" className="button round-large border">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
