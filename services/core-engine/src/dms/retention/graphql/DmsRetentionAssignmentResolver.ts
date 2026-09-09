export const DmsRetentionAssignmentGqlTypeDefs = `
  type DmsRetentionAssignment {
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
    getDmsRetentionAssignment(id: ID!): DmsRetentionAssignment
    listDmsRetentionAssignments(tenantId: String!, limit: Int): [DmsRetentionAssignment!]!
  }

  extend type Mutation {
    createDmsRetentionAssignment(tenantId: String!, code: String!, name: String!): DmsRetentionAssignment!
    deleteDmsRetentionAssignment(id: ID!): Boolean!
  }
`;

export const DmsRetentionAssignmentGqlResolvers = {
  Query: {
    getDmsRetentionAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsRetentionAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
