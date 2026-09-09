export const DmsFoldersAssignmentGqlTypeDefs = `
  type DmsFoldersAssignment {
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
    getDmsFoldersAssignment(id: ID!): DmsFoldersAssignment
    listDmsFoldersAssignments(tenantId: String!, limit: Int): [DmsFoldersAssignment!]!
  }

  extend type Mutation {
    createDmsFoldersAssignment(tenantId: String!, code: String!, name: String!): DmsFoldersAssignment!
    deleteDmsFoldersAssignment(id: ID!): Boolean!
  }
`;

export const DmsFoldersAssignmentGqlResolvers = {
  Query: {
    getDmsFoldersAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFoldersAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
