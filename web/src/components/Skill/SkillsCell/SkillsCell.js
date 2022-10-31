import { Link, routes } from '@redwoodjs/router'

import Skills from 'src/components/Skill/Skills'

export const QUERY = gql`
  query FindSkills {
    skills {
      id
      name
      degree
      percent
      category
      active
      sort
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No skills yet. '}
      <Link to={routes.newSkill()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ skills }) => {
  return <Skills skills={skills} />
}
