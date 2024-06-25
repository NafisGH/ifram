document.getElementById('dealForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    fetch('https://api.pipedrive.com/v1/deals?api_token=0dfb0dd2d691f927f9484c36fa35797c8174a909', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: `New Job: ${data.job_type}`,
            value: 0, // Adjust as needed
            person_id: 1, // Replace with actual person ID
            org_id: 1, // Replace with actual organization ID
            user_id: 1, // Replace with actual user ID
            custom_fields: {
                job_description: data.job_description,
                job_source: data.job_source,
                address: data.address,
                city: data.city,
                state: data.state,
                zip_code: data.zip_code,
                area: data.area,
                start_date: data.start_date,
                start_time: data.start_time,
                end_time: data.end_time,
                test_select: data.test_select
            }
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Deal saved successfully');
        } else {
            alert('Error creating deal: ' + data.error);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
