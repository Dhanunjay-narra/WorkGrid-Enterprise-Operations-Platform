export const ObsDashboardsNodeGqlTypeDefs = `
  type ObsDashboardsNode {
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
    getObsDashboardsNode(id: ID!): ObsDashboardsNode
    listObsDashboardsNodes(tenantId: String!, limit: Int): [ObsDashboardsNode!]!
  }

  extend type Mutation {
    createObsDashboardsNode(tenantId: String!, code: String!, name: String!): ObsDashboardsNode!
    deleteObsDashboardsNode(id: ID!): Boolean!
  }
`;

export const ObsDashboardsNodeGqlResolvers = {
  Query: {
    getObsDashboardsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsDashboardsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
