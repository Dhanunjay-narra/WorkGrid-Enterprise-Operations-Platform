export const DmsChunksAssignmentGqlTypeDefs = `
  type DmsChunksAssignment {
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
    getDmsChunksAssignment(id: ID!): DmsChunksAssignment
    listDmsChunksAssignments(tenantId: String!, limit: Int): [DmsChunksAssignment!]!
  }

  extend type Mutation {
    createDmsChunksAssignment(tenantId: String!, code: String!, name: String!): DmsChunksAssignment!
    deleteDmsChunksAssignment(id: ID!): Boolean!
  }
`;

export const DmsChunksAssignmentGqlResolvers = {
  Query: {
    getDmsChunksAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsChunksAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
