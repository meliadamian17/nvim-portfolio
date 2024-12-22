import { NavigationProps } from "../props"
import React from "react"

export const Navigation: React.FC<NavigationProps> = ({ theme }) => {
  return (
    <div className="w-full pl-4">
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
        <br />
        <ul>

          <li>Basic Navigation: </li>
          <li>  {'>'} h - Move left </li>
          <li>  {'>'} j - Move down </li>
          <li>  {'>'} k - Move up </li>
          <li>  {'>'} l - Move right </li>
          <br />
          <li>Commands: </li>
          <li>  {'>'} :theme - Open theme selection modal </li>
          <li>  {'>'} :navbar - Toggle the navigation bar </li>
          <li>  {'>'} :{`(home, about, experience, projects, skills, contact)`} - Navigate between sections </li>
          <li>  {'>'} :num - Jump to specific line </li>
          <br />
          <li>Interactions: </li>
          <li>  {'>'} Tap Enter on links to navigate </li>
          <li>  {'>'} Use the command line for quick actions </li>
          <br />
          <li>Special Motions: </li>
          <li>  {'>'} w -  Jump forward by a word </li>
          <li>  {'>'} b - Jump backward by a word </li>
          <li>  {'>'} ^ - Jump to the start of the line </li>
          <li>  {'>'} $ - Jump to the end of the line </li>
          <li>  {'>'} gg - Jump to the top of the section </li>
          <li>  {'>'} G - Jump to the bottom of the section </li>
          <li>  {'>'} ctrl + d - Jump Down By A Block </li>
          <li>  {'>'} ctrl + u - Jump Up By A Block </li>
        </ul>
      </div>
    </div>
  )
}
