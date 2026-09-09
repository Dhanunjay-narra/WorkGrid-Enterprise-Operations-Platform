export const FinanceForecastEventGqlTypeDefs = `
  type FinanceForecastEvent {
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
    getFinanceForecastEvent(id: ID!): FinanceForecastEvent
    listFinanceForecastEvents(tenantId: String!, limit: Int): [FinanceForecastEvent!]!
  }

  extend type Mutation {
    createFinanceForecastEvent(tenantId: String!, code: String!, name: String!): FinanceForecastEvent!
    deleteFinanceForecastEvent(id: ID!): Boolean!
  }
`;

export const FinanceForecastEventGqlResolvers = {
  Query: {
    getFinanceForecastEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceForecastEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
