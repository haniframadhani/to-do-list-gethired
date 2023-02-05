import EmptyStateActivity from "../../assets/emptyStateSvg/emptyActivity"
import EmptyStateList from "../../assets/emptyStateSvg/emptyList"
import React from "react"
export default function EmptyState({ dataCy }) {
  return (
    <div data-cy={dataCy} className="mt-14">
      {dataCy === "activity-empty-state" ? <EmptyStateActivity></EmptyStateActivity> :
        <EmptyStateList></EmptyStateList>}
    </div>
  )
}