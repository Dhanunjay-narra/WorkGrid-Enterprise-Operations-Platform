export const WorkflowDagScheduleGqlTypeDefs = `
  type WorkflowDagSchedule {
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
    getWorkflowDagSchedule(id: ID!): WorkflowDagSchedule
    listWorkflowDagSchedules(tenantId: String!, limit: Int): [WorkflowDagSchedule!]!
  }

  extend type Mutation {
    createWorkflowDagSchedule(tenantId: String!, code: String!, name: String!): WorkflowDagSchedule!
    deleteWorkflowDagSchedule(id: ID!): Boolean!
  }
`;

export const WorkflowDagScheduleGqlResolvers = {
  Query: {
    getWorkflowDagSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowDagSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
