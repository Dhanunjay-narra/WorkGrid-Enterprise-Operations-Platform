export const DmsRetentionNodeGqlTypeDefs = `
  type DmsRetentionNode {
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
    getDmsRetentionNode(id: ID!): DmsRetentionNode
    listDmsRetentionNodes(tenantId: String!, limit: Int): [DmsRetentionNode!]!
  }

  extend type Mutation {
    createDmsRetentionNode(tenantId: String!, code: String!, name: String!): DmsRetentionNode!
    deleteDmsRetentionNode(id: ID!): Boolean!
  }
`;

export const DmsRetentionNodeGqlResolvers = {
  Query: {
    getDmsRetentionNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsRetentionNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
