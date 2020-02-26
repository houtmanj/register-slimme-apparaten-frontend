import React, { useCallback, memo } from 'react'
import { Button } from '@datapunt/asc-ui'
import { Minimise, Enlarge } from '@datapunt/asc-assets'
import { useMapInstance } from '@datapunt/react-maps'

const Zoom= () => {
  const mapInstance = useMapInstance()

  const handleZoom = useCallback(
    (out = false) => {
      if (mapInstance !== null) {
        mapInstance.setZoom(mapInstance.getZoom() + (out ? -1 : 1))
      }
    },
    [mapInstance],
  )

  return (
    <div>
      <Button
        type="button"
        variant="blank"
        title="Inzoomen"
        size={32}
        iconSize={12}
        onClick={() => {
          handleZoom()
        }}
        icon={<Enlarge />}
      />
      <Button
        type="button"
        variant="blank"
        title="Inzoomen"
        size={32}
        iconSize={12}
        onClick={() => {
          handleZoom(true)
        }}
        icon={<Minimise />}
      />
    </div>
  )
}

export default memo(Zoom)