export const CommWebhooksAssignmentGqlTypeDefs = `
  type CommWebhooksAssignment {
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
    getCommWebhooksAssignment(id: ID!): CommWebhooksAssignment
    listCommWebhooksAssignments(tenantId: String!, limit: Int): [CommWebhooksAssignment!]!
  }

  extend type Mutation {
    createCommWebhooksAssignment(tenantId: String!, code: String!, name: String!): CommWebhooksAssignment!
    deleteCommWebhooksAssignment(id: ID!): Boolean!
  }
`;

export const CommWebhooksAssignmentGqlResolvers = {
  Query: {
    getCommWebhooksAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommWebhooksAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
