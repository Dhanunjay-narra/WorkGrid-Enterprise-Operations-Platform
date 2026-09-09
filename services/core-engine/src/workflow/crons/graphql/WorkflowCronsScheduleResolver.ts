export const WorkflowCronsScheduleGqlTypeDefs = `
  type WorkflowCronsSchedule {
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
    getWorkflowCronsSchedule(id: ID!): WorkflowCronsSchedule
    listWorkflowCronsSchedules(tenantId: String!, limit: Int): [WorkflowCronsSchedule!]!
  }

  extend type Mutation {
    createWorkflowCronsSchedule(tenantId: String!, code: String!, name: String!): WorkflowCronsSchedule!
    deleteWorkflowCronsSchedule(id: ID!): Boolean!
  }
`;

export const WorkflowCronsScheduleGqlResolvers = {
  Query: {
    getWorkflowCronsSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowCronsSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
