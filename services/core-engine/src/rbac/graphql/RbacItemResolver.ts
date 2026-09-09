export const RbacItemGqlTypeDefs = `
  type RbacItem {
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
    getRbacItem(id: ID!): RbacItem
    listRbacItems(tenantId: String!, limit: Int): [RbacItem!]!
  }

  extend type Mutation {
    createRbacItem(tenantId: String!, code: String!, name: String!): RbacItem!
    deleteRbacItem(id: ID!): Boolean!
  }
`;

export const RbacItemGqlResolvers = {
  Query: {
    getRbacItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "RbacItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
