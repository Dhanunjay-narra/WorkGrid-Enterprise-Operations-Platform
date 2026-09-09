export const BiDataSourceMutationTypeDefs = `
  input CreateBiDataSourceInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createBiDataSource(input: CreateBiDataSourceInput!): BiDataSource!
    deleteBiDataSource(id: ID!): Boolean!
  }
`;

export const BiDataSourceMutationResolvers = {
  Mutation: {
    createBiDataSource: async (_: any, args: { input: any }) => {
      return {
        id: "ana_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteBiDataSource: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
