import { Footer } from '../Componets/Footer'
import { Banner } from '../Componets/Banner'
import { Buscadorhome } from '../Componets/Buscadorhome'
import Header from '../Componets/Header'
import { Topsrestaurant } from '../Componets/Topsrestaurant'
import MenuWapper from '../Componets/MenuWapper'

const Index = () => {
    return (
        <div>
            <div id="preloader">
                <div className="sk-spinner sk-spinner-wave" id="status">
                    <div className="sk-rect1"></div>
                    <div className="sk-rect2"></div>
                    <div className="sk-rect3"></div>
                    <div className="sk-rect4"></div>
                    <div className="sk-rect5"></div>
                </div>
            </div>

            <MenuWapper>
                <Buscadorhome />
                <Topsrestaurant />
                <Banner />
                <Footer />
            </MenuWapper>

            <div className="layer">
            </div>{/* Mobile menu overlay mask */}
        </div>

    )
}

export default Index
