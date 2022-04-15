import { useState } from 'react'

import {
    InputWrapper,
    TextInput,
    Select,
    NumberInput,
    Button,
} from '@mantine/core';

import { DatePicker } from '@mantine/dates';

import '../../styles/mainStyle.css'

const EditOrder = () => {
    const [loading, setLoading] = useState(false);

    return (
        <div style={{ paddingLeft: 30, paddingRight: 30 }}>
            <h2 style={{ textAlign: 'center' }}>Edit Order</h2>

            <InputWrapper
                required
                label="Name of goods"
                description="A short description about the goods of the order"
            >
                <TextInput placeholder="Name of goods" value={"Jewel"}/>
            </InputWrapper> <br />

            <Select
                label="Supplier"
                placeholder="Supplier"
                required
                data={[
                    { value: 'user1', label: 'Company 1 (Name of user)' },
                    { value: 'user2', label: 'Company 2 (Name of user)' },
                    { value: 'user3', label: 'Company 3 (Name of user)' },
                    { value: 'user4', label: 'Company 4 (Name of user)' },
                ]}
                value={'user1'}
            /> <br />

            <DatePicker
                placeholder="Order creation date"
                label="Order creation date"
                required
                value={ new Date()}
            /> <br />

            <InputWrapper
                required
                label="Unit of goods"
            >
                <TextInput 
                placeholder="Eg: kg, grams, tons ..." 
                value="kg"
                />
            </InputWrapper> <br />

            <NumberInput
                defaultValue={0}
                placeholder="Total order quantity"
                label="Total order quantity"
                value={100}
                required
            /><br />

            <div className="center">
                <Button
                >
                    Reset
                </Button>

                <Button
                    onClick={() => { setLoading(!loading); }}
                    loading={loading}
                >
                    Submit
                </Button>

            </div>


        </div>
    )
}

export default EditOrder;