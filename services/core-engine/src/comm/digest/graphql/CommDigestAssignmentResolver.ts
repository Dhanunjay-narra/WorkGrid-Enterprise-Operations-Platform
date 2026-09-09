export const CommDigestAssignmentGqlTypeDefs = `
  type CommDigestAssignment {
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
    getCommDigestAssignment(id: ID!): CommDigestAssignment
    listCommDigestAssignments(tenantId: String!, limit: Int): [CommDigestAssignment!]!
  }

  extend type Mutation {
    createCommDigestAssignment(tenantId: String!, code: String!, name: String!): CommDigestAssignment!
    deleteCommDigestAssignment(id: ID!): Boolean!
  }
`;

export const CommDigestAssignmentGqlResolvers = {
  Query: {
    getCommDigestAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommDigestAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
