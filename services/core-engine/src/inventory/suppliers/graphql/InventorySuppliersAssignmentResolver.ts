export const InventorySuppliersAssignmentGqlTypeDefs = `
  type InventorySuppliersAssignment {
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
    getInventorySuppliersAssignment(id: ID!): InventorySuppliersAssignment
    listInventorySuppliersAssignments(tenantId: String!, limit: Int): [InventorySuppliersAssignment!]!
  }

  extend type Mutation {
    createInventorySuppliersAssignment(tenantId: String!, code: String!, name: String!): InventorySuppliersAssignment!
    deleteInventorySuppliersAssignment(id: ID!): Boolean!
  }
`;

export const InventorySuppliersAssignmentGqlResolvers = {
  Query: {
    getInventorySuppliersAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "InventorySuppliersAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
