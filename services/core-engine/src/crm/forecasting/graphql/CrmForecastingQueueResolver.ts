export const CrmForecastingQueueGqlTypeDefs = `
  type CrmForecastingQueue {
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
    getCrmForecastingQueue(id: ID!): CrmForecastingQueue
    listCrmForecastingQueues(tenantId: String!, limit: Int): [CrmForecastingQueue!]!
  }

  extend type Mutation {
    createCrmForecastingQueue(tenantId: String!, code: String!, name: String!): CrmForecastingQueue!
    deleteCrmForecastingQueue(id: ID!): Boolean!
  }
`;

export const CrmForecastingQueueGqlResolvers = {
  Query: {
    getCrmForecastingQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmForecastingQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
