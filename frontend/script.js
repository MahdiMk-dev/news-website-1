$(document).ready(function() {
    // Function to fetch news from database and display on page load
    function fetchNews() {
        $.ajax({
            url: 'http://localhost/news-website/backend/read.php',
            type: 'GET',
            success: function(response) {
                $('#newsList').empty();
                response.forEach(function(newsItem) {
                    $('#newsList').append('<div class="news-article"><h2  class="news-title">' + newsItem.title + '</h2><p  class="news-content">' + newsItem.content + '</p></div>');
                });
            }
        });
    }

    // Call fetchNews function on page load
    fetchNews();

    // Submit form to add news
    $('#addNewsForm').submit(function(event) {
        console.log("new")
        event.preventDefault();
        var title = $('#title').val();
        var content = $('#content').val();

        $.ajax({
            url: 'http://localhost/news-website/backend/news.php',
            type: 'POST',
            data: {title: title, content: content},
            
            success: function(response) {
                console.log(response);
                fetchNews(); // Fetch news again to update list with new item
                $('#addNewsForm')[0].reset(); // Clear form fields
            },
            error: function(xhr, status, error){
                // Display error message or handle error
                alert('Error: ' + error);
            }
            
        });

    });
});
