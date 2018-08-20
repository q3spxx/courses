export default {
    '/courses': [
        {name: 'Courses', url: '/courses'}
    ],
    '/courses/new': [
        {name: 'Courses', url: '/courses'},
        {name: 'New Course', url: '/courses/new'}
    ],
    '/courses/:id': [
        {name: 'Courses', url: '/courses'},
        {name: ':title', url: '/courses/:id'}
    ]
}