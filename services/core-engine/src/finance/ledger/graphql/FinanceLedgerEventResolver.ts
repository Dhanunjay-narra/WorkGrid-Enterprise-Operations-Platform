export const FinanceLedgerEventGqlTypeDefs = `
  type FinanceLedgerEvent {
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
    getFinanceLedgerEvent(id: ID!): FinanceLedgerEvent
    listFinanceLedgerEvents(tenantId: String!, limit: Int): [FinanceLedgerEvent!]!
  }

  extend type Mutation {
    createFinanceLedgerEvent(tenantId: String!, code: String!, name: String!): FinanceLedgerEvent!
    deleteFinanceLedgerEvent(id: ID!): Boolean!
  }
`;

export const FinanceLedgerEventGqlResolvers = {
  Query: {
    getFinanceLedgerEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceLedgerEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
