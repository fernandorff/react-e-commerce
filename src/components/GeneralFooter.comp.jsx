import React from 'react'
import {Layout, Typography} from 'antd'

export const GeneralFooterComp = () => {
  return (
    <Layout.Footer className={'p-5 bg-slate-900 flex justify-center'}>
        <Typography level={1} className={'text-white text-center'}>Designed by Fernando Rocha</Typography>
    </Layout.Footer>
  )
}
