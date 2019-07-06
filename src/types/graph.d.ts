export const typeDefs = ["type AdminLoginResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  AdminLogin(password: String!): AdminLoginResponse\n  AdminLogout: AdminLogoutResponse\n  SocialLogin(provider: String!, accessToken: String!): SocialLoginResponse\n  AddVideo(youtubeId: String!, title: String!, overayTime: String!, tags: [String], level: String!, isPublic: Boolean!, subtitle: [Script]!): AddVideoResponse\n  DeleteVideo(id: String!): DeleteVideoResponse\n  EditVideo(id: String!, patchData: VideoPatch!): EditVideoResponse\n}\n\ntype AdminLogoutResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype SocialLoginResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype User {\n  _id: String!\n  email: String!\n  fbId: String\n  fbToken: String\n  googleId: String\n  googleToken: String\n  displayName: String!\n  thumbnail: String!\n  createdAt: String!\n  updatedAt: String!\n}\n\ntype AddVideoResponse {\n  ok: Boolean!\n  error: String\n}\n\ninput Script {\n  start: Float!\n  end: Float!\n  text: String!\n}\n\ntype DeleteVideoResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype EditVideoResponse {\n  ok: Boolean!\n  error: String\n}\n\ninput VideoPatch {\n  title: String\n  overayTime: String\n  tags: [String]\n  level: String\n  isPublic: Boolean\n  subtitle: [Script]\n}\n\ntype GetVideoResponse {\n  ok: Boolean!\n  error: String\n  video: Video\n}\n\ntype Query {\n  GetVideo(id: String!): GetVideoResponse!\n  GetVideoList(page: Int!, tag: String, keyword: String, level: String): GetVideoListResponse\n}\n\ntype GetVideoListResponse {\n  ok: Boolean!\n  error: String\n  videos: [Video]\n}\n\ntype Video {\n  _id: String!\n  youtubeId: String!\n  title: String!\n  overayTime: String!\n  tags: [String]\n  level: String!\n  isPublic: Boolean!\n  views: Int!\n  createdAt: String!\n  updatedAt: String!\n}\n"];
/* tslint:disable */

export interface Query {
  GetVideo: GetVideoResponse;
  GetVideoList: GetVideoListResponse | null;
}

export interface GetVideoQueryArgs {
  id: string;
}

export interface GetVideoListQueryArgs {
  page: number;
  tag: string | null;
  keyword: string | null;
  level: string | null;
}

export interface GetVideoResponse {
  ok: boolean;
  error: string | null;
  video: Video | null;
}

export interface Video {
  _id: string;
  youtubeId: string;
  title: string;
  overayTime: string;
  tags: Array<string> | null;
  level: string;
  isPublic: boolean;
  views: number;
  createdAt: string;
  updatedAt: string;
}

export interface GetVideoListResponse {
  ok: boolean;
  error: string | null;
  videos: Array<Video> | null;
}

export interface Mutation {
  AdminLogin: AdminLoginResponse | null;
  AdminLogout: AdminLogoutResponse | null;
  SocialLogin: SocialLoginResponse | null;
  AddVideo: AddVideoResponse | null;
  DeleteVideo: DeleteVideoResponse | null;
  EditVideo: EditVideoResponse | null;
}

export interface AdminLoginMutationArgs {
  password: string;
}

export interface SocialLoginMutationArgs {
  provider: string;
  accessToken: string;
}

export interface AddVideoMutationArgs {
  youtubeId: string;
  title: string;
  overayTime: string;
  tags: Array<string> | null;
  level: string;
  isPublic: boolean;
  subtitle: Array<Script>;
}

export interface DeleteVideoMutationArgs {
  id: string;
}

export interface EditVideoMutationArgs {
  id: string;
  patchData: VideoPatch;
}

export interface AdminLoginResponse {
  ok: boolean;
  error: string | null;
}

export interface AdminLogoutResponse {
  ok: boolean;
  error: string | null;
}

export interface SocialLoginResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface Script {
  start: number;
  end: number;
  text: string;
}

export interface AddVideoResponse {
  ok: boolean;
  error: string | null;
}

export interface DeleteVideoResponse {
  ok: boolean;
  error: string | null;
}

export interface VideoPatch {
  title: string | null;
  overayTime: string | null;
  tags: Array<string> | null;
  level: string | null;
  isPublic: boolean | null;
  subtitle: Array<Script> | null;
}

export interface EditVideoResponse {
  ok: boolean;
  error: string | null;
}

export interface User {
  _id: string;
  email: string;
  fbId: string | null;
  fbToken: string | null;
  googleId: string | null;
  googleToken: string | null;
  displayName: string;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
}
