import React from "react";
import { useParams } from "react-router";
export default function User(){
    const {id} = useParams()
    return(
        <div className="text-3xl text-center">User:{id}</div>
    )
}