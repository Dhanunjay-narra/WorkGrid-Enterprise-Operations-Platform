export const HrEmployeesTaskGqlTypeDefs = `
  type HrEmployeesTask {
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
    getHrEmployeesTask(id: ID!): HrEmployeesTask
    listHrEmployeesTasks(tenantId: String!, limit: Int): [HrEmployeesTask!]!
  }

  extend type Mutation {
    createHrEmployeesTask(tenantId: String!, code: String!, name: String!): HrEmployeesTask!
    deleteHrEmployeesTask(id: ID!): Boolean!
  }
`;

export const HrEmployeesTaskGqlResolvers = {
  Query: {
    getHrEmployeesTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrEmployeesTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
