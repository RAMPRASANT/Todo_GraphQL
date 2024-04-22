import graphql from 'graphql';
import TaskType from '../types/TaskType.js';
import Task from '../model/TaskModel.js';
import UserType from '../types/UserType.js';

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString
} = graphql;

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        addTask: {
            type: TaskType,
            args: {
                time: { type: GraphQLString },
                heading: { type: GraphQLString },
                content: { type: GraphQLString },
                type: { type: GraphQLString }
            },
            resolve(parentValue, args) {
                return new Task(args).save();
            }
        },
        deleteTask: {
            type: TaskType,
            args: { id: { type: GraphQLID } },
            resolve(parentValue, { id }) {
                return Task.findByIdAndRemove(id);
            }
        },
        login: {
            type: UserType,
            args: { email: { type: GraphQLString }, password: { type: GraphQLString } },
            resolve(parentValue, args, req) {

            }
        }
    })
})

export default mutation;