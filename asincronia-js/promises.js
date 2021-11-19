import posts from './posts.js'

const findPostById = (id) => {
    const post = posts.find(item => item.id === id);

    return new Promise((resolve, reject) => {
        if (post)
            resolve(post);
        else
            reject("No post found with id: " + id);
    });
}

findPostById(1)
    .then((post) => {// Cuando ocurre el resolve
        console.log(post);

        // Promises anidadas. Promises Hell. 
        return findPostById(2)
            .then(post => {
                console.log(post);
                return findPostById(3)
                    .then(post => {
                        console.log(post);
                        return findPostById(4);
                    })
            })
    })


    .catch(err => {// Cuando ocurre el reject
        console.log(err)
    })