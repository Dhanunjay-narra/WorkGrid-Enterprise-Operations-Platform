export const WorkflowApprovalsPayloadGqlTypeDefs = `
  type WorkflowApprovalsPayload {
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
    getWorkflowApprovalsPayload(id: ID!): WorkflowApprovalsPayload
    listWorkflowApprovalsPayloads(tenantId: String!, limit: Int): [WorkflowApprovalsPayload!]!
  }

  extend type Mutation {
    createWorkflowApprovalsPayload(tenantId: String!, code: String!, name: String!): WorkflowApprovalsPayload!
    deleteWorkflowApprovalsPayload(id: ID!): Boolean!
  }
`;

export const WorkflowApprovalsPayloadGqlResolvers = {
  Query: {
    getWorkflowApprovalsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowApprovalsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
