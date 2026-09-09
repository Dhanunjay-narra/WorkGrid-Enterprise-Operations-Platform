export const SecTamperLogMutationTypeDefs = `
  input CreateSecTamperLogInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createSecTamperLog(input: CreateSecTamperLogInput!): SecTamperLog!
    deleteSecTamperLog(id: ID!): Boolean!
  }
`;

export const SecTamperLogMutationResolvers = {
  Mutation: {
    createSecTamperLog: async (_: any, args: { input: any }) => {
      return {
        id: "sec_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteSecTamperLog: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
