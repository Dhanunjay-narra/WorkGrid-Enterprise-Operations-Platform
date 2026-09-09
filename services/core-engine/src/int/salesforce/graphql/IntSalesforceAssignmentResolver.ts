export const IntSalesforceAssignmentGqlTypeDefs = `
  type IntSalesforceAssignment {
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
    getIntSalesforceAssignment(id: ID!): IntSalesforceAssignment
    listIntSalesforceAssignments(tenantId: String!, limit: Int): [IntSalesforceAssignment!]!
  }

  extend type Mutation {
    createIntSalesforceAssignment(tenantId: String!, code: String!, name: String!): IntSalesforceAssignment!
    deleteIntSalesforceAssignment(id: ID!): Boolean!
  }
`;

export const IntSalesforceAssignmentGqlResolvers = {
  Query: {
    getIntSalesforceAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSalesforceAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
