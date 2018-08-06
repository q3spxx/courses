export interface CourseListItemData {
    id: number,
    name: string,
    description: string,
    isTopRated: boolean,
    date: string,
    authors: Author[]
    length: number
}
export interface Author {
    id: number,
    firstName: string,
    lastName: string
}