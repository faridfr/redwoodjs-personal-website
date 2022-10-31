// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Experiences" titleTo="experiences" buttonLabel="New Experience" buttonTo="newExperience">
        <Route path="/experiences/new" page={ExperienceNewExperiencePage} name="newExperience" />
        <Route path="/experiences/{id:Int}/edit" page={ExperienceEditExperiencePage} name="editExperience" />
        <Route path="/experiences/{id:Int}" page={ExperienceExperiencePage} name="experience" />
        <Route path="/experiences" page={ExperienceExperiencesPage} name="experiences" />
      </Set>
      <Set wrap={ScaffoldLayout} title="ImagesOnExperienceses" titleTo="imagesOnExperienceses" buttonLabel="New ImagesOnExperiences" buttonTo="newImagesOnExperiences">
        <Route path="/images-on-experienceses/new" page={ImagesOnExperiencesNewImagesOnExperiencesPage} name="newImagesOnExperiences" />
        <Route path="/images-on-experienceses/{id:Int}/edit" page={ImagesOnExperiencesEditImagesOnExperiencesPage} name="editImagesOnExperiences" />
        <Route path="/images-on-experienceses/{id:Int}" page={ImagesOnExperiencesImagesOnExperiencesPage} name="imagesOnExperiences" />
        <Route path="/images-on-experienceses" page={ImagesOnExperiencesImagesOnExperiencesesPage} name="imagesOnExperienceses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Experiences" titleTo="experiences" buttonLabel="New Experience" buttonTo="newExperience">
      </Set>
      <Set wrap={ScaffoldLayout} title="Images" titleTo="images" buttonLabel="New Image" buttonTo="newImage">
        <Route path="/images/new" page={ImageNewImagePage} name="newImage" />
        <Route path="/images/{id:Int}/edit" page={ImageEditImagePage} name="editImage" />
        <Route path="/images/{id:Int}" page={ImageImagePage} name="image" />
        <Route path="/images" page={ImageImagesPage} name="images" />
      </Set>
      <Set wrap={ScaffoldLayout} title="ImagesOnExperienceses" titleTo="imagesOnExperienceses" buttonLabel="New ImagesOnExperiences" buttonTo="newImagesOnExperiences">
      </Set>
      <Set wrap={ScaffoldLayout} title="Experiences" titleTo="experiences" buttonLabel="New Experience" buttonTo="newExperience">
      </Set>
      <Set wrap={ScaffoldLayout} title="Experiences" titleTo="experiences" buttonLabel="New Experience" buttonTo="newExperience">
      </Set>
      <Set wrap={ScaffoldLayout} title="Images" titleTo="images" buttonLabel="New Image" buttonTo="newImage">
      </Set>
      <Set wrap={ScaffoldLayout} title="Experiences" titleTo="experiences" buttonLabel="New Experience" buttonTo="newExperience">
      </Set>
      <Set wrap={ScaffoldLayout} title="Experiences" titleTo="experiences" buttonLabel="New Experience" buttonTo="newExperience"></Set>
      <Set wrap={ScaffoldLayout} title="Experiences" titleTo="experiences" buttonLabel="New Experience" buttonTo="newExperience"></Set>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Skills" titleTo="skills" buttonLabel="New Skill" buttonTo="newSkill">
        <Route path="/skills/new" page={SkillNewSkillPage} name="newSkill" />
        <Route path="/skills/{id:Int}/edit" page={SkillEditSkillPage} name="editSkill" />
        <Route path="/skills/{id:Int}" page={SkillSkillPage} name="skill" />
        <Route path="/skills" page={SkillSkillsPage} name="skills" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Educations" titleTo="educations" buttonLabel="New Education" buttonTo="newEducation">
        <Route path="/educations/new" page={EducationNewEducationPage} name="newEducation" />
        <Route path="/educations/{id:Int}/edit" page={EducationEditEducationPage} name="editEducation" />
        <Route path="/educations/{id:Int}" page={EducationEducationPage} name="education" />
        <Route path="/educations" page={EducationEducationsPage} name="educations" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser"></Set>
      <Set wrap={ScaffoldLayout} title="Images" titleTo="images" buttonLabel="New Image" buttonTo="newImage">
      </Set>
      <Set wrap={ScaffoldLayout} title="Images" titleTo="images" buttonLabel="New Image" buttonTo="newImage"></Set>
      <Set wrap={ScaffoldLayout} title="Skills" titleTo="skills" buttonLabel="New Skill" buttonTo="newSkill"></Set>
      <Set wrap={ScaffoldLayout} title="Images" titleTo="images" buttonLabel="New Image" buttonTo="newImage"></Set>
      <Set wrap={ScaffoldLayout} title="Settings" titleTo="settings" buttonLabel="New Setting" buttonTo="newSetting">
        <Route path="/settings/new" page={SettingNewSettingPage} name="newSetting" />
        <Route path="/settings/{id:Int}/edit" page={SettingEditSettingPage} name="editSetting" />
        <Route path="/settings/{id:Int}" page={SettingSettingPage} name="setting" />
        <Route path="/settings" page={SettingSettingsPage} name="settings" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Educations" titleTo="educations" buttonLabel="New Education" buttonTo="newEducation"></Set>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser"></Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
