export const FinCostCenterMutationTypeDefs = `
  input CreateFinCostCenterInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createFinCostCenter(input: CreateFinCostCenterInput!): FinCostCenter!
    deleteFinCostCenter(id: ID!): Boolean!
  }
`;

export const FinCostCenterMutationResolvers = {
  Mutation: {
    createFinCostCenter: async (_: any, args: { input: any }) => {
      return {
        id: "fin_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteFinCostCenter: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
