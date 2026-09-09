export const IntSyncNodeGqlTypeDefs = `
  type IntSyncNode {
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
    getIntSyncNode(id: ID!): IntSyncNode
    listIntSyncNodes(tenantId: String!, limit: Int): [IntSyncNode!]!
  }

  extend type Mutation {
    createIntSyncNode(tenantId: String!, code: String!, name: String!): IntSyncNode!
    deleteIntSyncNode(id: ID!): Boolean!
  }
`;

export const IntSyncNodeGqlResolvers = {
  Query: {
    getIntSyncNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSyncNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
