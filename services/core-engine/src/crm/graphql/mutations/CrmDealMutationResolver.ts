export const CrmDealMutationTypeDefs = `
  input CreateCrmDealInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createCrmDeal(input: CreateCrmDealInput!): CrmDeal!
    deleteCrmDeal(id: ID!): Boolean!
  }
`;

export const CrmDealMutationResolvers = {
  Mutation: {
    createCrmDeal: async (_: any, args: { input: any }) => {
      return {
        id: "crm_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteCrmDeal: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
