export const WorkflowEdgesMappingGqlTypeDefs = `
  type WorkflowEdgesMapping {
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
    getWorkflowEdgesMapping(id: ID!): WorkflowEdgesMapping
    listWorkflowEdgesMappings(tenantId: String!, limit: Int): [WorkflowEdgesMapping!]!
  }

  extend type Mutation {
    createWorkflowEdgesMapping(tenantId: String!, code: String!, name: String!): WorkflowEdgesMapping!
    deleteWorkflowEdgesMapping(id: ID!): Boolean!
  }
`;

export const WorkflowEdgesMappingGqlResolvers = {
  Query: {
    getWorkflowEdgesMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowEdgesMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
