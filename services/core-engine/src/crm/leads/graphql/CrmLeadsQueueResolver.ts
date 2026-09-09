export const CrmLeadsQueueGqlTypeDefs = `
  type CrmLeadsQueue {
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
    getCrmLeadsQueue(id: ID!): CrmLeadsQueue
    listCrmLeadsQueues(tenantId: String!, limit: Int): [CrmLeadsQueue!]!
  }

  extend type Mutation {
    createCrmLeadsQueue(tenantId: String!, code: String!, name: String!): CrmLeadsQueue!
    deleteCrmLeadsQueue(id: ID!): Boolean!
  }
`;

export const CrmLeadsQueueGqlResolvers = {
  Query: {
    getCrmLeadsQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmLeadsQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
