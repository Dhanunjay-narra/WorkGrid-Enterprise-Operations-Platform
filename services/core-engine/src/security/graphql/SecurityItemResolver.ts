export const SecurityItemGqlTypeDefs = `
  type SecurityItem {
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
    getSecurityItem(id: ID!): SecurityItem
    listSecurityItems(tenantId: String!, limit: Int): [SecurityItem!]!
  }

  extend type Mutation {
    createSecurityItem(tenantId: String!, code: String!, name: String!): SecurityItem!
    deleteSecurityItem(id: ID!): Boolean!
  }
`;

export const SecurityItemGqlResolvers = {
  Query: {
    getSecurityItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SecurityItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
