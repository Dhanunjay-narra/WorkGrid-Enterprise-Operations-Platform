export const ProjectRisksNodeGqlTypeDefs = `
  type ProjectRisksNode {
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
    getProjectRisksNode(id: ID!): ProjectRisksNode
    listProjectRisksNodes(tenantId: String!, limit: Int): [ProjectRisksNode!]!
  }

  extend type Mutation {
    createProjectRisksNode(tenantId: String!, code: String!, name: String!): ProjectRisksNode!
    deleteProjectRisksNode(id: ID!): Boolean!
  }
`;

export const ProjectRisksNodeGqlResolvers = {
  Query: {
    getProjectRisksNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectRisksNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
