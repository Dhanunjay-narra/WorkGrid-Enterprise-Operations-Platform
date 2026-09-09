export const DmsVersionsAssignmentGqlTypeDefs = `
  type DmsVersionsAssignment {
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
    getDmsVersionsAssignment(id: ID!): DmsVersionsAssignment
    listDmsVersionsAssignments(tenantId: String!, limit: Int): [DmsVersionsAssignment!]!
  }

  extend type Mutation {
    createDmsVersionsAssignment(tenantId: String!, code: String!, name: String!): DmsVersionsAssignment!
    deleteDmsVersionsAssignment(id: ID!): Boolean!
  }
`;

export const DmsVersionsAssignmentGqlResolvers = {
  Query: {
    getDmsVersionsAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsVersionsAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
