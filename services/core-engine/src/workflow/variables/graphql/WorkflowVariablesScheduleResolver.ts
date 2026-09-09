export const WorkflowVariablesScheduleGqlTypeDefs = `
  type WorkflowVariablesSchedule {
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
    getWorkflowVariablesSchedule(id: ID!): WorkflowVariablesSchedule
    listWorkflowVariablesSchedules(tenantId: String!, limit: Int): [WorkflowVariablesSchedule!]!
  }

  extend type Mutation {
    createWorkflowVariablesSchedule(tenantId: String!, code: String!, name: String!): WorkflowVariablesSchedule!
    deleteWorkflowVariablesSchedule(id: ID!): Boolean!
  }
`;

export const WorkflowVariablesScheduleGqlResolvers = {
  Query: {
    getWorkflowVariablesSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowVariablesSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
