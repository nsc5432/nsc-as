import { useCache } from 'nsc-practice';

export type Todo = { id: number; title: string; completed: boolean };

const TodosSample = () => {
    const { value: todos } = useCache<Todo[]>('todos');

    return (
        <>
            <ul>
                {todos?.map((todo) => (
                    <li key={todo.id}>
                        {todo.title} - {todo.completed ? '✅' : '❌'}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TodosSample;
