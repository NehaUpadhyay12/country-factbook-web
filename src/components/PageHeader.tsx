import { Fragment } from "react"

export const PageHeader = () => {
    return (
        <Fragment>
            <div className='page-titlebar'>
                <nav>
                    <div className='container'>
                        <div className='title-name'>Country Factbook</div>
                        <div className='menu'>
                            <div className='items'>
                                <div className='nav-link'>Home</div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='page-banner'>
                <span>European Region</span>
            </div>
        </Fragment>
    )
}