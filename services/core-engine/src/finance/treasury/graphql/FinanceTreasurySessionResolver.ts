export const FinanceTreasurySessionGqlTypeDefs = `
  type FinanceTreasurySession {
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
    getFinanceTreasurySession(id: ID!): FinanceTreasurySession
    listFinanceTreasurySessions(tenantId: String!, limit: Int): [FinanceTreasurySession!]!
  }

  extend type Mutation {
    createFinanceTreasurySession(tenantId: String!, code: String!, name: String!): FinanceTreasurySession!
    deleteFinanceTreasurySession(id: ID!): Boolean!
  }
`;

export const FinanceTreasurySessionGqlResolvers = {
  Query: {
    getFinanceTreasurySession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTreasurySession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
