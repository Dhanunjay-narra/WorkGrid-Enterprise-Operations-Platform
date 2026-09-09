export const WorkflowNodesScheduleGqlTypeDefs = `
  type WorkflowNodesSchedule {
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
    getWorkflowNodesSchedule(id: ID!): WorkflowNodesSchedule
    listWorkflowNodesSchedules(tenantId: String!, limit: Int): [WorkflowNodesSchedule!]!
  }

  extend type Mutation {
    createWorkflowNodesSchedule(tenantId: String!, code: String!, name: String!): WorkflowNodesSchedule!
    deleteWorkflowNodesSchedule(id: ID!): Boolean!
  }
`;

export const WorkflowNodesScheduleGqlResolvers = {
  Query: {
    getWorkflowNodesSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowNodesSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
