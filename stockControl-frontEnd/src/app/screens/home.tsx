import React from "react";
import { useRouter } from "expo-router";
import Toolbar from "@/src/components/home/Toolbar";
import  SearchBar  from "@/src/components/home/SearchBar";
import Background from "@/src/components/Background";
import CategoryTitle from "@/src/components/home/CategoryTitle";
import ProductComponent from "@/src/components/home/ProductComponent";


/*console.log(wp('100%'));
console.log(hp('100%'));*/




export default function index() {
    const router = useRouter();
    return(
        <Background>
            <Toolbar></Toolbar>
            <SearchBar></SearchBar>
            <CategoryTitle >Categoria X</CategoryTitle>
            <ProductComponent></ProductComponent>
        </Background>
        
        
    )}

