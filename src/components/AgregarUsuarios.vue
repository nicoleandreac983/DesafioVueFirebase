<template>
        <div class="container border p-4 mt-4 bg-light">
        <h2>Agregar Usuario</h2>
        <form class="mb-3" @submit.prevent="addUsuario">
            <input class="form-control mt-3" v-model="nombre" placeholder="Nombre" required />
            <input class="form-control mt-3" v-model="apellido" placeholder="Apellido" required />
            <input class="form-control mt-3" v-model="correo_electronico" placeholder="Correo Electrónico" required type="email" />
            <button class="btn btn-success mt-3" type="submit">Agregar Usuario</button>
        </form>
    </div>
   </template>
   

<script>

import firebaseApp from '../../firebaseConfig.js';
import {getFirestore, collection, addDoc} from 'firebase/firestore';


export default {
    data() {
        return {
            nombre: '',             
            apellido: '',
            correo_electronico: ''
        };
    },
    methods: {
        async addUsuario() {
           
            if (this.nombre && this.apellido && this.correo_electronico) {
                const db = getFirestore(firebaseApp);
                const usuariosRef = collection(db, 'usuarios');
                
                try {
                    await addDoc(usuariosRef, {
                        nombre: this.nombre,
                        apellido: this.apellido,
                        correo_electronico: this.correo_electronico
                    });
                    
                    this.nombre = '';
                    this.apellido = '';
                    this.correo_electronico = '';
                } catch (error) {
                    console.error("Error al agregar el usuario:", error);
                }
            } else {
                console.warn("Por favor, completa todos los campos.");
            }
        }
    }
};

</script>