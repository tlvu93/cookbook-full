import { NextApiRequest, NextApiResponse } from 'next';
import { sampleUserData } from '../../../utils/sample-data';

const API_URL = 'https://wbs-cookbook-backend.herokuapp.com/api';
const RECIPE_URL = API_URL + '/recipes';
const POPULATE = '?populate={*}';

const fetchOptions: RequestInit = {
  headers: new Headers({
    Authorization: process.env.API_URL,
  }),
};

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  fetch(RECIPE_URL + POPULATE, fetchOptions).then((response) =>
    console.log(response)
  );

  // try {
  //   if (!Array.isArray(sampleUserData)) {
  //     throw new Error('Cannot find user data');
  //   }

  //   res.status(200).json(sampleUserData);
  // } catch (err: any) {
  //   res.status(500).json({ statusCode: 500, message: err.message });
  // }
};

export default handler;
