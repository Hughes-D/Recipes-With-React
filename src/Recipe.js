import React from 'react'

export default function Recipe() {
    return (
        <div>
            <div>
                <h3>Plain Chicken</h3>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
            <div>
                <span>Cook Time:</span>
                <span>1:45</span>
            </div>
            <div>
                <span>Servings:</span>
                <span>3</span>
            </div>
            <div>
                <span>Instructions:</span>
                <div>
                    1. Put salt on chicken
                    2. Put chicken in oven
                    3. Eat chicken
                </div>
            </div>
        </div>
    )
}
