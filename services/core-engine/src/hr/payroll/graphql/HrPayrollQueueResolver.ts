export const HrPayrollQueueGqlTypeDefs = `
  type HrPayrollQueue {
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
    getHrPayrollQueue(id: ID!): HrPayrollQueue
    listHrPayrollQueues(tenantId: String!, limit: Int): [HrPayrollQueue!]!
  }

  extend type Mutation {
    createHrPayrollQueue(tenantId: String!, code: String!, name: String!): HrPayrollQueue!
    deleteHrPayrollQueue(id: ID!): Boolean!
  }
`;

export const HrPayrollQueueGqlResolvers = {
  Query: {
    getHrPayrollQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPayrollQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
