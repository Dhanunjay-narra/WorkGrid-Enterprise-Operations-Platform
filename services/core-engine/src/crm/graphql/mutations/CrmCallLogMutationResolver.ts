export const CrmCallLogMutationTypeDefs = `
  input CreateCrmCallLogInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createCrmCallLog(input: CreateCrmCallLogInput!): CrmCallLog!
    deleteCrmCallLog(id: ID!): Boolean!
  }
`;

export const CrmCallLogMutationResolvers = {
  Mutation: {
    createCrmCallLog: async (_: any, args: { input: any }) => {
      return {
        id: "crm_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteCrmCallLog: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
