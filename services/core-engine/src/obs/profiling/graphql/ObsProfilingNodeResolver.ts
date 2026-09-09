export const ObsProfilingNodeGqlTypeDefs = `
  type ObsProfilingNode {
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
    getObsProfilingNode(id: ID!): ObsProfilingNode
    listObsProfilingNodes(tenantId: String!, limit: Int): [ObsProfilingNode!]!
  }

  extend type Mutation {
    createObsProfilingNode(tenantId: String!, code: String!, name: String!): ObsProfilingNode!
    deleteObsProfilingNode(id: ID!): Boolean!
  }
`;

export const ObsProfilingNodeGqlResolvers = {
  Query: {
    getObsProfilingNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProfilingNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
