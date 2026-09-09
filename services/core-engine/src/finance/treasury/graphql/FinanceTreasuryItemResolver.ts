export const FinanceTreasuryItemGqlTypeDefs = `
  type FinanceTreasuryItem {
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
    getFinanceTreasuryItem(id: ID!): FinanceTreasuryItem
    listFinanceTreasuryItems(tenantId: String!, limit: Int): [FinanceTreasuryItem!]!
  }

  extend type Mutation {
    createFinanceTreasuryItem(tenantId: String!, code: String!, name: String!): FinanceTreasuryItem!
    deleteFinanceTreasuryItem(id: ID!): Boolean!
  }
`;

export const FinanceTreasuryItemGqlResolvers = {
  Query: {
    getFinanceTreasuryItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTreasuryItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
