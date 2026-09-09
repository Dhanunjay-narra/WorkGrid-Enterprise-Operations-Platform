export const WorkflowRetriesMappingGqlTypeDefs = `
  type WorkflowRetriesMapping {
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
    getWorkflowRetriesMapping(id: ID!): WorkflowRetriesMapping
    listWorkflowRetriesMappings(tenantId: String!, limit: Int): [WorkflowRetriesMapping!]!
  }

  extend type Mutation {
    createWorkflowRetriesMapping(tenantId: String!, code: String!, name: String!): WorkflowRetriesMapping!
    deleteWorkflowRetriesMapping(id: ID!): Boolean!
  }
`;

export const WorkflowRetriesMappingGqlResolvers = {
  Query: {
    getWorkflowRetriesMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowRetriesMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
