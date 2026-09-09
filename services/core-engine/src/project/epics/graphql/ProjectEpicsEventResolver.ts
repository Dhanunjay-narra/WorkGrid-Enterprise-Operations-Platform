export const ProjectEpicsEventGqlTypeDefs = `
  type ProjectEpicsEvent {
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
    getProjectEpicsEvent(id: ID!): ProjectEpicsEvent
    listProjectEpicsEvents(tenantId: String!, limit: Int): [ProjectEpicsEvent!]!
  }

  extend type Mutation {
    createProjectEpicsEvent(tenantId: String!, code: String!, name: String!): ProjectEpicsEvent!
    deleteProjectEpicsEvent(id: ID!): Boolean!
  }
`;

export const ProjectEpicsEventGqlResolvers = {
  Query: {
    getProjectEpicsEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectEpicsEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
