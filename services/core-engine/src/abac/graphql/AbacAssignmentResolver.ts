export const AbacAssignmentGqlTypeDefs = `
  type AbacAssignment {
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
    getAbacAssignment(id: ID!): AbacAssignment
    listAbacAssignments(tenantId: String!, limit: Int): [AbacAssignment!]!
  }

  extend type Mutation {
    createAbacAssignment(tenantId: String!, code: String!, name: String!): AbacAssignment!
    deleteAbacAssignment(id: ID!): Boolean!
  }
`;

export const AbacAssignmentGqlResolvers = {
  Query: {
    getAbacAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AbacAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
