export const BiKpisAssignmentGqlTypeDefs = `
  type BiKpisAssignment {
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
    getBiKpisAssignment(id: ID!): BiKpisAssignment
    listBiKpisAssignments(tenantId: String!, limit: Int): [BiKpisAssignment!]!
  }

  extend type Mutation {
    createBiKpisAssignment(tenantId: String!, code: String!, name: String!): BiKpisAssignment!
    deleteBiKpisAssignment(id: ID!): Boolean!
  }
`;

export const BiKpisAssignmentGqlResolvers = {
  Query: {
    getBiKpisAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiKpisAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
