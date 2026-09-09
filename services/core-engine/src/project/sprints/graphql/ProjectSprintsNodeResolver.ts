export const ProjectSprintsNodeGqlTypeDefs = `
  type ProjectSprintsNode {
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
    getProjectSprintsNode(id: ID!): ProjectSprintsNode
    listProjectSprintsNodes(tenantId: String!, limit: Int): [ProjectSprintsNode!]!
  }

  extend type Mutation {
    createProjectSprintsNode(tenantId: String!, code: String!, name: String!): ProjectSprintsNode!
    deleteProjectSprintsNode(id: ID!): Boolean!
  }
`;

export const ProjectSprintsNodeGqlResolvers = {
  Query: {
    getProjectSprintsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectSprintsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
