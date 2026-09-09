export const FinanceTaxesItemGqlTypeDefs = `
  type FinanceTaxesItem {
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
    getFinanceTaxesItem(id: ID!): FinanceTaxesItem
    listFinanceTaxesItems(tenantId: String!, limit: Int): [FinanceTaxesItem!]!
  }

  extend type Mutation {
    createFinanceTaxesItem(tenantId: String!, code: String!, name: String!): FinanceTaxesItem!
    deleteFinanceTaxesItem(id: ID!): Boolean!
  }
`;

export const FinanceTaxesItemGqlResolvers = {
  Query: {
    getFinanceTaxesItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTaxesItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
