export const BiExportJobMutationTypeDefs = `
  input CreateBiExportJobInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createBiExportJob(input: CreateBiExportJobInput!): BiExportJob!
    deleteBiExportJob(id: ID!): Boolean!
  }
`;

export const BiExportJobMutationResolvers = {
  Mutation: {
    createBiExportJob: async (_: any, args: { input: any }) => {
      return {
        id: "ana_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteBiExportJob: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
