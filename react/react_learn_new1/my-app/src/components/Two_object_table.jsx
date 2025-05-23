import img from '../assets/shopping.webp';
import imgs from '../assets/61OgMJeh15L._AC_UF1000,1000_QL80_.jpg';

const TwoObjectTable = () => {
    let object = [
        {
            serial: 1,
            name: "iPhone 16 Pro",
            details: "RAM 8/128GB",
            image: img,
        },
        {
            serial: 2,
            name: "Vivo V40 Pro",
            details: "RAM 8/516GB",
            image: imgs,
        },
    ];

    return (
        <>
            <table border={1}>
                <caption>Product Table</caption>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Product Name</th>
                        <th>Details</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {object.map((data, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{data.name}</td>
                            <td>{data.details}</td>
                            <td>
                                {data.image && (
                                    <img src={data.image} alt={data.name} width={100} height="auto"/>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default TwoObjectTable;
