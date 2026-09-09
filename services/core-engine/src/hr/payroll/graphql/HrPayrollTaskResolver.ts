export const HrPayrollTaskGqlTypeDefs = `
  type HrPayrollTask {
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
    getHrPayrollTask(id: ID!): HrPayrollTask
    listHrPayrollTasks(tenantId: String!, limit: Int): [HrPayrollTask!]!
  }

  extend type Mutation {
    createHrPayrollTask(tenantId: String!, code: String!, name: String!): HrPayrollTask!
    deleteHrPayrollTask(id: ID!): Boolean!
  }
`;

export const HrPayrollTaskGqlResolvers = {
  Query: {
    getHrPayrollTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPayrollTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
