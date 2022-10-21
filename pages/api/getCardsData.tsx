import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json([
        {
          "id": "1",
          "img":"https://links.papareact.com/2io","title":"Outdoor getaways"
        },
        {
          "id": "2",
          "img":"https://links.papareact.com/q7j","title":"Unique stays"
        },
        {
          "id": "3",
          "img":"https://links.papareact.com/s03","title":"Entire homes"},
        {
          "id": "4",
          "img":"https://links.papareact.com/8ix","title":"Pet allowed"
        }
    ])
}