import styled from 'styled-components'

const LightText = styled.span`
  color: ${p => p.theme.lightFg};
  font-size: 0.8em;
  line-height: 3px;
`

const InlineCode = styled.span`
  font-family: Hack, 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo,
    Courier, monospace;
  background: rgba(32, 89, 246, 0.06);
  padding: 5px;
  margin: -5px;
`

export { LightText, InlineCode }
