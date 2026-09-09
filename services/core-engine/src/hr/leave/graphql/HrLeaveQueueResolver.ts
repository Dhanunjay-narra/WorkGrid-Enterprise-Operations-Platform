export const HrLeaveQueueGqlTypeDefs = `
  type HrLeaveQueue {
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
    getHrLeaveQueue(id: ID!): HrLeaveQueue
    listHrLeaveQueues(tenantId: String!, limit: Int): [HrLeaveQueue!]!
  }

  extend type Mutation {
    createHrLeaveQueue(tenantId: String!, code: String!, name: String!): HrLeaveQueue!
    deleteHrLeaveQueue(id: ID!): Boolean!
  }
`;

export const HrLeaveQueueGqlResolvers = {
  Query: {
    getHrLeaveQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrLeaveQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
