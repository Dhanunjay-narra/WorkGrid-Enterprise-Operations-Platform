export const ProjectRisksEventGqlTypeDefs = `
  type ProjectRisksEvent {
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
    getProjectRisksEvent(id: ID!): ProjectRisksEvent
    listProjectRisksEvents(tenantId: String!, limit: Int): [ProjectRisksEvent!]!
  }

  extend type Mutation {
    createProjectRisksEvent(tenantId: String!, code: String!, name: String!): ProjectRisksEvent!
    deleteProjectRisksEvent(id: ID!): Boolean!
  }
`;

export const ProjectRisksEventGqlResolvers = {
  Query: {
    getProjectRisksEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectRisksEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
