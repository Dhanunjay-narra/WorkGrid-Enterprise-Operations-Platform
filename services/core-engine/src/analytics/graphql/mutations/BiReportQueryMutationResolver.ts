export const BiReportQueryMutationTypeDefs = `
  input CreateBiReportQueryInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createBiReportQuery(input: CreateBiReportQueryInput!): BiReportQuery!
    deleteBiReportQuery(id: ID!): Boolean!
  }
`;

export const BiReportQueryMutationResolvers = {
  Mutation: {
    createBiReportQuery: async (_: any, args: { input: any }) => {
      return {
        id: "ana_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteBiReportQuery: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
