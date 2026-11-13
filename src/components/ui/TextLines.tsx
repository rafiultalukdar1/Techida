import { Fragment } from 'react'

interface TextLinesProps {
  /** Text where "\n" marks an optional (desktop-only) line break. */
  text: string
  /** Classes that decide on which screens the line break is hidden. */
  breakClassName: string
}

export function TextLines({ text, breakClassName }: TextLinesProps) {
  const lines = text.split('\n')
  return (
    <>
      {lines.map((line, index) => (
        <Fragment key={line}>
          {index > 0 && (
            <>
              {' '}
              <br className={breakClassName} />
            </>
          )}
          {line}
        </Fragment>
      ))}
    </>
  )
}
