document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const reviewerName = document.getElementById('reviewer-name').value;
    const reviewRating = document.getElementById('review-rating').value;
    const reviewText = document.getElementById('review-text').value;

    // Create a review element
    const review = document.createElement('div');
    review.classList.add('review');
    review.innerHTML = `
        <h4>${reviewerName} (Rating: ${reviewRating})</h4>
        <p>${reviewText}</p>
    `;

    // Append the review to the reviews list
    document.getElementById('reviews-list').appendChild(review);

    // Clear the form
    document.getElementById('review-form').reset();
});
