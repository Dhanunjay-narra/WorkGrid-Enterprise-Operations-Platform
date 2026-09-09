export const WorkflowApprovalsSessionGqlTypeDefs = `
  type WorkflowApprovalsSession {
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
    getWorkflowApprovalsSession(id: ID!): WorkflowApprovalsSession
    listWorkflowApprovalsSessions(tenantId: String!, limit: Int): [WorkflowApprovalsSession!]!
  }

  extend type Mutation {
    createWorkflowApprovalsSession(tenantId: String!, code: String!, name: String!): WorkflowApprovalsSession!
    deleteWorkflowApprovalsSession(id: ID!): Boolean!
  }
`;

export const WorkflowApprovalsSessionGqlResolvers = {
  Query: {
    getWorkflowApprovalsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowApprovalsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
