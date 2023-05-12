import { Link } from "react-router-dom";
import swal from 'sweetalert';


const AddCoffee = () => {

    const handleAddCoffee = (event) => {
        event.preventDefault();

        const form = event.target;
        const coffeeName = form.coffeeName.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoURL = form.photoURL.value;
        const newCoffee = { coffeeName, quantity, supplier, taste, category, details, photoURL };
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    swal({
                        title: "Success!",
                        text: "Coffee Added!",
                        icon: "success",
                      });
                }
            })
    }

    return (
        <div className='container mx-auto mt-7'>
            <h3 className="my-5"><Link to='/'>Back to home</Link></h3>
            <form onSubmit={handleAddCoffee} className="form-control space-y-3 w-full bg-[#f4f3f0] p-24 mx-auto">
                <h2 className='text-5xl text-center font-bold text-amber-950'>Add New Coffee</h2>
                <p className='text-center text-amber-950'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus rem excepturi esse, tenetur debitis ut id, itaque eveniet veniam enim quaerat ad natus. Ea cumque in labore, hic eos natus. Repudiandae quis ex, saepe quo tempore provident tempora facilis reprehenderit!</p>
                {/* form row */}
                <div className='md:flex justify-center mt-12 space-x-8'>
                    <label className="input-group md:w-1/2">
                        <span>Coffee Name</span>
                        <input type="text" name='coffeeName' placeholder="Iced Americano" className="input input-bordered w-full" />
                    </label>
                    <label className="input-group md:w-1/2">
                        <span>Available Quantity</span>
                        <input type="text" name='quantity' placeholder="0" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className='md:flex justify-center mt-12 space-x-8'>
                    <label className="input-group md:w-1/2">
                        <span>Supplier</span>
                        <input type="text" name='supplier' placeholder="K&K Company" className="input input-bordered w-full" />
                    </label>
                    <label className="input-group md:w-1/2">
                        <span>Taste</span>
                        <input type="text" name='taste' placeholder="Bitter" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className='md:flex justify-center mt-12 space-x-8'>
                    <label className="input-group md:w-1/2">
                        <span>Category</span>
                        <input type="text" name='category' placeholder="Gorib" className="input input-bordered w-full" />
                    </label>
                    <label className="input-group md:w-1/2">
                        <span>Details</span>
                        <input type="text" name='details' placeholder="No sugar" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className=''>
                    <label className="input-group md:w-full">
                        <span>Photo URL</span>
                        <input type="link" name='photoURL' placeholder="https://www.sampleimgae.com" className="input input-bordered w-full" />
                    </label>
                </div>
                <button className="btn w-full bg-[#6f4e37]">Add Coffee</button>
            </form>
        </div>
    );
};

export default AddCoffee;