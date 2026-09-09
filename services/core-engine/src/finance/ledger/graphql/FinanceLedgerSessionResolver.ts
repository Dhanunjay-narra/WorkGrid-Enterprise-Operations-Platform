export const FinanceLedgerSessionGqlTypeDefs = `
  type FinanceLedgerSession {
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
    getFinanceLedgerSession(id: ID!): FinanceLedgerSession
    listFinanceLedgerSessions(tenantId: String!, limit: Int): [FinanceLedgerSession!]!
  }

  extend type Mutation {
    createFinanceLedgerSession(tenantId: String!, code: String!, name: String!): FinanceLedgerSession!
    deleteFinanceLedgerSession(id: ID!): Boolean!
  }
`;

export const FinanceLedgerSessionGqlResolvers = {
  Query: {
    getFinanceLedgerSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceLedgerSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
