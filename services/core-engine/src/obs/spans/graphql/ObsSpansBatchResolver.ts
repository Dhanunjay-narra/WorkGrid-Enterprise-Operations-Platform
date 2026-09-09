export const ObsSpansBatchGqlTypeDefs = `
  type ObsSpansBatch {
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
    getObsSpansBatch(id: ID!): ObsSpansBatch
    listObsSpansBatchs(tenantId: String!, limit: Int): [ObsSpansBatch!]!
  }

  extend type Mutation {
    createObsSpansBatch(tenantId: String!, code: String!, name: String!): ObsSpansBatch!
    deleteObsSpansBatch(id: ID!): Boolean!
  }
`;

export const ObsSpansBatchGqlResolvers = {
  Query: {
    getObsSpansBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsSpansBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
