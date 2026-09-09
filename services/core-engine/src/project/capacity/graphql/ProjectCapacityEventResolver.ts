export const ProjectCapacityEventGqlTypeDefs = `
  type ProjectCapacityEvent {
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
    getProjectCapacityEvent(id: ID!): ProjectCapacityEvent
    listProjectCapacityEvents(tenantId: String!, limit: Int): [ProjectCapacityEvent!]!
  }

  extend type Mutation {
    createProjectCapacityEvent(tenantId: String!, code: String!, name: String!): ProjectCapacityEvent!
    deleteProjectCapacityEvent(id: ID!): Boolean!
  }
`;

export const ProjectCapacityEventGqlResolvers = {
  Query: {
    getProjectCapacityEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectCapacityEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
