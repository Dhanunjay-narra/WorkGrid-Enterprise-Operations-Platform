export const TenancyAssignmentGqlTypeDefs = `
  type TenancyAssignment {
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
    getTenancyAssignment(id: ID!): TenancyAssignment
    listTenancyAssignments(tenantId: String!, limit: Int): [TenancyAssignment!]!
  }

  extend type Mutation {
    createTenancyAssignment(tenantId: String!, code: String!, name: String!): TenancyAssignment!
    deleteTenancyAssignment(id: ID!): Boolean!
  }
`;

export const TenancyAssignmentGqlResolvers = {
  Query: {
    getTenancyAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "TenancyAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
