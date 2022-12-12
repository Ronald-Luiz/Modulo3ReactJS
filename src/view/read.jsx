import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react';
import { Button } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read() {
    document.title="Estoque"
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`https://js0n-server.vercel.app/GPU`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }, [])

    const setData = (id, nomes, valor) => {
        localStorage.setItem('id', id)
        localStorage.setItem('nomes', nomes)
        localStorage.setItem('valor', valor)
    }

    const getData = () => {
        axios.get(`https://js0n-server.vercel.app/GPU`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://js0n-server.vercel.app/GPU/${id}`)
        
        setApiData(apiData.filter(data => data.id !== id))
    }

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Modelo</Table.HeaderCell>
                        <Table.HeaderCell>Marca</Table.HeaderCell>
                        <Table.HeaderCell>Posição</Table.HeaderCell>
                        <Table.HeaderCell>Valor</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {apiData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.nomes}</Table.Cell>
                                <Table.Cell>{data.marca}</Table.Cell>
                                <Table.Cell>{data.posicao}</Table.Cell>
                                <Table.Cell>{data.valor}</Table.Cell>
                                <Table.Cell>
                                    <Link to='/update'>
                                        <Button
                                            color="warning"
                                            onClick={() => setData(data.id, data.nomes, data.valor)}>
                                            Update
                                        </Button>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button color="danger" onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}

                </Table.Body>
            </Table>
        </div>
    )
}
