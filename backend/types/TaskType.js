import graphql from 'graphql';

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} = graphql;

const TaskType = new GraphQLObjectType({
    name: 'tasktype',
    fields: () => ({
        id: { type: GraphQLID },
        time: { type: GraphQLString },
        heading: { type: GraphQLString },
        content: { type: GraphQLString },
        type: { type: GraphQLString },
    })
})

export default TaskType;

