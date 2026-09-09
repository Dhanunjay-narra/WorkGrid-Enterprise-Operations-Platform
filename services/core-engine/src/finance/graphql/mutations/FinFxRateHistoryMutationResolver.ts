export const FinFxRateHistoryMutationTypeDefs = `
  input CreateFinFxRateHistoryInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createFinFxRateHistory(input: CreateFinFxRateHistoryInput!): FinFxRateHistory!
    deleteFinFxRateHistory(id: ID!): Boolean!
  }
`;

export const FinFxRateHistoryMutationResolvers = {
  Mutation: {
    createFinFxRateHistory: async (_: any, args: { input: any }) => {
      return {
        id: "fin_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteFinFxRateHistory: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
