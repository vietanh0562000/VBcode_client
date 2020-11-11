var baseApi = 'http://127.0.0.1:8000/api/';
export default {
    getProblemById: baseApi + 'problems/',
    getAllProblem: baseApi  + 'problems/',
    getContestById: baseApi + 'contests/',
    getAllContest: baseApi + 'contests/',
    getUserById: baseApi + 'users/',
    getAllUser: baseApi + 'users/',
    getAllProblemByIdContest: baseApi + 'contests/:id/problems',
    submissions: baseApi + '/submissions'
}