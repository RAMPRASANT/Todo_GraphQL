import gql from 'graphql-tag';

export default gql`
mutation ADD_TASK($time: String, $heading: String, $content: String, $type: String) {
    addTask(time: $time, heading: $heading, content: $content, type: $type){
        id
        time
        heading
        content
        type
    }
}
`;