export const ProjectEpicsNodeGqlTypeDefs = `
  type ProjectEpicsNode {
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
    getProjectEpicsNode(id: ID!): ProjectEpicsNode
    listProjectEpicsNodes(tenantId: String!, limit: Int): [ProjectEpicsNode!]!
  }

  extend type Mutation {
    createProjectEpicsNode(tenantId: String!, code: String!, name: String!): ProjectEpicsNode!
    deleteProjectEpicsNode(id: ID!): Boolean!
  }
`;

export const ProjectEpicsNodeGqlResolvers = {
  Query: {
    getProjectEpicsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectEpicsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
