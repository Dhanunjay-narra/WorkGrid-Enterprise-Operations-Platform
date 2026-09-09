export const InvStorageBinMutationTypeDefs = `
  input CreateInvStorageBinInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createInvStorageBin(input: CreateInvStorageBinInput!): InvStorageBin!
    deleteInvStorageBin(id: ID!): Boolean!
  }
`;

export const InvStorageBinMutationResolvers = {
  Mutation: {
    createInvStorageBin: async (_: any, args: { input: any }) => {
      return {
        id: "inv_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteInvStorageBin: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
