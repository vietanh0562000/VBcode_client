var baseApi = '/api/';
export default {
    getProblemById: baseApi + 'problems/',
    getAllProblem: baseApi  + 'problems?page=:page?&category=:cate',
    getContestById: baseApi + 'contests/',
    getAllContest: baseApi + 'contests/',
    getUserById: baseApi + 'users/',
    getAllUser: baseApi + 'users/',
    getAllProblemByIdContest: baseApi + 'contests/:id/problems',
    submissions: baseApi + 'submissions',
    getAllCategories: baseApi + 'categories',
    getRank: baseApi + 'rank',
}