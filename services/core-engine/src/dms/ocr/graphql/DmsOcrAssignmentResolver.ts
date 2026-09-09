export const DmsOcrAssignmentGqlTypeDefs = `
  type DmsOcrAssignment {
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
    getDmsOcrAssignment(id: ID!): DmsOcrAssignment
    listDmsOcrAssignments(tenantId: String!, limit: Int): [DmsOcrAssignment!]!
  }

  extend type Mutation {
    createDmsOcrAssignment(tenantId: String!, code: String!, name: String!): DmsOcrAssignment!
    deleteDmsOcrAssignment(id: ID!): Boolean!
  }
`;

export const DmsOcrAssignmentGqlResolvers = {
  Query: {
    getDmsOcrAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsOcrAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
