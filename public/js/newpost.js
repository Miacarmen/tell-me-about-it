const newPostFormHandler = async (event) => {
  event.preventDefault();

  const post_title = document.querySelector('input[name="post-title').nodeValue;
  const post_body = document.querySelector('textarea[name="post-body')
    .nodeValue;

    const response = await fetch('/api/blogpost', {
        method: 'POST',
        body: JSON.stringify({
            post_title,
            post_body,
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    if(response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Unable to post');
    };
};

document.querySelector('#new-post').addEventListener('submit', newPostFormHandler);