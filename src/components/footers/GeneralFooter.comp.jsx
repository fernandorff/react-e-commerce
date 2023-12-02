import React from 'react'
import { Layout, Typography } from 'antd'

export const GeneralFooterComp = () => {
  return (
    <Layout.Footer className={'p-5 bg-slate-900 flex justify-center'}>
      <Typography level={1} className={'text-white text-center'}>
        Paradis Virtual Store @2023
      </Typography>
    </Layout.Footer>
  )
}
