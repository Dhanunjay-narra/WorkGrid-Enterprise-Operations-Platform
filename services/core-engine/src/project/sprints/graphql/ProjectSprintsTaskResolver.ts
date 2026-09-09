export const ProjectSprintsTaskGqlTypeDefs = `
  type ProjectSprintsTask {
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
    getProjectSprintsTask(id: ID!): ProjectSprintsTask
    listProjectSprintsTasks(tenantId: String!, limit: Int): [ProjectSprintsTask!]!
  }

  extend type Mutation {
    createProjectSprintsTask(tenantId: String!, code: String!, name: String!): ProjectSprintsTask!
    deleteProjectSprintsTask(id: ID!): Boolean!
  }
`;

export const ProjectSprintsTaskGqlResolvers = {
  Query: {
    getProjectSprintsTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectSprintsTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
