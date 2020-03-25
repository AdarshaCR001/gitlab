import React from 'react'

function Issues() {
    return (
        <div>
            <div className="content-wrapper" id="Issues" name="issues">

                <div className="mobile-layover"></div>
                <div className="alret-wrapper">
                    <nav className="breadcrumbs container-fulid container-limited" role="navigation">
                        <div className="breadcrumbs-container">
                            <button className="toggle-mobile-nav" name="button" type="button">
                                <span className="sr-only">Open Slider</span>
                                <i aria-hidden="true" data-hidden="true" className="fa-fa-bars"></i>
                            </button>
                            <div className="breadcrumbs-links js-title-container">
                                <ul className="list-unstyled breadcrumbs-list js-breadcrumbs-list">
                                    <li>
                                        <a href="/">ranjithbiswas755</a>
                                    </li>
                                    <li>
                                        <a href="/">CL_task</a>
                                    </li>
                                    <li>
                                        <a href="/project">Issues</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="d-flex"></div>
                    <div className=""> </div>
                </div>
                <div className="container-fluid container-limited">
                    <div className="content" id="content-body">
                        <div className="flash-container flash-conatiner-page sticky">
                        </div>
                        <div className="text-content">
                            <h4> this is an issue tracker</h4>
                            <p> Issues can be bugs, tasks or ideas to be discussed. Also, issues are searchable and filterable.</p>
                        </div>
                        <div className="text-center">
                            <a className="btn btn-sucess" title="New issue" id="new-issue-link" href="#">New Issue</a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Issues
