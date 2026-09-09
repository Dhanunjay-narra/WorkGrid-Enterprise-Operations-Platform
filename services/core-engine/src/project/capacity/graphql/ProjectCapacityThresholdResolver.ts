export const ProjectCapacityThresholdGqlTypeDefs = `
  type ProjectCapacityThreshold {
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
    getProjectCapacityThreshold(id: ID!): ProjectCapacityThreshold
    listProjectCapacityThresholds(tenantId: String!, limit: Int): [ProjectCapacityThreshold!]!
  }

  extend type Mutation {
    createProjectCapacityThreshold(tenantId: String!, code: String!, name: String!): ProjectCapacityThreshold!
    deleteProjectCapacityThreshold(id: ID!): Boolean!
  }
`;

export const ProjectCapacityThresholdGqlResolvers = {
  Query: {
    getProjectCapacityThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectCapacityThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
