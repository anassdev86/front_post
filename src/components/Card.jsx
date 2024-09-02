const Card = (post) => {
    const calcDate = (d1, d2) => {
        console.log(d1)
        let t1 = d1.getTime();
        let t2 = d2.getTime();
        if(!Math.floor((t2 - t1) / (24*3600*1000))) return 'Today';

        return `${Math.floor((t2 - t1) / (24*3600*1000))} days`;
    }
    console.log(post)
    return <div key={post.post._id} className="card">
        <div className="card_box">
            <div className="card_box--des">
               <h4 className="card_name">{post.post.fullname }</h4>
               <span>{calcDate(new Date(post.post.createdAt), new Date())}</span>
            </div>
            {post.post.photo ? <figure className="card_photo-p">
                <img src={post.post.profileImage} />
            </figure> : null}
        </div>
        <p className="card_title">{post.post.description}</p>
        <img src={post.post.photo} className='card_image' alt="this is a  de profil" />
    </div>
}

export default Card;