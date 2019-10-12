import React, { useState, useMemo } from 'react';
import camera from '../../assets/camera.svg';
import './styles.css';
import api from '../../services/api';



export default function New({ history }) {
const [company, setCompany] = useState('');
const [techs, setTechs] = useState('');
const [price, setPrice] = useState('');
const [thumbnail, setTumbnail] = useState(null);

const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
    },[thumbnail]
)


async function handelSubmit(event){
    event.preventDefault();



    const data = new FormData();
    const user_id = localStorage.getItem('user');

    data.append('thumbnail', thumbnail);
    data.append('company', company);
    data.append('techs', techs);
    data.append('price', price);


    await api.post('./spots', data, {
        headers: { user_id}
    }) 

    history.push('/dashboard');
 }


    return (
        <form onSubmit={handelSubmit}>
            <label 
            id="thumbnail" 
            style={{backgroundImage: `url(${preview})` }}
            className={thumbnail ? 'has-thumbnail' : ''}
            
            >

                <imput type="file" onChange={event => setTumbnail(event.target.files[0])}/>
                <img src={camera} alt="Slect img"/>
            </label>

            <label htmlFor="company">EMPRESA*</label>
            <imput 
                id="company"
                placeholder="Sua empresa Incrível"
                value={company}
                onChange={event=>setCompany(event.target.value)}
            />

            <label htmlFor="techs">TECNOLOGIAS * <span>(separadas por virgula)</span></label>
            <imput 
                id="techs"
                placeholder="Quais Tecnologias Usam?"
                value={techs}
                onChange={event=>setTechs(event.target.value)}
            />

            <label htmlFor="price">VALOR DA DIÁRIA * <span>(em branco para GRATUITO)</span></label>
            <imput 
                id="price"
                placeholder="Valor cobrado por dia"
                value={price}
                onChange={event=>setPrice(event.target.value)}
            />

            <button type="submit" className="btn">Cadastrar</button>

        </form>
    )
}