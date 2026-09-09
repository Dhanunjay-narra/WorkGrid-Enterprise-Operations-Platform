export const ProjectSprintsStateGqlTypeDefs = `
  type ProjectSprintsState {
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
    getProjectSprintsState(id: ID!): ProjectSprintsState
    listProjectSprintsStates(tenantId: String!, limit: Int): [ProjectSprintsState!]!
  }

  extend type Mutation {
    createProjectSprintsState(tenantId: String!, code: String!, name: String!): ProjectSprintsState!
    deleteProjectSprintsState(id: ID!): Boolean!
  }
`;

export const ProjectSprintsStateGqlResolvers = {
  Query: {
    getProjectSprintsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectSprintsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
