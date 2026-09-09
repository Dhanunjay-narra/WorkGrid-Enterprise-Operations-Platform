export const SupportCsatAssignmentGqlTypeDefs = `
  type SupportCsatAssignment {
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
    getSupportCsatAssignment(id: ID!): SupportCsatAssignment
    listSupportCsatAssignments(tenantId: String!, limit: Int): [SupportCsatAssignment!]!
  }

  extend type Mutation {
    createSupportCsatAssignment(tenantId: String!, code: String!, name: String!): SupportCsatAssignment!
    deleteSupportCsatAssignment(id: ID!): Boolean!
  }
`;

export const SupportCsatAssignmentGqlResolvers = {
  Query: {
    getSupportCsatAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportCsatAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
