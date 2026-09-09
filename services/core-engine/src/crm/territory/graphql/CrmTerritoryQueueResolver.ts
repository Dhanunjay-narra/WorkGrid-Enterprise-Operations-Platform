export const CrmTerritoryQueueGqlTypeDefs = `
  type CrmTerritoryQueue {
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
    getCrmTerritoryQueue(id: ID!): CrmTerritoryQueue
    listCrmTerritoryQueues(tenantId: String!, limit: Int): [CrmTerritoryQueue!]!
  }

  extend type Mutation {
    createCrmTerritoryQueue(tenantId: String!, code: String!, name: String!): CrmTerritoryQueue!
    deleteCrmTerritoryQueue(id: ID!): Boolean!
  }
`;

export const CrmTerritoryQueueGqlResolvers = {
  Query: {
    getCrmTerritoryQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmTerritoryQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
