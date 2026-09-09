export const ObsDashboardsAssignmentGqlTypeDefs = `
  type ObsDashboardsAssignment {
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
    getObsDashboardsAssignment(id: ID!): ObsDashboardsAssignment
    listObsDashboardsAssignments(tenantId: String!, limit: Int): [ObsDashboardsAssignment!]!
  }

  extend type Mutation {
    createObsDashboardsAssignment(tenantId: String!, code: String!, name: String!): ObsDashboardsAssignment!
    deleteObsDashboardsAssignment(id: ID!): Boolean!
  }
`;

export const ObsDashboardsAssignmentGqlResolvers = {
  Query: {
    getObsDashboardsAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsDashboardsAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
