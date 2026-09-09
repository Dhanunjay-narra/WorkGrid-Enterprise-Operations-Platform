export const CommPresenceAssignmentGqlTypeDefs = `
  type CommPresenceAssignment {
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
    getCommPresenceAssignment(id: ID!): CommPresenceAssignment
    listCommPresenceAssignments(tenantId: String!, limit: Int): [CommPresenceAssignment!]!
  }

  extend type Mutation {
    createCommPresenceAssignment(tenantId: String!, code: String!, name: String!): CommPresenceAssignment!
    deleteCommPresenceAssignment(id: ID!): Boolean!
  }
`;

export const CommPresenceAssignmentGqlResolvers = {
  Query: {
    getCommPresenceAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommPresenceAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
