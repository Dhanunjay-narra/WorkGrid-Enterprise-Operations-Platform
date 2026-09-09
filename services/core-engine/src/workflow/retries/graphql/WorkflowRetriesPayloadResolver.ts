export const WorkflowRetriesPayloadGqlTypeDefs = `
  type WorkflowRetriesPayload {
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
    getWorkflowRetriesPayload(id: ID!): WorkflowRetriesPayload
    listWorkflowRetriesPayloads(tenantId: String!, limit: Int): [WorkflowRetriesPayload!]!
  }

  extend type Mutation {
    createWorkflowRetriesPayload(tenantId: String!, code: String!, name: String!): WorkflowRetriesPayload!
    deleteWorkflowRetriesPayload(id: ID!): Boolean!
  }
`;

export const WorkflowRetriesPayloadGqlResolvers = {
  Query: {
    getWorkflowRetriesPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowRetriesPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
