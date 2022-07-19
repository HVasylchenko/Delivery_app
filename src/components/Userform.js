

function Userform () {
    let formData = {};
   

//    получаем данные из input и записываем в localStorage
    const orderToLS = (event) => {
        formData[event.target.name]=event.target.value;
        localStorage.setItem("userform", JSON.stringify(formData));
        console.log(formData," formData");

    };
  
    return (
        <section className="user-style">
            <iframe title="Google_map"src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d144439.06988938287!2d35.036524234182615!3d48.46811419386332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1657895975960!5m2!1suk!2sua" className= "w-100 p-1" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <form action="" id="form" className="user-form-style" onInput ={orderToLS} >
                <label htmlFor="username">Имя:</label>
                <div></div>
                <input type="text" name="username" id="username" autoComplete="on" placeholder="Enter your name"/>
                <div></div>
                <label htmlFor="email">Email:</label>
                <div></div>
                <input type="email" name="email" id="email" autoComplete="on" placeholder="Enter your email"/>
                <div></div>
                <label htmlFor="tel">Phone:</label>
                <div></div>
                <input type="tel" name="tel" id="tel" autoComplete="on" placeholder="Enter your tel" className="mb-2"/>
                <div></div>
                <input type="submit" value="Submit" className="btn btn-primary" />
            </form> 
        </section>
    )
};
export default Userform;