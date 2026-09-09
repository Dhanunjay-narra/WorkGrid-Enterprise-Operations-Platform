export const WorkflowDagMappingGqlTypeDefs = `
  type WorkflowDagMapping {
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
    getWorkflowDagMapping(id: ID!): WorkflowDagMapping
    listWorkflowDagMappings(tenantId: String!, limit: Int): [WorkflowDagMapping!]!
  }

  extend type Mutation {
    createWorkflowDagMapping(tenantId: String!, code: String!, name: String!): WorkflowDagMapping!
    deleteWorkflowDagMapping(id: ID!): Boolean!
  }
`;

export const WorkflowDagMappingGqlResolvers = {
  Query: {
    getWorkflowDagMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowDagMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
