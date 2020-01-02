import React, { useState } from 'react';
import { connect } from 'react-redux';
import { doFetchRecipies } from '../actions/recipe';
import { doChangeQuery, doSetQuery } from '../actions/query';
import { getQuery, getQueryKey } from '../selectors/query';
import { getSearch, getMain } from '../selectors/componentSwitch';
import { doSearchPageSwitch } from '../actions/componentSwitch';
import { Button, SearchButton, BackButton, ReviewButton } from './Button';

const SearchRecipies = () => {
  

  return(
    <div>
      <SearchButton />
      <BackButton />
      <ReviewButton>
        Review
      </ReviewButton>
    </div>
  )	
}

export default SearchRecipies;