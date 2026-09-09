export const FinFinancialForecastMutationTypeDefs = `
  input CreateFinFinancialForecastInput {
    tenantId: String!
    code: String!
    name: String!
  }
  extend type Mutation {
    createFinFinancialForecast(input: CreateFinFinancialForecastInput!): FinFinancialForecast!
    deleteFinFinancialForecast(id: ID!): Boolean!
  }
`;

export const FinFinancialForecastMutationResolvers = {
  Mutation: {
    createFinFinancialForecast: async (_: any, args: { input: any }) => {
      return {
        id: "fin_gql_" + Math.random().toString(36).substring(2, 9),
        tenantId: args.input.tenantId,
        code: args.input.code,
        name: args.input.name,
        status: "ACTIVE",
        createdAt: new Date().toISOString()
      };
    },
    deleteFinFinancialForecast: async (_: any, args: { id: string }) => {
      return true;
    }
  }
};
