import { apibase, apikey } from '../../../lib/rawgio';

export default async (req, res) => {
    const resultado = await fetch(`${apibase}/games?search=${req.query.id}&page_size=3&key=${apikey}`);
    const json = await resultado.json();
    res.status(200).json({
        list: json.results
    })
}