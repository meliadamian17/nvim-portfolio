import { NavigationProps } from "../props"
import React from "react"

export const Navigation: React.FC<NavigationProps> = ({ theme }) => {
  return (
    <div className="w-1/4 pl-4">
      <div
        style={{
          color: theme.instructions,
        }}
      >
        <h4
          style={{
            color: theme.title,
          }}
          className="font-bold"
        >
          Navigation
        </h4>
        <ul>
          <li>hjkl - Move cursor</li>
          <li>:num - Go to line `num`</li>
          <li>:theme - Change theme</li>
          <li>:(home, about, skills, experience, contact) - Change Page</li>
        </ul>
      </div>
    </div>
  )
}
