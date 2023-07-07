import { ComponentProps, FC } from 'react'

import s from './header.module.scss'

export type HeaderProps = ComponentProps<'header'>

export const Header: FC<HeaderProps> = ({ className, ...rest }) => {
  return <header className={s.header} {...rest} />
}
