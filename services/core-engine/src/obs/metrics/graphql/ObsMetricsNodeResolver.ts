export const ObsMetricsNodeGqlTypeDefs = `
  type ObsMetricsNode {
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
    getObsMetricsNode(id: ID!): ObsMetricsNode
    listObsMetricsNodes(tenantId: String!, limit: Int): [ObsMetricsNode!]!
  }

  extend type Mutation {
    createObsMetricsNode(tenantId: String!, code: String!, name: String!): ObsMetricsNode!
    deleteObsMetricsNode(id: ID!): Boolean!
  }
`;

export const ObsMetricsNodeGqlResolvers = {
  Query: {
    getObsMetricsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsMetricsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
