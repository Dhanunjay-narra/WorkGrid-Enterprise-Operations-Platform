export const SupportSurveysAssignmentGqlTypeDefs = `
  type SupportSurveysAssignment {
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
    getSupportSurveysAssignment(id: ID!): SupportSurveysAssignment
    listSupportSurveysAssignments(tenantId: String!, limit: Int): [SupportSurveysAssignment!]!
  }

  extend type Mutation {
    createSupportSurveysAssignment(tenantId: String!, code: String!, name: String!): SupportSurveysAssignment!
    deleteSupportSurveysAssignment(id: ID!): Boolean!
  }
`;

export const SupportSurveysAssignmentGqlResolvers = {
  Query: {
    getSupportSurveysAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSurveysAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
