export default function (req, response) {
    fetch("http://localhost:8080/api/v1/dags/run/dagRuns", {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic YWlyZmxvdzphaXJmbG93"
        },
    })
        .then((res) => res.json())
        .then(
            (res) => response.status(200).send(res)
        );
}
