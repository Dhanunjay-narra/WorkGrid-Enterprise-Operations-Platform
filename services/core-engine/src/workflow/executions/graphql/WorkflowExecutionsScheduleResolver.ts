export const WorkflowExecutionsScheduleGqlTypeDefs = `
  type WorkflowExecutionsSchedule {
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
    getWorkflowExecutionsSchedule(id: ID!): WorkflowExecutionsSchedule
    listWorkflowExecutionsSchedules(tenantId: String!, limit: Int): [WorkflowExecutionsSchedule!]!
  }

  extend type Mutation {
    createWorkflowExecutionsSchedule(tenantId: String!, code: String!, name: String!): WorkflowExecutionsSchedule!
    deleteWorkflowExecutionsSchedule(id: ID!): Boolean!
  }
`;

export const WorkflowExecutionsScheduleGqlResolvers = {
  Query: {
    getWorkflowExecutionsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowExecutionsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
