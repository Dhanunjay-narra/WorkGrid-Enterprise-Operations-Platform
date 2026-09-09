export const ProjectEpicsStateGqlTypeDefs = `
  type ProjectEpicsState {
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
    getProjectEpicsState(id: ID!): ProjectEpicsState
    listProjectEpicsStates(tenantId: String!, limit: Int): [ProjectEpicsState!]!
  }

  extend type Mutation {
    createProjectEpicsState(tenantId: String!, code: String!, name: String!): ProjectEpicsState!
    deleteProjectEpicsState(id: ID!): Boolean!
  }
`;

export const ProjectEpicsStateGqlResolvers = {
  Query: {
    getProjectEpicsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectEpicsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
