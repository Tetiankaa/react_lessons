import React, {StrictMode, useState} from 'react';
import {ListGroup} from "./components/ListGroup/ListGroup";
import {Alert} from "./components/Button/Alert";
import {Button} from "./components/Button/Button";
import {Like} from "./components/Like/Like";
import {Products} from './components/Products'
import {ShoppingCart} from "./components/ShoppingCart/ShoppingCart";
import {Game} from './components/Game';
import {ExpandableText} from './components/ExpandableText';
import {Form1} from "./components/Form/Form1";
import {Form2} from "./components/Form/Form2";
import {Form3} from "./components/Form/Form3";
import {Form4Zod} from "./components/Form/Form4_ZOD";
import {ExpenseForm} from "./components/Form/ExpenseForm";
import {ExpenseList} from "./components/Form/ExpenseList";
import {Expense} from "./components/Form/Expense";
import {ProductList} from "./components/ProductList/ProductList";
import {ProductSelect} from "./components/ProductList/ProductSelect";
import {Users} from "./components/JsonPlaceholder/Users";
import {Widget} from "./components/Pagination/Pagination";

const App = () => {
    // const items = ["New York", "San Francisco", "Tokyo", "London"];
    //
    // const handleSelectItem = (item:string)=>{
    //     console.log(item);
    // }
    // let handleClick = () => console.log('Clicked')
    // let [alertVisible, setAlertVisibility] = useState(false);

    return (
        // <div>
        //     {/*<ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}/>*/}
        //
        //         {/*<Alert>*/}
        //         {/*    Hello <strong>World</strong>*/}
        //         {/*</Alert>*/}
        //
        //     {/*{alertVisible && <Alert children={'My alert'} onClose={()=>setAlertVisibility(false)}/>}*/}
        //
        //     {/*<Button onClick={()=>setAlertVisibility(true)} children={"Click"} color={"primary"}/>*/}
        // {/*<Like onClick={handleClick} />*/}
        //
        //     {/*<Products/>*/}
        //
        // </div>

        <div>
            {/*<ShoppingCart/>*/}

            {/*<Game/>*/}

            {/*<ExpandableText maxChars={50}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus alias amet, architecto aut autem culpa dolore eum exercitationem explicabo facere hic iste itaque iusto labore minima nesciunt officiis perferendis provident tenetur. Aliquam consequatur cum, dicta et facilis fuga iure magni molestiae numquam quidem, reprehenderit repudiandae saepe voluptatibus? Alias commodi deserunt doloribus dolorum, fugiat necessitatibus nesciunt officia perferendis possimus praesentium quibusdam similique sunt temporibus velit voluptas voluptatibus voluptatum. Alias aliquam architecto aspernatur, at beatae commodi culpa delectus eum expedita explicabo facilis fugiat harum ipsa ipsam laborum libero molestiae necessitatibus nihil nostrum quasi quos recusandae reprehenderit saepe soluta totam voluptatem voluptatibus voluptatum. At autem consectetur distinctio dolore ducimus enim esse eveniet expedita facere hic illum, in, magni modi neque nesciunt, nisi non numquam provident quae quidem ratione reiciendis reprehenderit saepe sunt tenetur ut vitae. Alias aperiam aspernatur atque blanditiis commodi dignissimos fuga incidunt molestias nam praesentium quaerat rem repellendus veritatis, voluptatum?</ExpandableText>*/}
        {/*<Form1/>*/}
        {/*    <Form2/>*/}
        {/*    <Form3/>*/}
        {/*<Form4Zod/>*/}

           {/*<Expense/>*/}

           {/*<ProductSelect/>*/}

            <Users/>

            {/*<Widget/>*/}
        </div>
    );
};

export default App;