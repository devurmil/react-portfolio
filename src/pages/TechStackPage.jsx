import React from 'react'
import PageWrapper from '../helper/Pagewrapper'
import TechHeader from '../components/TechStack/TechHeader'
import ToolsWorkflow from '../components/TechStack/ToolsWorkFlow'
import TechLearning from '../components/TechStack/TechLearning'
import TechCTA from '../components/TechStack/TechCTA'

function TechStackPage() {
  return (
    <>
     <PageWrapper>
        <TechHeader />
        <ToolsWorkflow />
        <TechLearning />
        <TechCTA />
     </PageWrapper>
    </>
  )
}

export default TechStackPage