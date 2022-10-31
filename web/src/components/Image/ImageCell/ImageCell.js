import Image from 'src/components/Image/Image'

export const QUERY = gql`
  query FindImageById($id: Int!) {
    image: image(id: $id) {
      id
      image_url
      background_position
      active
      sort
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Image not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ image }) => {
  return <Image image={image} />
}
