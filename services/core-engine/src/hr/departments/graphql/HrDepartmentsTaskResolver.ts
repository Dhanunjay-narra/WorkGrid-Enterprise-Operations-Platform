export const HrDepartmentsTaskGqlTypeDefs = `
  type HrDepartmentsTask {
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
    getHrDepartmentsTask(id: ID!): HrDepartmentsTask
    listHrDepartmentsTasks(tenantId: String!, limit: Int): [HrDepartmentsTask!]!
  }

  extend type Mutation {
    createHrDepartmentsTask(tenantId: String!, code: String!, name: String!): HrDepartmentsTask!
    deleteHrDepartmentsTask(id: ID!): Boolean!
  }
`;

export const HrDepartmentsTaskGqlResolvers = {
  Query: {
    getHrDepartmentsTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrDepartmentsTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
