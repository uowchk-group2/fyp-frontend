import { useSelector } from "react-redux";
import Link from 'next/link'
import { Button, Modal } from '@mantine/core';

const DeliveryItemDesktop = (props) => {
    //Redux
    const { currentOrder } = useSelector((state) => state.order);

    const data = props.data
    const isDetail = props.detail

    if (Object.keys(currentOrder).length > 0 && Object.keys(data).length > 0 && currentOrder != undefined) {
        let lastObject = {}
        for (let statusItem of data.status) {
            if (statusItem.arrivalActual != null) {
                lastObject = statusItem
            }
        }
        return (
            <tr
            // className="deliveryTable-desktop"
            >
                <td>{data.id}</td>
                <td>{data.shippingDate}</td>
                <td style={{ maxWidth: "200px" }}>{data.origin}</td>
                <td style={{ maxWidth: "200px" }}>{data.destination}</td>
                <td>{data.quantity} {currentOrder.deliveryUnit}</td>
                <td
                    style={{
                        color: (lastObject.title === "Goods Delivered") ? "green" :
                            (Object.keys(lastObject).length === 0) ? "red" : "blue"
                    }}
                >
                    <b>
                        {(Object.keys(lastObject).length != 0) ? lastObject.title : "Not Started"}
                    </b>
                </td>
                <td>
                    {
                        (isDetail ?
                            <></> :
                            <>
                                <Link href={`/order/${data.orderId}/${data.id}`} >
                                    <Button>
                                        View
                                    </Button>
                                </Link>
                            </>
                        )
                    }

                </td>
            </tr>
        )
    } else {
        return (<></>)
    }
}

export default DeliveryItemDesktop;