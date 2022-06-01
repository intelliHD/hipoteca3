import { MenuItem, Select, Slider, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { calcularTotal } from '../helpers';
import InputNumeric from './InputNumeric';


const Formulario = ({cantidad, setCantidad, plazo, setPlazo, setTotal,deposito,setDeposito,interes,setInteres}) => {

    const [error, setError] = useState(false);

    const calcularPrestamo = e => {
        e.preventDefault();
        if (cantidad === 0 || plazo ==="") {
            setError(true);
            return;
        }
        setError(false);
        
        const total = calcularTotal(cantidad, plazo,interes,deposito);
        setTotal(total);
        //console.log(total);
    }

    const onChange = ({target}) => {
        console.log(target);
        // console.log(target.value * interes / 100);
        switch (target.name) {
            case 'precio':
                setCantidad(parseInt(target.value));
                setDeposito(target.value * interes / 100)
                
                break;
            case 'plazo':
                
                setPlazo(parseInt(target.value))

                break;
            case 'interes':
                
                setInteres(parseInt(target.value))
                setDeposito( (cantidad *target.value / 100).toFixed(0))
                break;
        
            default:
                break;
        }

    } 
    
    useEffect(() => {
        setDeposito(cantidad * interes / 100)
    }, [cantidad])
    const [value, setValue] = React.useState(1000);



    return ( 
        <>
            <form onSubmit={ calcularPrestamo }>
                <div className="column">
                    <div>
                        <label >Cantidad total del préstamo</label>
                        
                        <InputNumeric
                        label={''}
                        name='precio'
                        values={cantidad}
                        handleChange={(e) => onChange(e)  }
                        />
                        <Slider  
                        value={cantidad} 
                        onChange={onChange} 
                        name='precio'
                        min={1000}
                        max={2000000}
                        />
                    </div>
                    <div>
                        <label>Tasa de interés (%)</label>
                        <Select
                            // value={values.interes}
                            className='selected'
                            onChange={(e) => onChange(e)}
                            name='interes'
                            // autoWidth
                            defaultValue={"7"}
                            >
                                <MenuItem value="1">1%</MenuItem>
                                <MenuItem value="2">2%</MenuItem>
                                <MenuItem value="3">3%</MenuItem>
                                <MenuItem value="4">4%</MenuItem>
                                <MenuItem value="5">5%</MenuItem>
                                <MenuItem value="6">6%</MenuItem>
                                <MenuItem value="7">7%</MenuItem>
                                <MenuItem value="8">8%</MenuItem>
                                <MenuItem value="9">9%</MenuItem>
                                <MenuItem value="10">10%</MenuItem>
                                <MenuItem value="11">11%</MenuItem>
                                <MenuItem value="12">12%</MenuItem>
                                <MenuItem value="13">13%</MenuItem>
                                <MenuItem value="14">14%</MenuItem>
                                <MenuItem value="15">15%</MenuItem>
                                <MenuItem value="16">16%</MenuItem>
                                <MenuItem value="17">17%</MenuItem>
                                <MenuItem value="18">18%</MenuItem>
                                <MenuItem value="19">19%</MenuItem>
                                <MenuItem value="20">20%</MenuItem>
                            </Select>
                        {/* <select 
                        onChange={(e) => onChange(e)}
                        name={'interes'}
                        defaultValue={"7"}
                        >
                            <option value="">Seleccionar</option>
                            <option value="1">1%</option>
                            <option value="2">2%</option>
                            <option value="3">3%</option>
                            <option value="4">4%</option>
                            <option value="5">5%</option>
                            <option value="6">6%</option>
                            <option value="7">7%</option>
                            <option value="8">8%</option>
                            <option value="9">9%</option>
                            <option value="10">10%</option>
                            <option value="11">11%</option>
                            <option value="12">12%</option>
                            <option value="13">13%</option>
                            <option value="14">14%</option>
                            <option value="15">15%</option>
                            <option value="16">16%</option>
                            <option value="17">17%</option>
                            <option value="18">18%</option>
                            <option value="19">19%</option>
                            <option value="20">20%</option>
                        </select> */}
                    </div>
                    <div>
                        <label >Plazo en años</label>
                        
                        <TextField
                        type="number" 
                        onChange={(e) => onChange(e)}
                    
                        name='plazo'
                        value={plazo}
                        placeholder='12 años'
                       
                        variant="outlined"
                        
                        />
                        <Slider  
                        value={plazo} 
                        onChange={onChange} 
                        name='plazo'
                        min={1}
                        max={7}
                        />
                    </div>
                </div>
                <div className="btnSubmit">
                    <input type="submit" value="Calcular" />
                </div>
            </form>
            {(error) ? <p className='error'>Todos los campos son obligatorios...</p> : ""}
            
        </>
    );
}
 
export default Formulario;
