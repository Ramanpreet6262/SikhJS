import React from 'react';
import Json from '../Json';

export const API_URL = `https://devapi.khajana.org/`;

export const TYPES = [
  'Initials from starting (Gurmukhi)',
  'Initials from anywhere (Gurmukhi)',
  'Full Word (Gurakhar)',
  'Full Word (English)',
  'Romanized (English)',
];

export const SOURCES = {
  all: 'All Sources',
  G: 'Guru Granth Sahib Ji',
  D: 'Dasam Granth Sahib',
  B: 'Bhai Gurdas Ji Vaaran',
  N: 'Bhai Nand Lal Ji Vaaran',
  A: 'Amrit Keertan',
};

export const buildApiUrl = options => {
  const {
    q = false,
    source = false,
    type = false,
    writer = false,
    raag = false,
    ang = false,
    results = false,
    offset = false,
    id = false,
    hukam = false,
    akhar = false,
    lipi = false,
    random = false
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
    if (offset) url += `offset=${offset}&`;
  } else if (id !== false) {
    url += `shabad/${id}`;
  } else if (ang !== false) {
    url += `ang/${ang}/`;
    if (source) url += source;
  } else if (hukam !== false) {
    url += `hukamnama/today`;
  } else if (akhar !== false && lipi !== false) {
    url += `akhar/${lipi}`;
  } else if (random !== false) {
    url += `random`;
  } else {
    throw new Error('Invalid options sent');
  }
  return url;
}

export default ({ options, ...props }) => <Json url={buildApiUrl(options)} {...props} />;
