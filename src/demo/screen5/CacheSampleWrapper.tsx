import { useCache } from 'nsc-practice';
import { useEffect } from 'react';

import type { User } from './UsersSample';
import type { Todo } from './TodosSample';
import UsersSample from './UsersSample';
import TodosSample from './TodosSample';

const CacheSampleWrapper = () => {
    const { set: setUsers } = useCache<User[]>('users');
    const { set: setTodos } = useCache<Todo[]>('todos');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setUsers(data));

        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then((res) => res.json())
            .then((data) => setTodos(data));
    }, []);

    return (
        <div>
            <UsersSample />
            <hr />
            <TodosSample />
        </div>
    );
};

export default CacheSampleWrapper;
