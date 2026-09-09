export const ProjectSprintsThresholdGqlTypeDefs = `
  type ProjectSprintsThreshold {
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
    getProjectSprintsThreshold(id: ID!): ProjectSprintsThreshold
    listProjectSprintsThresholds(tenantId: String!, limit: Int): [ProjectSprintsThreshold!]!
  }

  extend type Mutation {
    createProjectSprintsThreshold(tenantId: String!, code: String!, name: String!): ProjectSprintsThreshold!
    deleteProjectSprintsThreshold(id: ID!): Boolean!
  }
`;

export const ProjectSprintsThresholdGqlResolvers = {
  Query: {
    getProjectSprintsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectSprintsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
