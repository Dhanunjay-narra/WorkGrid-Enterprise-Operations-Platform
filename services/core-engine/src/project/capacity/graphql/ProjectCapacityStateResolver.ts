export const ProjectCapacityStateGqlTypeDefs = `
  type ProjectCapacityState {
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
    getProjectCapacityState(id: ID!): ProjectCapacityState
    listProjectCapacityStates(tenantId: String!, limit: Int): [ProjectCapacityState!]!
  }

  extend type Mutation {
    createProjectCapacityState(tenantId: String!, code: String!, name: String!): ProjectCapacityState!
    deleteProjectCapacityState(id: ID!): Boolean!
  }
`;

export const ProjectCapacityStateGqlResolvers = {
  Query: {
    getProjectCapacityState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectCapacityState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
