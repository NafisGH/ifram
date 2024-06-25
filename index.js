
        document.getElementById('dealForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const formData = new FormData(event.target);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            fetch('https://api.pipedrive.com/v1/deals?api_token=YOUR_API_TOKEN', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: data.job_type,
                    value: 0, // Adjust as needed
                    person_id: 1, // Replace with actual person ID
                    org_id: 1, // Replace with actual organization ID
                    user_id: 1, // Replace with actual user ID
                    ...data
                })
            })
            .then(response => response.json())
            .then(data => {
                alert('Deal saved successfully');
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
