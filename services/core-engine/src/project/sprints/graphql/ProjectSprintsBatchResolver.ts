export const ProjectSprintsBatchGqlTypeDefs = `
  type ProjectSprintsBatch {
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
    getProjectSprintsBatch(id: ID!): ProjectSprintsBatch
    listProjectSprintsBatchs(tenantId: String!, limit: Int): [ProjectSprintsBatch!]!
  }

  extend type Mutation {
    createProjectSprintsBatch(tenantId: String!, code: String!, name: String!): ProjectSprintsBatch!
    deleteProjectSprintsBatch(id: ID!): Boolean!
  }
`;

export const ProjectSprintsBatchGqlResolvers = {
  Query: {
    getProjectSprintsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectSprintsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
