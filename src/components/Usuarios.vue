<template>
    <div class="container border p-5 mt-5 bg-light">
        <h2>Lista de Usuarios</h2>
        <ul>
            <li class="mt-2" v-for="usuario in usuarios" :key="usuario.id">
                {{ usuario.id }} - {{ usuario.nombre }} {{ usuario.apellido }} - {{ usuario.correo_electronico }}
                <button class="btn btn-danger ms-2" @click="deleteUsuario(usuario.id)">Eliminar</button>
            </li>
        </ul>
    </div>
</template>

<script>
import firebaseApp from '../../firebaseConfig.js';
import {getFirestore, collection, getDocs, deleteDoc, doc, onSnapshot} from 'firebase/firestore';

export  default {
    name: 'Usuarios',
    data(){
        return{
            usuarios: [],
        }
    },
    async mounted(){
        try {
            const db = getFirestore(firebaseApp);
        const usuariosRef = collection(db, 'usuarios');
        onSnapshot(usuariosRef, (snapshot) => {
            this.usuarios = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
        });

        } catch (e) {
            console.error(e)
        }
    },
    methods: {
        async deleteUsuario(usuarioId) {
            const db = getFirestore(firebaseApp);
            const usuarioRef = doc(db, 'usuarios', usuarioId);
            await deleteDoc(usuarioRef);
        }
    }
}
</script>