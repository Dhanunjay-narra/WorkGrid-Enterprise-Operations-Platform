export const ObsLoggingNodeGqlTypeDefs = `
  type ObsLoggingNode {
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
    getObsLoggingNode(id: ID!): ObsLoggingNode
    listObsLoggingNodes(tenantId: String!, limit: Int): [ObsLoggingNode!]!
  }

  extend type Mutation {
    createObsLoggingNode(tenantId: String!, code: String!, name: String!): ObsLoggingNode!
    deleteObsLoggingNode(id: ID!): Boolean!
  }
`;

export const ObsLoggingNodeGqlResolvers = {
  Query: {
    getObsLoggingNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsLoggingNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
