import React, { useState, useMemo, useEffect } from 'react'

const componentInfos = [
  { label: 'a', Component: () => <div>Test1</div> },
  { label: 'b', Component: () => <div>Test2</div> },
]

export default function DevBook() {
    const [activeLabel, setActiveLabel] = useState(null)
    useEffect(() => {
      const firstComponentInfo = componentInfos[0]
      firstComponentInfo && setActiveLabel(firstComponentInfo.label)
    }, [])
    const TestingComponent = useMemo(() => {
      const componentInfo = componentInfos.find(v => v.label === activeLabel)
      return componentInfo ? componentInfo.Component : null
    }, [activeLabel])
    function handleClickLabel(v) {
      setActiveLabel(v.label)
    }
    return <div style={{display: 'flex', width: '100%', height: '100%'}}>
      <div style={{width: 200, height: '100%', background: 'white', borderRight: '1px solid blue'}}>
        {componentInfos.map((v, index) =>
            <div key={`${v.label}-${index}`} style={{height: 20, background: activeLabel === v.label ? '#ccc' : 'none', boxSizing: 'content-box', padding: '0 5px'}} onClick={() => handleClickLabel(v)}>
              {v.label}
            </div>
          )}
      </div>
      <div style={{width: 'calc(100% - 200px)', height: '100%'}}>
        {TestingComponent && <TestingComponent />}
      </div>
    </div>
}