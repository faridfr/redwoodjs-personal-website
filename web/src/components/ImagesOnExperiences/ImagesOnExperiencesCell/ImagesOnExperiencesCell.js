import ImagesOnExperiences from 'src/components/ImagesOnExperiences/ImagesOnExperiences'

export const QUERY = gql`
  query FindImagesOnExperiencesById($id: Int!) {
    imagesOnExperiences: imagesOnExperiences(id: $id) {
      id
      imageId
      experienceId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ImagesOnExperiences not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ imagesOnExperiences }) => {
  return <ImagesOnExperiences imagesOnExperiences={imagesOnExperiences} />
}
