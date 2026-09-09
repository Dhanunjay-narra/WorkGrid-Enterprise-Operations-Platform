export const ObsAlertsAssignmentGqlTypeDefs = `
  type ObsAlertsAssignment {
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
    getObsAlertsAssignment(id: ID!): ObsAlertsAssignment
    listObsAlertsAssignments(tenantId: String!, limit: Int): [ObsAlertsAssignment!]!
  }

  extend type Mutation {
    createObsAlertsAssignment(tenantId: String!, code: String!, name: String!): ObsAlertsAssignment!
    deleteObsAlertsAssignment(id: ID!): Boolean!
  }
`;

export const ObsAlertsAssignmentGqlResolvers = {
  Query: {
    getObsAlertsAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsAlertsAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
