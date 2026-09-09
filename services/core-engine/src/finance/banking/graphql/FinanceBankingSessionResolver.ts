export const FinanceBankingSessionGqlTypeDefs = `
  type FinanceBankingSession {
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
    getFinanceBankingSession(id: ID!): FinanceBankingSession
    listFinanceBankingSessions(tenantId: String!, limit: Int): [FinanceBankingSession!]!
  }

  extend type Mutation {
    createFinanceBankingSession(tenantId: String!, code: String!, name: String!): FinanceBankingSession!
    deleteFinanceBankingSession(id: ID!): Boolean!
  }
`;

export const FinanceBankingSessionGqlResolvers = {
  Query: {
    getFinanceBankingSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceBankingSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
