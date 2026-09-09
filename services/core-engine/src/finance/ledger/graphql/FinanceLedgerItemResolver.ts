export const FinanceLedgerItemGqlTypeDefs = `
  type FinanceLedgerItem {
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
    getFinanceLedgerItem(id: ID!): FinanceLedgerItem
    listFinanceLedgerItems(tenantId: String!, limit: Int): [FinanceLedgerItem!]!
  }

  extend type Mutation {
    createFinanceLedgerItem(tenantId: String!, code: String!, name: String!): FinanceLedgerItem!
    deleteFinanceLedgerItem(id: ID!): Boolean!
  }
`;

export const FinanceLedgerItemGqlResolvers = {
  Query: {
    getFinanceLedgerItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceLedgerItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
