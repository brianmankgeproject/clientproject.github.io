import React from "react"
import "./Add.scss"

const Add = () => {
    return(
    
    <div className="add">
        <div className="container">
            <h1>Add new Service</h1>
            <div className="sections">
                <div className="left">
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder="e.g I will do something I am really good at" />
                    <label htmlFor="">Category</label>
                    <select name="cats" id="cats">
                        <option value="foodDelivery">Food Delivery</option>
                        <option value="Retail Deliveries">Retail Deliveries</option>
                        <option value="Courier Services">Courier Services</option>
                        <option value="Electronic Deliveries">Electronic Deliveries</option>
                    </select>

                    <label htmlFor="">Cover Image</label>
                    <input type="file" name="" id="" />
                    <label htmlFor="">Upload Images</label>
                    <input type="file" multiple />
                    <label htmlFor="">Description</label>
                    <textarea name="" id="" cols="30" rows="16" placeholder="Brief descriptions to introduce your service to customers"></textarea>
                    <button>Create</button>
                </div>
                <div className="right"> 
                <label htmlFor="">Service Title</label>
                <input type="text" placeholder="e.g Food Deliveries"/>
                <label htmlFor="">Short Description</label>
                <textarea name="" id="" cols="30" rows="10" placeholder="Short Description of your service"></textarea>
                <label htmlFor="">Delivery time (e.g. 3 days)</label>
                <input type="number" min={1} />
                <label htmlFor="">Revision Number</label>
                <input type="number" min={1} />
                <label htmlFor="">Add Features</label>
                <input type="text" placeholder="e.g. Retail Deliveries" />
                <input type="text" placeholder="e.g. Retail Deliveries" />
                <input type="text" placeholder="e.g. Retail Deliveries" />
                <input type="text" placeholder="e.g. Retail Deliveries" />
                <label htmlFor="">Price</label>
                <input type="number" min={1} />


                </div>
            </div>
        </div>
    </div>
    
    )
}

export default Add