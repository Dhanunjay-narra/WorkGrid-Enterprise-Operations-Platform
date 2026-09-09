export const ObsSpansNodeGqlTypeDefs = `
  type ObsSpansNode {
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
    getObsSpansNode(id: ID!): ObsSpansNode
    listObsSpansNodes(tenantId: String!, limit: Int): [ObsSpansNode!]!
  }

  extend type Mutation {
    createObsSpansNode(tenantId: String!, code: String!, name: String!): ObsSpansNode!
    deleteObsSpansNode(id: ID!): Boolean!
  }
`;

export const ObsSpansNodeGqlResolvers = {
  Query: {
    getObsSpansNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsSpansNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
