import Card from "./Card";

const CardList = ( { dataBase }) => {
    
    return <div className="content_cardlist">
        { dataBase.map(el => {
            return <Card post = {el} />
        }) }
    </div>
}

export default CardList;