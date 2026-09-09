export const ObsProbesQueueGqlTypeDefs = `
  type ObsProbesQueue {
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
    getObsProbesQueue(id: ID!): ObsProbesQueue
    listObsProbesQueues(tenantId: String!, limit: Int): [ObsProbesQueue!]!
  }

  extend type Mutation {
    createObsProbesQueue(tenantId: String!, code: String!, name: String!): ObsProbesQueue!
    deleteObsProbesQueue(id: ID!): Boolean!
  }
`;

export const ObsProbesQueueGqlResolvers = {
  Query: {
    getObsProbesQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProbesQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
