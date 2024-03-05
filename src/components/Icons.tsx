import React from 'react'
import type { PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

type IconProps = PropsWithChildren<{
    name:string
}>

const Icons = ({name}:IconProps) => {
  switch(name){
    case 'circle':
        return <Icon name='circle-thin' color='#456654' size={38}/>
        break;
    case 'cross':
        return <Icon name='times' color='#890098' size={38}/>
        break;
    default :
        return <Icon name='pencil' color='#ABC321' size={38}/>    
  }
}

export default Icons