export const DmsRetentionItemGqlTypeDefs = `
  type DmsRetentionItem {
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
    getDmsRetentionItem(id: ID!): DmsRetentionItem
    listDmsRetentionItems(tenantId: String!, limit: Int): [DmsRetentionItem!]!
  }

  extend type Mutation {
    createDmsRetentionItem(tenantId: String!, code: String!, name: String!): DmsRetentionItem!
    deleteDmsRetentionItem(id: ID!): Boolean!
  }
`;

export const DmsRetentionItemGqlResolvers = {
  Query: {
    getDmsRetentionItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsRetentionItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
