export const CrmContactMutationTypeDefs = `
  input CreateCrmContactInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createCrmContact(input: CreateCrmContactInput!): CrmContact!
    deleteCrmContact(id: ID!): Boolean!
  }
`;

export const CrmContactMutationResolvers = {
  Mutation: {
    createCrmContact: async (_: any, args: { input: any }) => {
      return {
        id: "crm_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteCrmContact: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
