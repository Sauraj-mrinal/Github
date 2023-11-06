const posts = [];
let lastActivityTime = null;

const createPost = async (title) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const post = { title };
            posts.push(post);
            resolve(post);
        }, 1000);
    });
}

const updateLastUserActivityTime = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const now = new Date();
            lastActivityTime = now.toISOString();
            resolve(lastActivityTime);
        }, 1000);
    });
}

const deletePost = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("No posts to delete");
            }
        }, 1000);
    });
}

const preMovie = async () => {

    console.log('person1 shows ticket');
    console.log('person2 shows ticket');

    const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => {
        setTimeout(() => resolve('popcorn'), 3000);
    });

    const addButter = new Promise((resolve, reject) => {
        setTimeout(() => resolve('butter'), 3000);
    });

    const getColdDrinks = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('cold drinks');
        }, 3000);
    });

    let ticket = await person3PromiseToShowTicketWhenWifeArrives;

    console.log(`got the ${ticket}`);
    console.log(`Husband: we should go in now`);
    console.log(`Wife: "I am hungry"`);

    let popcorn = await getPopcorn;
    console.log(`Husband: here is ${popcorn}`);
    console.log(`Husband: we should go in now`);
    console.log(`Wife: "I don't like popcorn without butter!"`);

    let butter = await addButter;
    console.log(`added ${butter}`);

    console.log(`Husband: Anything else darling`);
    console.log(`Wife: let's go, we are going to miss the preview`);
    console.log(`Husband: thanks for the reminder *grin*`);

    let coldDrinks = await getColdDrinks;
    console.log(`got your favorite ${coldDrinks}`);
    return ticket;
};

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');
