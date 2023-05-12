import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert'

const CoffeeCard = ({ coffee }) => {
    // console.log(coffee);
    const { _id, photoURL, details, coffeeName, category, quantity, supplier, taste } = coffee;

    const handleDelete = (_id) => {
        swal({
            title: "Are you sure you want to delete it?",
            text: "Once deleted, you will not be able to recover it!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    console.log(willDelete, _id);
                    fetch(`http://localhost:5000/coffee/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {
                                swal("Poof! This coffee has been deleted!", {
                                    icon: "success",
                                });
                            }
                        })

                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='w-fit' src={photoURL} alt="Album" /></figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <div className=''>
                        <h2 className="card-title text-1xl"><b>Name: </b>{coffeeName}
                        </h2>
                        <p><b>Category: </b>{category}</p>
                        <p><b>Taste: </b>{taste}</p>
                        <p><b>Supplier: </b>{supplier}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical space-y-1">
                            <button className="btn btn-circle btn-outline text-xs hover:border-info border-info text-info hover:bg-info">View</button>
                            <Link to={`/updateCoffee/${_id}`}>
                                <button className="btn btn-circle btn-outline text-xs hover:border-accent border-accent text-accent hover:bg-accent">Edit</button>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline text-xs hover:border-error border-error text-error hover:bg-error">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;