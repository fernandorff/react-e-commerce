import React from 'react'
import { Avatar } from 'antd'
import { useDispatch } from 'react-redux'
import { isUserProfileDrawerOpen } from '../../redux/slices/drawer.slice.js'
import { UserProfileDrawerComp } from '../drawers/UserProfileDrawer.comp.jsx'

export const UserProfileDrawerButtonComp = () => {
  const dispatch = useDispatch()

  const userData = JSON.parse(localStorage.getItem('user'))

  const handleisUserProfileDrawerOpen = () => {
    dispatch(isUserProfileDrawerOpen())
  }

  return (
    <>
      <UserProfileDrawerComp />
      <Avatar
        size={'large'}
        className={'flex cursor-pointer'}
        shape={'circle'}
        src={userData.profileImgSrc}
        onClick={handleisUserProfileDrawerOpen}
      />
    </>
  )
}
