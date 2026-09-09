export const WorkflowRetriesScheduleGqlTypeDefs = `
  type WorkflowRetriesSchedule {
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
    getWorkflowRetriesSchedule(id: ID!): WorkflowRetriesSchedule
    listWorkflowRetriesSchedules(tenantId: String!, limit: Int): [WorkflowRetriesSchedule!]!
  }

  extend type Mutation {
    createWorkflowRetriesSchedule(tenantId: String!, code: String!, name: String!): WorkflowRetriesSchedule!
    deleteWorkflowRetriesSchedule(id: ID!): Boolean!
  }
`;

export const WorkflowRetriesScheduleGqlResolvers = {
  Query: {
    getWorkflowRetriesSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowRetriesSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
