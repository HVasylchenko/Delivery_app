// function Userform () {
//     let formData = {};
// //    получаем данные из input и записываем в localStorage
//     const orderToLS = (event) => {
//         formData[event.target.name]=event.target.value;
//         localStorage.setItem("userform", JSON.stringify(formData));
//         console.log(formData," formData");
//     };
//     const clickSubmit = (event) => {
//         event.target.value = "Нour order is ready";
//     };
  
//     return (
//         <section className="user-style">
//             <iframe title="Google_map"src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d144439.06988938287!2d35.036524234182615!3d48.46811419386332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1657895975960!5m2!1suk!2sua" className= "w-100 p-1" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
//             <form action="" id="form" className="user-form-style" onInput ={orderToLS} >
//                 <label htmlFor="username">Имя:</label>
//                 <div></div>
//                 <input type="text" name="username" id="username" autoComplete="on" placeholder="Enter your name"/>
//                 <div></div>
//                 <label htmlFor="email">Email:</label>
//                 <div></div>
//                 <input type="email" name="email" id="email" autoComplete="on" placeholder="Enter your email"/>
//                 <div></div>
//                 <label htmlFor="tel">Phone:</label>
//                 <div></div>
//                 <input type="tel" name="tel" id="tel" autoComplete="on" placeholder="Enter your tel" className="mb-2"/>
//                 <div></div>
//                 <input type="submit" value="Submit" className="btn btn-primary" onClick={clickSubmit} />
//             </form> 
//         </section>
//     )
// };
// export default Userform;

function Userform () {
  
    const loadDataFromForm = (event) => {
        event.preventDefault();

        let order = JSON.parse(localStorage.getItem('order'));
        let orderSQL = "";
        for ( let key in order) {
            orderSQL += `${key} - ${order[key]["amount"]} шт,  `
        };
        
        let address =  event.target.elements.address.value.trim();
        let email =  event.target.elements.email.value.trim();
        let phone =  event.target.elements.phone.value.trim();
        let name =  event.target.elements.name.value.trim();

        // console.log( address, email, phone, name);
       
        if (address === '' || email === '' || phone === '' || name === '') {
            alert('Заполните поля');
            return false;
        };
        
        let obj = {"address" : address, "email" : email, "phonee" : phone, "name" : name, "order" : orderSQL};

        localStorage.setItem("userform", JSON.stringify(obj));

       
      
        fetch("http://localhost:3500", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(obj)
        })
            .then( response => response.json())
            .then(response => {
                console.log(response);
            })
    }

    return (
        <section className="user-style">
            <iframe title="Google_map"src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d144439.06988938287!2d35.036524234182615!3d48.46811419386332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1657895975960!5m2!1suk!2sua" className= "w-100 p-1" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
           
            <form action="" id="form" className="user-form-style" onSubmit={loadDataFromForm} >
                <label htmlFor="">Address:</label>
                <div></div>
                <input type="text" name="address" id="uaddress" autoComplete="on" placeholder="Your address*"/>
                <div></div>
                <label htmlFor="">E-mail:</label>
                <div></div>
                <input type="email" name="email" id="email" autoComplete="on" placeholder="Your e-mail*"/>
                <div></div>
                <label htmlFor="">Phone:</label>
                <div></div>
                <input type="text" name="phone" id="phone" placeholder="Your phone number*"></input>
                <div></div>
                <label htmlFor="">Name:</label>
                <div></div>
                <input type="text" name="name" id="name" placeholder="Your name*"></input>
                <div className="mb-2"></div>
                <input type="submit" value="Submit" className="btn btn-primary mb-2" />
            </form> 
        </section>
    )
};
export default Userform;