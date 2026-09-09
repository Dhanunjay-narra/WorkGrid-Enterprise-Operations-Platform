export const FinanceForecastSessionGqlTypeDefs = `
  type FinanceForecastSession {
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
    getFinanceForecastSession(id: ID!): FinanceForecastSession
    listFinanceForecastSessions(tenantId: String!, limit: Int): [FinanceForecastSession!]!
  }

  extend type Mutation {
    createFinanceForecastSession(tenantId: String!, code: String!, name: String!): FinanceForecastSession!
    deleteFinanceForecastSession(id: ID!): Boolean!
  }
`;

export const FinanceForecastSessionGqlResolvers = {
  Query: {
    getFinanceForecastSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceForecastSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
