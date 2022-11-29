import React, { memo } from 'react'

import Input from './Input'
import useSearch from './useSearch'
import StyledSearchWrap from '../styled/StyledSearchWrap'

const Wrap = () => {
    const { handleInput, inputRef, data } = useSearch()
    return (
        <StyledSearchWrap loading={undefined}>
            <Input
                handleInput={handleInput}
                inputRef={inputRef}
                dataLength={data?.length}
            />
        </StyledSearchWrap>
    )
}

export default memo(Wrap)
