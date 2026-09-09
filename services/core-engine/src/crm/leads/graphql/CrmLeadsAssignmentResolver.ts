export const CrmLeadsAssignmentGqlTypeDefs = `
  type CrmLeadsAssignment {
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
    getCrmLeadsAssignment(id: ID!): CrmLeadsAssignment
    listCrmLeadsAssignments(tenantId: String!, limit: Int): [CrmLeadsAssignment!]!
  }

  extend type Mutation {
    createCrmLeadsAssignment(tenantId: String!, code: String!, name: String!): CrmLeadsAssignment!
    deleteCrmLeadsAssignment(id: ID!): Boolean!
  }
`;

export const CrmLeadsAssignmentGqlResolvers = {
  Query: {
    getCrmLeadsAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmLeadsAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
