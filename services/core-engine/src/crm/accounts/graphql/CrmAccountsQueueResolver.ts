export const CrmAccountsQueueGqlTypeDefs = `
  type CrmAccountsQueue {
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
    getCrmAccountsQueue(id: ID!): CrmAccountsQueue
    listCrmAccountsQueues(tenantId: String!, limit: Int): [CrmAccountsQueue!]!
  }

  extend type Mutation {
    createCrmAccountsQueue(tenantId: String!, code: String!, name: String!): CrmAccountsQueue!
    deleteCrmAccountsQueue(id: ID!): Boolean!
  }
`;

export const CrmAccountsQueueGqlResolvers = {
  Query: {
    getCrmAccountsQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmAccountsQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
