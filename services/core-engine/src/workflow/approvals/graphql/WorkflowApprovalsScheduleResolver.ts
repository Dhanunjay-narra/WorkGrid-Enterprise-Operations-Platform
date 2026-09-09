export const WorkflowApprovalsScheduleGqlTypeDefs = `
  type WorkflowApprovalsSchedule {
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
    getWorkflowApprovalsSchedule(id: ID!): WorkflowApprovalsSchedule
    listWorkflowApprovalsSchedules(tenantId: String!, limit: Int): [WorkflowApprovalsSchedule!]!
  }

  extend type Mutation {
    createWorkflowApprovalsSchedule(tenantId: String!, code: String!, name: String!): WorkflowApprovalsSchedule!
    deleteWorkflowApprovalsSchedule(id: ID!): Boolean!
  }
`;

export const WorkflowApprovalsScheduleGqlResolvers = {
  Query: {
    getWorkflowApprovalsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowApprovalsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
