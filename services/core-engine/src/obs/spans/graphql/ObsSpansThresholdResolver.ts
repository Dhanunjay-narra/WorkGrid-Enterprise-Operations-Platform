export const ObsSpansThresholdGqlTypeDefs = `
  type ObsSpansThreshold {
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
    getObsSpansThreshold(id: ID!): ObsSpansThreshold
    listObsSpansThresholds(tenantId: String!, limit: Int): [ObsSpansThreshold!]!
  }

  extend type Mutation {
    createObsSpansThreshold(tenantId: String!, code: String!, name: String!): ObsSpansThreshold!
    deleteObsSpansThreshold(id: ID!): Boolean!
  }
`;

export const ObsSpansThresholdGqlResolvers = {
  Query: {
    getObsSpansThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsSpansThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
