export const WorkflowEdgesScheduleGqlTypeDefs = `
  type WorkflowEdgesSchedule {
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
    getWorkflowEdgesSchedule(id: ID!): WorkflowEdgesSchedule
    listWorkflowEdgesSchedules(tenantId: String!, limit: Int): [WorkflowEdgesSchedule!]!
  }

  extend type Mutation {
    createWorkflowEdgesSchedule(tenantId: String!, code: String!, name: String!): WorkflowEdgesSchedule!
    deleteWorkflowEdgesSchedule(id: ID!): Boolean!
  }
`;

export const WorkflowEdgesScheduleGqlResolvers = {
  Query: {
    getWorkflowEdgesSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowEdgesSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
