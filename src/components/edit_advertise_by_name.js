import React from 'react';
import '../css/edit_advertise_by_name.css';

export const EditAdvertiseComponent = (props) => {
    return(
        <body>
            <div class="testbox">
                <form action = "/">
                    <div class="banner">
                        <h1>Edit Advertise</h1>
                    </div>
                    <div class="item">
                        <p>Advertise Title</p>
                        <input type="text" name="title" placeholder="Enter Advertise Title"></input>
                    </div>
                    <div class="item">
                        <p>Advertise Category</p>
                        <select required>
                            <option value="1">Select Category</option>
                            <option value="2">Electronics</option>
                            <option value="3">Hardware</option>
                            <option value="4">Vehicles</option>
                        </select>
                    </div>
                    <div class="item">
                        <p>Advertise Description</p>
                        <textarea name="description" placeholder="Enter Advertise Description"></textarea>
                    </div>
                    <div class="item">
                        <p>Price</p>
                        <input type="text" name="price" placeholder="Enter price"></input>
                    </div>
                    <div class="btn-block">
                          <button type="submit" href="/">UPDATE</button>
                      </div>
                </form>
            </div>
            {/* <footer class="container-fluid text-center">
  <p>Footer Text</p>
</footer> */}
        </body>
    )
}