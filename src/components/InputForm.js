import React from "react";
import "../css/Inputform.css";

export const InputForm = () => {
  return (
    <>
      <div className="input__form__main">
        <div className="name__address__section">
          <div className="name__section">
            <span className="section__intro">Vehicle Owner's Info</span>
            <select class="form-select salutation__text" aria-label="Prefix">
              <option selected>Salutation</option>
              <option value="Mr">Mr.</option>
              <option value="Ms">Ms.</option>
            </select>
            <input
              type="text"
              class="form-control"
              placeholder="First Name"
              aria-label="First name"
            />
            <input
              type="text"
              class="form-control"
              placeholder="Last Name"
              aria-label="Last name"
            />
            <input
              type="text"
              class="form-control"
              placeholder="Telephone No"
              aria-label="Telephone No"
            />
          </div>
          <div className="address__section">
            <span className="section__intro">Address</span>
            <div className="input__card">
              <textarea
                type="text"
                class="form-control"
                placeholder="Address Line 1"
                required
                rows="2"
              />
              <textarea
                type="textarea"
                class="form-control"
                placeholder="Address Line 2"
                required
                rows="2"
              />
              <input
                type="text"
                class="form-control"
                placeholder="City"
                required
              />
              <input
                type="text"
                class="form-control"
                placeholder="PostCode/Zip Code"
                required
              />
            </div>
          </div>
        </div>
        <div className="vechile__info">
          <span className="section__intro">Vehicle Info</span>
          <div className="vehicle_type_section">
            <div classname="type">
              <label>Type</label>
              <select class="form-select">
                <option selected>Select a Vehicle type</option>
                <option value="Cabriolet">Cabriolet</option>
                <option value="Coupe">Coupe</option>
                <option value="Estate">Estate</option>
                <option value="HatchBack">HatchBack</option>
                <option value="other">other</option>
              </select>
            </div>
            <div classname="size">
              <label>Engine Size</label>
              <select class="form-select">
                <option selected>Select Engine Size</option>
                <option value="1000">1000</option>
                <option value="1600">1600</option>
                <option value="2000">2000</option>
                <option value="2500">2500</option>
                <option value="2500">2500</option>
                <option value="other">other</option>
              </select>
            </div>
            <div classname="Usage">
              <label>Usage</label>
              <select class="form-select">
                <option selected>Commercial Usage?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div classname="registered__state">
              <label class="form-label">Registered State</label>
              <select class="form-select">
                <option selected>Registered State ?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
          <div className="vehicle_type_sub_section">
            <div className="driver__count">
              <label>Driver's Count</label>
              <select class="form-select">
                <option selected>Additional Driver's Count</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="registered__date">
              <label>Registered Date</label>
              <input type="date" class="form-control" name="register" />
            </div>
            <div className="curr__value">
              <label>Current Value(0-50000)</label>
              <input
                type="range"
                class="form-range"
                min="0"
                max="50000"
                name="registeredDate"
              />
            </div>
          </div>
        </div>
        <div className="form__submission">
          <button>Submit</button>
          <button>Reset</button>
        </div>
      </div>
    </>
  );
};
