import LoadingComponent from '@/components/ui/LoadingComponent'
import React from 'react'

const Loading = () => {
  return (
    <LoadingComponent cardLimit={6} isCarousel={false} />
  )
}

export default Loading