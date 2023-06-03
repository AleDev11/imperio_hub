import { NextApiRequest, NextApiResponse } from 'next'
import { without } from 'lodash'

import serverAuth from '@/lib/serverAuth'
import prismadb from '@/lib/prismadb'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return res.status(405).end();

    const { movieId, remove } = req.body;

    try {
        const { currentUser } = await serverAuth(req, res);

        if (!remove) {
            const existingMovie = await prismadb.movie.findUnique({
                where: {
                    id: movieId
                }
            });

            if (!existingMovie) throw new Error('Invalid movie Id');

            const updatedUser = await prismadb.user.update({
                where: {
                    email: currentUser.email || '',
                },
                data: {
                    favoriteIds: {
                        push: movieId
                    }
                }
            });

            return res.status(200).json(updatedUser);
        }

        if (remove) {
            const existingMovie = await prismadb.movie.findUnique({
                where: {
                    id: movieId
                }
            });

            if (!existingMovie) throw new Error('Invalid ID');

            const updatedFavoriteIds = without(currentUser.favoriteIds, movieId);

            const updatedUser = await prismadb.user.update({
                where: {
                    email: currentUser.email || '',
                },
                data: {
                    favoriteIds: updatedFavoriteIds,
                }
            });

            return res.status(200).json(updatedUser);
        }

        return res.status(405).end();
    } catch (error) {
        console.error(error);
        return res.status(400).end();
    }
}