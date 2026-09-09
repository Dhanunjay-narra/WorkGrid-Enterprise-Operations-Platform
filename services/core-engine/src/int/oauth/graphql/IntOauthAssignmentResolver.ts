export const IntOauthAssignmentGqlTypeDefs = `
  type IntOauthAssignment {
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
    getIntOauthAssignment(id: ID!): IntOauthAssignment
    listIntOauthAssignments(tenantId: String!, limit: Int): [IntOauthAssignment!]!
  }

  extend type Mutation {
    createIntOauthAssignment(tenantId: String!, code: String!, name: String!): IntOauthAssignment!
    deleteIntOauthAssignment(id: ID!): Boolean!
  }
`;

export const IntOauthAssignmentGqlResolvers = {
  Query: {
    getIntOauthAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntOauthAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
