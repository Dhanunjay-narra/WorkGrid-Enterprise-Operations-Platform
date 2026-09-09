export const BiDashboardsNodeGqlTypeDefs = `
  type BiDashboardsNode {
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
    getBiDashboardsNode(id: ID!): BiDashboardsNode
    listBiDashboardsNodes(tenantId: String!, limit: Int): [BiDashboardsNode!]!
  }

  extend type Mutation {
    createBiDashboardsNode(tenantId: String!, code: String!, name: String!): BiDashboardsNode!
    deleteBiDashboardsNode(id: ID!): Boolean!
  }
`;

export const BiDashboardsNodeGqlResolvers = {
  Query: {
    getBiDashboardsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiDashboardsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
