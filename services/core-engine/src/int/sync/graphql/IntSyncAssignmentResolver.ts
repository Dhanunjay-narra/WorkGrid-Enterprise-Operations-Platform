export const IntSyncAssignmentGqlTypeDefs = `
  type IntSyncAssignment {
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
    getIntSyncAssignment(id: ID!): IntSyncAssignment
    listIntSyncAssignments(tenantId: String!, limit: Int): [IntSyncAssignment!]!
  }

  extend type Mutation {
    createIntSyncAssignment(tenantId: String!, code: String!, name: String!): IntSyncAssignment!
    deleteIntSyncAssignment(id: ID!): Boolean!
  }
`;

export const IntSyncAssignmentGqlResolvers = {
  Query: {
    getIntSyncAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSyncAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
