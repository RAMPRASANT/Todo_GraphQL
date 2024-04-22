import graphql from 'graphql';
import TaskType from '../types/TaskType.js';
import Task from '../model/TaskModel.js';
import UserType from '../types/UserType.js';

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLList,
} = graphql;

const rootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        tasks: {
            type: new GraphQLList(TaskType),
            resolve(parentValue, args) {
                return Task.find()
            }
        },
        task: {
            type: TaskType,
            args: { id: { type: GraphQLID } },
            resolve(parentValue, args) {
                return Task.findById(args.id);
            }
        },
        user: {
            type: UserType,
            resolve(parentValue, args, req) {
                return req.user
            }
        }
    })
})

export default rootQuery;