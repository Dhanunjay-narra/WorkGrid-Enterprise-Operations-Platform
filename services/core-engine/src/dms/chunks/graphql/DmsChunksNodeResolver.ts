export const DmsChunksNodeGqlTypeDefs = `
  type DmsChunksNode {
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
    getDmsChunksNode(id: ID!): DmsChunksNode
    listDmsChunksNodes(tenantId: String!, limit: Int): [DmsChunksNode!]!
  }

  extend type Mutation {
    createDmsChunksNode(tenantId: String!, code: String!, name: String!): DmsChunksNode!
    deleteDmsChunksNode(id: ID!): Boolean!
  }
`;

export const DmsChunksNodeGqlResolvers = {
  Query: {
    getDmsChunksNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsChunksNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
