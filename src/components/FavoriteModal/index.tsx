import { FavoriteContent } from '../FavoriteContent'
import { ModalStyle } from './style'


export function ModalFavorite(){

    return(
        <ModalStyle>
            <div className='modal'>
                <FavoriteContent/>
            </div>

        </ModalStyle>


    )
}