export const IdentityAssignmentGqlTypeDefs = `
  type IdentityAssignment {
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
    getIdentityAssignment(id: ID!): IdentityAssignment
    listIdentityAssignments(tenantId: String!, limit: Int): [IdentityAssignment!]!
  }

  extend type Mutation {
    createIdentityAssignment(tenantId: String!, code: String!, name: String!): IdentityAssignment!
    deleteIdentityAssignment(id: ID!): Boolean!
  }
`;

export const IdentityAssignmentGqlResolvers = {
  Query: {
    getIdentityAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IdentityAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
