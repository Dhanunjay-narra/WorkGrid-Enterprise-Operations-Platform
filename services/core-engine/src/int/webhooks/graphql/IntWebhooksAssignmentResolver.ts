export const IntWebhooksAssignmentGqlTypeDefs = `
  type IntWebhooksAssignment {
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
    getIntWebhooksAssignment(id: ID!): IntWebhooksAssignment
    listIntWebhooksAssignments(tenantId: String!, limit: Int): [IntWebhooksAssignment!]!
  }

  extend type Mutation {
    createIntWebhooksAssignment(tenantId: String!, code: String!, name: String!): IntWebhooksAssignment!
    deleteIntWebhooksAssignment(id: ID!): Boolean!
  }
`;

export const IntWebhooksAssignmentGqlResolvers = {
  Query: {
    getIntWebhooksAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntWebhooksAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
