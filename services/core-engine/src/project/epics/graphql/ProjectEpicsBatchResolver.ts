export const ProjectEpicsBatchGqlTypeDefs = `
  type ProjectEpicsBatch {
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
    getProjectEpicsBatch(id: ID!): ProjectEpicsBatch
    listProjectEpicsBatchs(tenantId: String!, limit: Int): [ProjectEpicsBatch!]!
  }

  extend type Mutation {
    createProjectEpicsBatch(tenantId: String!, code: String!, name: String!): ProjectEpicsBatch!
    deleteProjectEpicsBatch(id: ID!): Boolean!
  }
`;

export const ProjectEpicsBatchGqlResolvers = {
  Query: {
    getProjectEpicsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectEpicsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
