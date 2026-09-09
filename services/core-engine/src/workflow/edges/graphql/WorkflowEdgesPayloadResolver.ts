export const WorkflowEdgesPayloadGqlTypeDefs = `
  type WorkflowEdgesPayload {
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
    getWorkflowEdgesPayload(id: ID!): WorkflowEdgesPayload
    listWorkflowEdgesPayloads(tenantId: String!, limit: Int): [WorkflowEdgesPayload!]!
  }

  extend type Mutation {
    createWorkflowEdgesPayload(tenantId: String!, code: String!, name: String!): WorkflowEdgesPayload!
    deleteWorkflowEdgesPayload(id: ID!): Boolean!
  }
`;

export const WorkflowEdgesPayloadGqlResolvers = {
  Query: {
    getWorkflowEdgesPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowEdgesPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
