export const ObsProbesNodeGqlTypeDefs = `
  type ObsProbesNode {
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
    getObsProbesNode(id: ID!): ObsProbesNode
    listObsProbesNodes(tenantId: String!, limit: Int): [ObsProbesNode!]!
  }

  extend type Mutation {
    createObsProbesNode(tenantId: String!, code: String!, name: String!): ObsProbesNode!
    deleteObsProbesNode(id: ID!): Boolean!
  }
`;

export const ObsProbesNodeGqlResolvers = {
  Query: {
    getObsProbesNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProbesNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
