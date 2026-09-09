export const AuthAssignmentGqlTypeDefs = `
  type AuthAssignment {
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
    getAuthAssignment(id: ID!): AuthAssignment
    listAuthAssignments(tenantId: String!, limit: Int): [AuthAssignment!]!
  }

  extend type Mutation {
    createAuthAssignment(tenantId: String!, code: String!, name: String!): AuthAssignment!
    deleteAuthAssignment(id: ID!): Boolean!
  }
`;

export const AuthAssignmentGqlResolvers = {
  Query: {
    getAuthAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuthAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
