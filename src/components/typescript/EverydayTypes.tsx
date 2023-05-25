import React from 'react'


const EverydayTypes = () => {

    let username: String = 'Ivan';
    const age: number = 21;
    const average: number = 7;
    const myarr: string[] = [];
    let big1 = BigInt(29830000777);

    myarr.push(username.toString());
    myarr.push(age.toString());
    myarr.push(average.toString());

    return (
        <>
            <h2>EverydayTypes</h2>
            <table className="table">
                <tbody>
                    <tr>
                        <td>{username} ( {typeof username})</td>
                    </tr>
                    <tr>
                        <td>{age} ( {typeof age})</td>
                    </tr>
                    <tr>
                        <td>{average} ( {typeof average})</td>
                    </tr>
                    <tr>
                        <td>{myarr.join(', ')} ( {typeof myarr}) </td>
                    </tr>
                    <tr>
                        <td>{big1.toString()} ( {typeof big1})</td>
                    </tr>
                </tbody>
            </table>
        </>

    )
}
export default EverydayTypes


