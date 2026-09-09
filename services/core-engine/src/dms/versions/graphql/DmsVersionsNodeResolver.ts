export const DmsVersionsNodeGqlTypeDefs = `
  type DmsVersionsNode {
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
    getDmsVersionsNode(id: ID!): DmsVersionsNode
    listDmsVersionsNodes(tenantId: String!, limit: Int): [DmsVersionsNode!]!
  }

  extend type Mutation {
    createDmsVersionsNode(tenantId: String!, code: String!, name: String!): DmsVersionsNode!
    deleteDmsVersionsNode(id: ID!): Boolean!
  }
`;

export const DmsVersionsNodeGqlResolvers = {
  Query: {
    getDmsVersionsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsVersionsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
