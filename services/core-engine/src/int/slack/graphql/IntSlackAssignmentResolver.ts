export const IntSlackAssignmentGqlTypeDefs = `
  type IntSlackAssignment {
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
    getIntSlackAssignment(id: ID!): IntSlackAssignment
    listIntSlackAssignments(tenantId: String!, limit: Int): [IntSlackAssignment!]!
  }

  extend type Mutation {
    createIntSlackAssignment(tenantId: String!, code: String!, name: String!): IntSlackAssignment!
    deleteIntSlackAssignment(id: ID!): Boolean!
  }
`;

export const IntSlackAssignmentGqlResolvers = {
  Query: {
    getIntSlackAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSlackAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
