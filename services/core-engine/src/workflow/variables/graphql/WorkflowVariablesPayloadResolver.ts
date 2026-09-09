export const WorkflowVariablesPayloadGqlTypeDefs = `
  type WorkflowVariablesPayload {
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
    getWorkflowVariablesPayload(id: ID!): WorkflowVariablesPayload
    listWorkflowVariablesPayloads(tenantId: String!, limit: Int): [WorkflowVariablesPayload!]!
  }

  extend type Mutation {
    createWorkflowVariablesPayload(tenantId: String!, code: String!, name: String!): WorkflowVariablesPayload!
    deleteWorkflowVariablesPayload(id: ID!): Boolean!
  }
`;

export const WorkflowVariablesPayloadGqlResolvers = {
  Query: {
    getWorkflowVariablesPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowVariablesPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
