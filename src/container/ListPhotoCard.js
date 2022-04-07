import { withPhotos } from '../hoc/Get_Query'
import { ListPhotoCardComponent } from '../components/ListPhotoCards'

export const ListPhotoCard = withPhotos(ListPhotoCardComponent)
