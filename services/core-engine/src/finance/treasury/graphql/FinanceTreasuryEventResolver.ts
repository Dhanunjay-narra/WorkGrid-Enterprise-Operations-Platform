export const FinanceTreasuryEventGqlTypeDefs = `
  type FinanceTreasuryEvent {
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
    getFinanceTreasuryEvent(id: ID!): FinanceTreasuryEvent
    listFinanceTreasuryEvents(tenantId: String!, limit: Int): [FinanceTreasuryEvent!]!
  }

  extend type Mutation {
    createFinanceTreasuryEvent(tenantId: String!, code: String!, name: String!): FinanceTreasuryEvent!
    deleteFinanceTreasuryEvent(id: ID!): Boolean!
  }
`;

export const FinanceTreasuryEventGqlResolvers = {
  Query: {
    getFinanceTreasuryEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTreasuryEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
