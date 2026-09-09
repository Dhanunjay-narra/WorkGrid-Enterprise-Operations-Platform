export const CrmContactsQueueGqlTypeDefs = `
  type CrmContactsQueue {
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
    getCrmContactsQueue(id: ID!): CrmContactsQueue
    listCrmContactsQueues(tenantId: String!, limit: Int): [CrmContactsQueue!]!
  }

  extend type Mutation {
    createCrmContactsQueue(tenantId: String!, code: String!, name: String!): CrmContactsQueue!
    deleteCrmContactsQueue(id: ID!): Boolean!
  }
`;

export const CrmContactsQueueGqlResolvers = {
  Query: {
    getCrmContactsQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmContactsQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
