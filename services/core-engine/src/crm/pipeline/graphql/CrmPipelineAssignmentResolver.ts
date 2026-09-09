export const CrmPipelineAssignmentGqlTypeDefs = `
  type CrmPipelineAssignment {
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
    getCrmPipelineAssignment(id: ID!): CrmPipelineAssignment
    listCrmPipelineAssignments(tenantId: String!, limit: Int): [CrmPipelineAssignment!]!
  }

  extend type Mutation {
    createCrmPipelineAssignment(tenantId: String!, code: String!, name: String!): CrmPipelineAssignment!
    deleteCrmPipelineAssignment(id: ID!): Boolean!
  }
`;

export const CrmPipelineAssignmentGqlResolvers = {
  Query: {
    getCrmPipelineAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmPipelineAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
