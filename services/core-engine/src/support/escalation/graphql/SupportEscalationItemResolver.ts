export const SupportEscalationItemGqlTypeDefs = `
  type SupportEscalationItem {
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
    getSupportEscalationItem(id: ID!): SupportEscalationItem
    listSupportEscalationItems(tenantId: String!, limit: Int): [SupportEscalationItem!]!
  }

  extend type Mutation {
    createSupportEscalationItem(tenantId: String!, code: String!, name: String!): SupportEscalationItem!
    deleteSupportEscalationItem(id: ID!): Boolean!
  }
`;

export const SupportEscalationItemGqlResolvers = {
  Query: {
    getSupportEscalationItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportEscalationItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
