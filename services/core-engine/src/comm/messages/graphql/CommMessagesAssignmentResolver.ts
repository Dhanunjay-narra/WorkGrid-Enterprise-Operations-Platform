export const CommMessagesAssignmentGqlTypeDefs = `
  type CommMessagesAssignment {
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
    getCommMessagesAssignment(id: ID!): CommMessagesAssignment
    listCommMessagesAssignments(tenantId: String!, limit: Int): [CommMessagesAssignment!]!
  }

  extend type Mutation {
    createCommMessagesAssignment(tenantId: String!, code: String!, name: String!): CommMessagesAssignment!
    deleteCommMessagesAssignment(id: ID!): Boolean!
  }
`;

export const CommMessagesAssignmentGqlResolvers = {
  Query: {
    getCommMessagesAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommMessagesAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
