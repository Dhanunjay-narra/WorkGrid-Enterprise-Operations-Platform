export const RbacEntryGqlTypeDefs = `
  type RbacEntry {
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
    getRbacEntry(id: ID!): RbacEntry
    listRbacEntrys(tenantId: String!, limit: Int): [RbacEntry!]!
  }

  extend type Mutation {
    createRbacEntry(tenantId: String!, code: String!, name: String!): RbacEntry!
    deleteRbacEntry(id: ID!): Boolean!
  }
`;

export const RbacEntryGqlResolvers = {
  Query: {
    getRbacEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "RbacEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
