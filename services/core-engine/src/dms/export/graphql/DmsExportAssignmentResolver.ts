export const DmsExportAssignmentGqlTypeDefs = `
  type DmsExportAssignment {
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
    getDmsExportAssignment(id: ID!): DmsExportAssignment
    listDmsExportAssignments(tenantId: String!, limit: Int): [DmsExportAssignment!]!
  }

  extend type Mutation {
    createDmsExportAssignment(tenantId: String!, code: String!, name: String!): DmsExportAssignment!
    deleteDmsExportAssignment(id: ID!): Boolean!
  }
`;

export const DmsExportAssignmentGqlResolvers = {
  Query: {
    getDmsExportAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsExportAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
