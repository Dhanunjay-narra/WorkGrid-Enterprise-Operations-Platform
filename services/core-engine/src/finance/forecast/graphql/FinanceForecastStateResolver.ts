export const FinanceForecastStateGqlTypeDefs = `
  type FinanceForecastState {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    version: Int!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    getFinanceForecastState(id: ID!): FinanceForecastState
    listFinanceForecastStates(tenantId: String!, limit: Int): [FinanceForecastState!]!
  }

  extend type Mutation {
    createFinanceForecastState(tenantId: String!, code: String!, name: String!): FinanceForecastState!
    deleteFinanceForecastState(id: ID!): Boolean!
  }
`;

export const FinanceForecastStateGqlResolvers = {
  Query: {
    getFinanceForecastState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceForecastState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
