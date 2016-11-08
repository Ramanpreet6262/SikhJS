import React from 'react';
import Json from '../Json';

export const TYPES = [
  'Initials from beginning (Gurmukhi)',
  'Initials from anywhere (Gurmukhi)',
  'Full word (Gurakhar)',
  'Full word (English)',
];

export const SOURCES = {
  all: 'All Sources',
  G: 'Guru Granth Sahib Ji',
  D: 'Dasam Granth Sahib',
  B: 'Bhai Gurdas Ji Vaaran',
  N: 'Bhai Nand Lal Ji Vaaran',
  A: 'Amrit Keertan',
  U: 'Uggardanti',
};

export const buildApiUrl = options => {
  const {
    API_URL = `https://api.gurbaninow.com/`,
    q = false,
    source = false,
    type = false,
    writer = false,
    raag = false,
    ang = false,
    results = false,
    id = false,
    hukam = false,
    akhar = false,
    lipi = false,
  } = options;

  let url = API_URL;

  if (q !== false) {
    url += `search/${q}/?`;
    if (source) url += `source=${source}&`;
    if (type) url += `searchtype=${type}&`;
    if (writer) url += `writer=${writer}&`;
    if (raag) url += `raag=${raag}&`;
    if (ang) url += `ang=${ang}&`;
    if (results) url += `results=${results}&`;
  } else if (id !== false) { 
    url += `shabad/${id}`;
  } else if (ang !== false) {
    url += `ang/${ang}/`;
    if (source) url += `source=${source}`;
  } else if (hukam !== false) {
    url += `hukamnama`;
  } else if (akhar !== false && lipi !== false) {
    url += `akhar/${lipi}`;
  } else {
    throw new Error('Invalid props sent');
  }
  return url;
}

export default ({ options, ...props }) => <Json url={buildApiUrl(options)} {...props} />;
