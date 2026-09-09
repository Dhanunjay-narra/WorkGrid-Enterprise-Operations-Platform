export const DmsFilesAssignmentGqlTypeDefs = `
  type DmsFilesAssignment {
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
    getDmsFilesAssignment(id: ID!): DmsFilesAssignment
    listDmsFilesAssignments(tenantId: String!, limit: Int): [DmsFilesAssignment!]!
  }

  extend type Mutation {
    createDmsFilesAssignment(tenantId: String!, code: String!, name: String!): DmsFilesAssignment!
    deleteDmsFilesAssignment(id: ID!): Boolean!
  }
`;

export const DmsFilesAssignmentGqlResolvers = {
  Query: {
    getDmsFilesAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFilesAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
