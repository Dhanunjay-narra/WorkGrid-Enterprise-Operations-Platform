export const CrmAccountsAssignmentGqlTypeDefs = `
  type CrmAccountsAssignment {
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
    getCrmAccountsAssignment(id: ID!): CrmAccountsAssignment
    listCrmAccountsAssignments(tenantId: String!, limit: Int): [CrmAccountsAssignment!]!
  }

  extend type Mutation {
    createCrmAccountsAssignment(tenantId: String!, code: String!, name: String!): CrmAccountsAssignment!
    deleteCrmAccountsAssignment(id: ID!): Boolean!
  }
`;

export const CrmAccountsAssignmentGqlResolvers = {
  Query: {
    getCrmAccountsAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmAccountsAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
