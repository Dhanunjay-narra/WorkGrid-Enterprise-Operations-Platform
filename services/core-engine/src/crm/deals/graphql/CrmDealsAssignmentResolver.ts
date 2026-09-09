export const CrmDealsAssignmentGqlTypeDefs = `
  type CrmDealsAssignment {
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
    getCrmDealsAssignment(id: ID!): CrmDealsAssignment
    listCrmDealsAssignments(tenantId: String!, limit: Int): [CrmDealsAssignment!]!
  }

  extend type Mutation {
    createCrmDealsAssignment(tenantId: String!, code: String!, name: String!): CrmDealsAssignment!
    deleteCrmDealsAssignment(id: ID!): Boolean!
  }
`;

export const CrmDealsAssignmentGqlResolvers = {
  Query: {
    getCrmDealsAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmDealsAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
