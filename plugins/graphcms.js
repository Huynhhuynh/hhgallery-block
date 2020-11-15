import { GraphQLClient } from 'graphql-request';
const API_URL = 'https://api-ap-northeast-1.graphcms.com/v2/ckbrah31d027h01xlhi4z4z64/master'

const graphcmsClient = new GraphQLClient(
  API_URL
);

export default (_, inject) => {
  inject( 'graphcms', graphcmsClient );
};