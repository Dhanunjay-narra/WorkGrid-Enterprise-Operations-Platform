export const HrEmployeesQueueGqlTypeDefs = `
  type HrEmployeesQueue {
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
    getHrEmployeesQueue(id: ID!): HrEmployeesQueue
    listHrEmployeesQueues(tenantId: String!, limit: Int): [HrEmployeesQueue!]!
  }

  extend type Mutation {
    createHrEmployeesQueue(tenantId: String!, code: String!, name: String!): HrEmployeesQueue!
    deleteHrEmployeesQueue(id: ID!): Boolean!
  }
`;

export const HrEmployeesQueueGqlResolvers = {
  Query: {
    getHrEmployeesQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrEmployeesQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
