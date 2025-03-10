// Author : Younes A <https://github.com/younes-io>

export interface StrategyOptions {
	[key: string]: any;
}

export interface SelfServiceOptions {
	iamApiKey?: string;
	managementUrl?: string;
	tenantId?: string;
	oAuthServerUrl?: string;
	iamTokenUrl?: string;
}

export class Strategy {
	authenticate: () => void;
}

export interface ApplicationIdentityToken {
	accessToken: string;
	tokenType: string;
	expiresIn: number;
}

export interface CustomIdentityToken extends ApplicationIdentityToken {
	identityToken: string;
}

export interface UserSCIM {
	id: string;
	userName: string;
	[key: string]: any;
}

// tslint:disable-next-line:no-unnecessary-class
export class APIStrategy extends Strategy {
	constructor(options: StrategyOptions);
}

// tslint:disable-next-line:no-unnecessary-class
export class WebAppStrategy extends Strategy {
	constructor(options: StrategyOptions);
}

// tslint:disable-next-line:no-unnecessary-class
export class TokenManager {
	constructor(options: StrategyOptions);
	getApplicationIdentityToken: () => Promise<ApplicationIdentityToken | Error>;
	getCustomIdentityTokens: () => Promise<CustomIdentityToken | Error>;
}

// tslint:disable-next-line:no-unnecessary-class
export class SelfServiceManager {
	constructor(options: SelfServiceOptions);
	signUp: (
		userData: unknown,
		language: string,
		iamToken: string
	) => Promise<UserSCIM>;
}

// tslint:disable-next-line:no-unnecessary-class
export class UserProfileManager {
	constructor();
}

// tslint:disable-next-line:no-unnecessary-class
export class UnauthorizedException {
	constructor();
}
