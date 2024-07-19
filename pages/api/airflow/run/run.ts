export default function (req, response) {
    fetch("http://localhost:8080/api/v1/dags/run/dagRuns", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic YWlyZmxvdzphaXJmbG93"
        },
        body: JSON.stringify({}),
    })
        .then((res) => res.json())
        .then(
            (res) => response.status(200).send(res)
        );
}
