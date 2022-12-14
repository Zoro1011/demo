import { loginModel } from '../../models/auth.model';
import { ApiMethods, ApiRoutes } from '../defineApi';
import Repository from '../RepositoryApi';
import { ReturnResponse } from '../Response';

export interface payloadlogin {
	username: string;
	password: string;
}
const route: ApiRoutes = {
	method: ApiMethods.POST, //GET,DELETE su dung param
	// POST, PUT, PATCH su dung payload
	url: 'auth/login',
};
export const loginAsync = async (
	payload: payloadlogin
): Promise<ReturnResponse<loginModel>> => {
	return Repository(route, payload);
};
