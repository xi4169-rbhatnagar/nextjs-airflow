export default function (req, response) {
    const { id } = req.query;
    fetch(`http://localhost:8080/api/v1/dags/run/dagRuns/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic YWlyZmxvdzphaXJmbG93"
        },
    })
        .then((res) => { console.log(res); return res.json() })
        .then(
            (res) => response.status(200).send(res)
        );
}
