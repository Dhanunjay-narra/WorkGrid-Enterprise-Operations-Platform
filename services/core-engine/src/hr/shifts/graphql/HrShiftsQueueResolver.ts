export const HrShiftsQueueGqlTypeDefs = `
  type HrShiftsQueue {
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
    getHrShiftsQueue(id: ID!): HrShiftsQueue
    listHrShiftsQueues(tenantId: String!, limit: Int): [HrShiftsQueue!]!
  }

  extend type Mutation {
    createHrShiftsQueue(tenantId: String!, code: String!, name: String!): HrShiftsQueue!
    deleteHrShiftsQueue(id: ID!): Boolean!
  }
`;

export const HrShiftsQueueGqlResolvers = {
  Query: {
    getHrShiftsQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrShiftsQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
