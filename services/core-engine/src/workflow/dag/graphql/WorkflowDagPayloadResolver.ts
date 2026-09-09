export const WorkflowDagPayloadGqlTypeDefs = `
  type WorkflowDagPayload {
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
    getWorkflowDagPayload(id: ID!): WorkflowDagPayload
    listWorkflowDagPayloads(tenantId: String!, limit: Int): [WorkflowDagPayload!]!
  }

  extend type Mutation {
    createWorkflowDagPayload(tenantId: String!, code: String!, name: String!): WorkflowDagPayload!
    deleteWorkflowDagPayload(id: ID!): Boolean!
  }
`;

export const WorkflowDagPayloadGqlResolvers = {
  Query: {
    getWorkflowDagPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowDagPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
