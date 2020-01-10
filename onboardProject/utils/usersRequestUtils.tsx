import gql from "graphql-tag";
import { _fetchData, client } from "./apollo";
import { ListProps } from "../atomic/atm/atm.list/list.component";
import { UsersListContext, mountContext } from "../pages/UsersListPage"
import { resolveFieldValueOrError } from "graphql/execution/execute";

export const queryUsers = async (offset:number) => {
    let token: string;
    const setToken = (value:string) =>{
        token = value;
    }

    let context: UsersListContext;
    const setContext = (value:UsersListContext) =>{
        context = value;
    }

    let data: ListProps;
    const setData = (value:ListProps) =>{
        data = value;
    }

    const query = gql`{Users(offset: ${offset}, limit: 10){
        nodes{
            name
            email
        }
    }
    }`

    _fetchData("token"
    ).then(result => (typeof result === "string") ? setToken(result) : setToken("")
    ).then(() => setContext(mountContext(token))
    ).then(() => client.query({ query: query, context: context }
    ).then((result) => setData(result.data.Users.nodes))
    );

    return new Promise( resolve => { resolve(data) } );
}