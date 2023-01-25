import { apibase, apikey } from '../../../lib/rawgio';

export default async (req, res) => {
    const resultado = await fetch(`${apibase}/games/${req.query.id}?key=${apikey}`);
    const json = await resultado.json();
    res.status(200).json({
        info: json
    })
}