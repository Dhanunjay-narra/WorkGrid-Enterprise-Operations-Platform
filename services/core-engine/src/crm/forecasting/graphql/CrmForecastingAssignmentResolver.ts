export const CrmForecastingAssignmentGqlTypeDefs = `
  type CrmForecastingAssignment {
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
    getCrmForecastingAssignment(id: ID!): CrmForecastingAssignment
    listCrmForecastingAssignments(tenantId: String!, limit: Int): [CrmForecastingAssignment!]!
  }

  extend type Mutation {
    createCrmForecastingAssignment(tenantId: String!, code: String!, name: String!): CrmForecastingAssignment!
    deleteCrmForecastingAssignment(id: ID!): Boolean!
  }
`;

export const CrmForecastingAssignmentGqlResolvers = {
  Query: {
    getCrmForecastingAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmForecastingAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
