export const ObsLoggingBatchGqlTypeDefs = `
  type ObsLoggingBatch {
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
    getObsLoggingBatch(id: ID!): ObsLoggingBatch
    listObsLoggingBatchs(tenantId: String!, limit: Int): [ObsLoggingBatch!]!
  }

  extend type Mutation {
    createObsLoggingBatch(tenantId: String!, code: String!, name: String!): ObsLoggingBatch!
    deleteObsLoggingBatch(id: ID!): Boolean!
  }
`;

export const ObsLoggingBatchGqlResolvers = {
  Query: {
    getObsLoggingBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsLoggingBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
