export const CrmAccountMutationTypeDefs = `
  input CreateCrmAccountInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createCrmAccount(input: CreateCrmAccountInput!): CrmAccount!
    deleteCrmAccount(id: ID!): Boolean!
  }
`;

export const CrmAccountMutationResolvers = {
  Mutation: {
    createCrmAccount: async (_: any, args: { input: any }) => {
      return {
        id: "crm_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteCrmAccount: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
