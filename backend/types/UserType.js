import graphql from 'graphql';

const {
    GraphQLObjectType,
    GraphQLString
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'usertype',
    fields: () => ({
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    })
})

export default UserType;