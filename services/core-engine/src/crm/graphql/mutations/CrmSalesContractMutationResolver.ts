export const CrmSalesContractMutationTypeDefs = `
  input CreateCrmSalesContractInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createCrmSalesContract(input: CreateCrmSalesContractInput!): CrmSalesContract!
    deleteCrmSalesContract(id: ID!): Boolean!
  }
`;

export const CrmSalesContractMutationResolvers = {
  Mutation: {
    createCrmSalesContract: async (_: any, args: { input: any }) => {
      return {
        id: "crm_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteCrmSalesContract: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
