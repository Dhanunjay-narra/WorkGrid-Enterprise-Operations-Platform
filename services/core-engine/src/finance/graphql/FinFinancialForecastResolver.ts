export const FinFinancialForecastTypeDefs = `
  type FinFinancialForecast {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getFinFinancialForecast(id: ID!): FinFinancialForecast
    listFinFinancialForecasts(tenantId: String!): [FinFinancialForecast!]!
  }
`;

export const FinFinancialForecastResolvers = {
  Query: {
    getFinFinancialForecast: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "FinFinancialForecast", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listFinFinancialForecasts: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "FinFinancialForecast", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};
