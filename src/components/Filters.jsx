import React, {Component} from 'react';
import { FaChevronDown } from 'react-icons/fa';
 
class Filters extends Component {
    render() {
        return (
            <div className="d-flex flex-column bd-highlight mb-3">
                <div className="d-flex justify-content-evenly filters-row">
                    <div className="dropdown">
                        <button className="btn d-flex justify-content-between align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Request Type <FaChevronDown />
                        </button>
                        <ul className="dropdown-menu mt-1" aria-labelledby="dropdownMenuButton1">
                            <li>
                            <div class="form-check m-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Looking for a project
                                </label>
                            </div>
                            <div class="form-check m-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Hire a programmer
                                </label>
                            </div>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn d-flex justify-content-between align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Date <FaChevronDown />
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <div class="form-check m-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Today
                                </label>
                            </div>
                            <div class="form-check m-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    This week
                                </label>
                            </div>
                            <div class="form-check m-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    This month
                                </label>
                            </div>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn d-flex justify-content-between align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Location <FaChevronDown />
                        </button>
                        <ul className="dropdown-menu mt-1" aria-labelledby="dropdownMenuButton1">
                            <li>
                            <div class="form-check m-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Moldova
                                </label>
                            </div>
                            <div class="form-check m-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    USA
                                </label>
                            </div>
                            <div class="form-check m-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Germany
                                </label>
                            </div>
                            <div class="form-check m-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Russia
                                </label>
                            </div>
                            <div class="form-check m-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                    Canada
                                </label>
                            </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex justify-content-evenly">
                    <div className="dropdown">
                        <button className="btn d-flex justify-content-between align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Language <FaChevronDown />
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <div class="form-check m-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                Python
                                </label>
                            </div>
                            <div class="form-check m-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                JavaScript
                                </label>
                            </div>
                            <div class="form-check m-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                Java     
                                </label>
                            </div>
                            <div class="form-check m-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                C#
                                </label>
                            </div>
                            <div class="form-check m-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                C
                                </label>
                            </div>
                            <div class="form-check m-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                C++
                                </label>
                            </div>
                            <div class="form-check m-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                Go
                                </label>
                            </div>
                            <div class="form-check m-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                R
                                </label>
                            </div>
                            <div class="form-check m-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                Swift
                                </label>
                            </div>
                            <div class="form-check m-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                PHP
                                </label>
                            </div>

                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn d-flex justify-content-between align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Experience <FaChevronDown />
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <div class="form-check m-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                Beginner
                                </label>
                            </div>
                            <div class="form-check m-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                Junior
                                </label>
                            </div>
                            <div class="form-check m-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                Middle
                                </label>
                            </div>
                            <div class="form-check m-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                Senior
                                </label>
                            </div>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn d-flex justify-content-between align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Field <FaChevronDown />
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <div class="form-check m-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                Front End
                                </label>
                            </div>
                            <div class="form-check m-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                Back End
                                </label>
                            </div>
                            <div class="form-check m-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                Data Scientist
                                </label>
                            </div>
                            <div class="form-check m-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                Game Dev
                                </label>
                            </div>
                            <div class="form-check m-2">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                DataBase Admin
                                </label>
                            </div>

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filters;