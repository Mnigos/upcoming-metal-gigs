'use client'

import { Checkbox } from '@repo/ui/components/checkbox'
import { Label } from '@repo/ui/components/label'
import { useRouter } from 'next/navigation'

namespace ShowPastCheckbox {
  export type Props = Readonly<{
    isChecked: boolean
  }>
}

function ShowPastCheckbox({ isChecked }: ShowPastCheckbox.Props) {
  const router = useRouter()

  return (
    <div className="flex items-center gap-2">
      <Checkbox
        id="show-past"
        defaultChecked={isChecked}
        onCheckedChange={checked => {
          router.push(`/?show-past=${checked === true}`)
        }}
      />
      <Label htmlFor="show-past">Show past gigs</Label>
    </div>
  )
}

export { ShowPastCheckbox }
