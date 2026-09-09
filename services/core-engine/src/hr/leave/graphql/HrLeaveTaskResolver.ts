export const HrLeaveTaskGqlTypeDefs = `
  type HrLeaveTask {
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
    getHrLeaveTask(id: ID!): HrLeaveTask
    listHrLeaveTasks(tenantId: String!, limit: Int): [HrLeaveTask!]!
  }

  extend type Mutation {
    createHrLeaveTask(tenantId: String!, code: String!, name: String!): HrLeaveTask!
    deleteHrLeaveTask(id: ID!): Boolean!
  }
`;

export const HrLeaveTaskGqlResolvers = {
  Query: {
    getHrLeaveTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrLeaveTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
