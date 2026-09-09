export const ObsTracingNodeGqlTypeDefs = `
  type ObsTracingNode {
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
    getObsTracingNode(id: ID!): ObsTracingNode
    listObsTracingNodes(tenantId: String!, limit: Int): [ObsTracingNode!]!
  }

  extend type Mutation {
    createObsTracingNode(tenantId: String!, code: String!, name: String!): ObsTracingNode!
    deleteObsTracingNode(id: ID!): Boolean!
  }
`;

export const ObsTracingNodeGqlResolvers = {
  Query: {
    getObsTracingNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsTracingNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
