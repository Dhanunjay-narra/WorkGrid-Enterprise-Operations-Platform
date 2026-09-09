export const SupportTicketsItemGqlTypeDefs = `
  type SupportTicketsItem {
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
    getSupportTicketsItem(id: ID!): SupportTicketsItem
    listSupportTicketsItems(tenantId: String!, limit: Int): [SupportTicketsItem!]!
  }

  extend type Mutation {
    createSupportTicketsItem(tenantId: String!, code: String!, name: String!): SupportTicketsItem!
    deleteSupportTicketsItem(id: ID!): Boolean!
  }
`;

export const SupportTicketsItemGqlResolvers = {
  Query: {
    getSupportTicketsItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportTicketsItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
