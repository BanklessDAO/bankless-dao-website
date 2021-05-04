import styled from 'styled-components'
import { breakpoints } from 'src/theme'

export const _Wrapper = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  @media (min-width: ${breakpoints.md}) {
    padding-left: 95px;
    padding-right: 95px;
  }
`
export const _Container = styled.div`
  max-width: 1680px;
  margin: 0 auto;

  ${({ thin }) => !thin && 'padding-left: 18px'};
  ${({ thin }) => !thin && 'padding-right: 18px'};

  @media (min-width: ${breakpoints.md}) {
    ${({ thin }) => !thin && 'padding-left: 60px'};
    ${({ thin }) => !thin && 'padding-right: 60px'};
  }

  @media (min-width: ${breakpoints.lg}) {
    ${({ thin }) => !thin && 'padding-left: 95px'};
    ${({ thin }) => !thin && 'padding-right: 95px'};
  }
`
