export const ProjectEpicsThresholdGqlTypeDefs = `
  type ProjectEpicsThreshold {
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
    getProjectEpicsThreshold(id: ID!): ProjectEpicsThreshold
    listProjectEpicsThresholds(tenantId: String!, limit: Int): [ProjectEpicsThreshold!]!
  }

  extend type Mutation {
    createProjectEpicsThreshold(tenantId: String!, code: String!, name: String!): ProjectEpicsThreshold!
    deleteProjectEpicsThreshold(id: ID!): Boolean!
  }
`;

export const ProjectEpicsThresholdGqlResolvers = {
  Query: {
    getProjectEpicsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectEpicsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
