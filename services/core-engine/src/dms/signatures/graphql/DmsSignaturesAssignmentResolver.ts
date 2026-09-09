export const DmsSignaturesAssignmentGqlTypeDefs = `
  type DmsSignaturesAssignment {
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
    getDmsSignaturesAssignment(id: ID!): DmsSignaturesAssignment
    listDmsSignaturesAssignments(tenantId: String!, limit: Int): [DmsSignaturesAssignment!]!
  }

  extend type Mutation {
    createDmsSignaturesAssignment(tenantId: String!, code: String!, name: String!): DmsSignaturesAssignment!
    deleteDmsSignaturesAssignment(id: ID!): Boolean!
  }
`;

export const DmsSignaturesAssignmentGqlResolvers = {
  Query: {
    getDmsSignaturesAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsSignaturesAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
