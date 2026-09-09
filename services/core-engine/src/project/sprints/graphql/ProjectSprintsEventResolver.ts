export const ProjectSprintsEventGqlTypeDefs = `
  type ProjectSprintsEvent {
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
    getProjectSprintsEvent(id: ID!): ProjectSprintsEvent
    listProjectSprintsEvents(tenantId: String!, limit: Int): [ProjectSprintsEvent!]!
  }

  extend type Mutation {
    createProjectSprintsEvent(tenantId: String!, code: String!, name: String!): ProjectSprintsEvent!
    deleteProjectSprintsEvent(id: ID!): Boolean!
  }
`;

export const ProjectSprintsEventGqlResolvers = {
  Query: {
    getProjectSprintsEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectSprintsEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
