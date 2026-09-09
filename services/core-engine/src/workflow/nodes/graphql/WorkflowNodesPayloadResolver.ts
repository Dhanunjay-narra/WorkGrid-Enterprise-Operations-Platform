export const WorkflowNodesPayloadGqlTypeDefs = `
  type WorkflowNodesPayload {
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
    getWorkflowNodesPayload(id: ID!): WorkflowNodesPayload
    listWorkflowNodesPayloads(tenantId: String!, limit: Int): [WorkflowNodesPayload!]!
  }

  extend type Mutation {
    createWorkflowNodesPayload(tenantId: String!, code: String!, name: String!): WorkflowNodesPayload!
    deleteWorkflowNodesPayload(id: ID!): Boolean!
  }
`;

export const WorkflowNodesPayloadGqlResolvers = {
  Query: {
    getWorkflowNodesPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowNodesPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
