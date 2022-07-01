import React from "react";
import { MainTitle } from "../../components/Title";
import Heading from "../../container/Heading";


export default class NotFoundDocs extends React.Component {

    render() {
        return (
            <Heading 
                front={
                    <MainTitle title="Documents Not Found : 404" path="/?error=document_not_found_404" />
                }
            />
        )
    }

}
