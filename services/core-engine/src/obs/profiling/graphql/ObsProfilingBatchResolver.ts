export const ObsProfilingBatchGqlTypeDefs = `
  type ObsProfilingBatch {
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
    getObsProfilingBatch(id: ID!): ObsProfilingBatch
    listObsProfilingBatchs(tenantId: String!, limit: Int): [ObsProfilingBatch!]!
  }

  extend type Mutation {
    createObsProfilingBatch(tenantId: String!, code: String!, name: String!): ObsProfilingBatch!
    deleteObsProfilingBatch(id: ID!): Boolean!
  }
`;

export const ObsProfilingBatchGqlResolvers = {
  Query: {
    getObsProfilingBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProfilingBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
