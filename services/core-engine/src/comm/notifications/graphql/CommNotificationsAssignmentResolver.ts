export const CommNotificationsAssignmentGqlTypeDefs = `
  type CommNotificationsAssignment {
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
    getCommNotificationsAssignment(id: ID!): CommNotificationsAssignment
    listCommNotificationsAssignments(tenantId: String!, limit: Int): [CommNotificationsAssignment!]!
  }

  extend type Mutation {
    createCommNotificationsAssignment(tenantId: String!, code: String!, name: String!): CommNotificationsAssignment!
    deleteCommNotificationsAssignment(id: ID!): Boolean!
  }
`;

export const CommNotificationsAssignmentGqlResolvers = {
  Query: {
    getCommNotificationsAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommNotificationsAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
