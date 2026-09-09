export const RbacAssignmentGqlTypeDefs = `
  type RbacAssignment {
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
    getRbacAssignment(id: ID!): RbacAssignment
    listRbacAssignments(tenantId: String!, limit: Int): [RbacAssignment!]!
  }

  extend type Mutation {
    createRbacAssignment(tenantId: String!, code: String!, name: String!): RbacAssignment!
    deleteRbacAssignment(id: ID!): Boolean!
  }
`;

export const RbacAssignmentGqlResolvers = {
  Query: {
    getRbacAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "RbacAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
