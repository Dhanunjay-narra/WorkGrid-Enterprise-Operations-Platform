export const IntStripeAssignmentGqlTypeDefs = `
  type IntStripeAssignment {
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
    getIntStripeAssignment(id: ID!): IntStripeAssignment
    listIntStripeAssignments(tenantId: String!, limit: Int): [IntStripeAssignment!]!
  }

  extend type Mutation {
    createIntStripeAssignment(tenantId: String!, code: String!, name: String!): IntStripeAssignment!
    deleteIntStripeAssignment(id: ID!): Boolean!
  }
`;

export const IntStripeAssignmentGqlResolvers = {
  Query: {
    getIntStripeAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntStripeAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
