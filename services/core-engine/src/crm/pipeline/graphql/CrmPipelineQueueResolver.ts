export const CrmPipelineQueueGqlTypeDefs = `
  type CrmPipelineQueue {
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
    getCrmPipelineQueue(id: ID!): CrmPipelineQueue
    listCrmPipelineQueues(tenantId: String!, limit: Int): [CrmPipelineQueue!]!
  }

  extend type Mutation {
    createCrmPipelineQueue(tenantId: String!, code: String!, name: String!): CrmPipelineQueue!
    deleteCrmPipelineQueue(id: ID!): Boolean!
  }
`;

export const CrmPipelineQueueGqlResolvers = {
  Query: {
    getCrmPipelineQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmPipelineQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
