import React from 'react'

function Navbar() {
    return (
        <>
                <nav class="navbar navbar-expand-lg bg-white navbar-light py-3 fixed-top">
                    <div class="container">
                        <a href="#" class="navbar-brand">Frontend Bootcamp</a>

                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#data"
                        >
                        <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="data">
                                <ul class="navbar-nav ms-auto">
                                    <li class="nav-item">
                                    <a href="#learn" class="nav-link">What You'll Learn</a>
                                    </li>
                                    <li class="nav-item">
                                    <a href="#questions" class="nav-link">Questions</a>
                                    </li>
                                    <li class="nav-item">
                                    <a href="#instructors" class="nav-link">Instructors</a>
                                    </li>
                                </ul>
                        </div>
                    </div>
         </nav>
        </>
    )
}

export default Navbar
