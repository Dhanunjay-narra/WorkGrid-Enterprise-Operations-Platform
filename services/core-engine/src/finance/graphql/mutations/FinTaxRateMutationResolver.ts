export const FinTaxRateMutationTypeDefs = `
  input CreateFinTaxRateInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createFinTaxRate(input: CreateFinTaxRateInput!): FinTaxRate!
    deleteFinTaxRate(id: ID!): Boolean!
  }
`;

export const FinTaxRateMutationResolvers = {
  Mutation: {
    createFinTaxRate: async (_: any, args: { input: any }) => {
      return {
        id: "fin_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteFinTaxRate: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
