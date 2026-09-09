export const IntSyncThresholdGqlTypeDefs = `
  type IntSyncThreshold {
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
    getIntSyncThreshold(id: ID!): IntSyncThreshold
    listIntSyncThresholds(tenantId: String!, limit: Int): [IntSyncThreshold!]!
  }

  extend type Mutation {
    createIntSyncThreshold(tenantId: String!, code: String!, name: String!): IntSyncThreshold!
    deleteIntSyncThreshold(id: ID!): Boolean!
  }
`;

export const IntSyncThresholdGqlResolvers = {
  Query: {
    getIntSyncThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSyncThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
