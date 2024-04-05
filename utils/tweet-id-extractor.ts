// Sample tweet URL
// var tweetUrl = "https://x.com/realDonaldTrump/status/1312233807991496704?s=20";


const extract = (tweetUrl: string) => {

    // Split the URL by "/"
    var urlSegments = tweetUrl.split("/");

    // Get the last segment which represents the tweet ID
    var tweetId = urlSegments[urlSegments.length - 1];

    // If there are additional parameters (like '?s=20'), remove them
    tweetId = tweetId.split("?")[0];

    // Output the tweet ID
    return tweetId;

}

export default extract;