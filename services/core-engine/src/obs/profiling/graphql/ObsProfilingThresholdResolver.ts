export const ObsProfilingThresholdGqlTypeDefs = `
  type ObsProfilingThreshold {
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
    getObsProfilingThreshold(id: ID!): ObsProfilingThreshold
    listObsProfilingThresholds(tenantId: String!, limit: Int): [ObsProfilingThreshold!]!
  }

  extend type Mutation {
    createObsProfilingThreshold(tenantId: String!, code: String!, name: String!): ObsProfilingThreshold!
    deleteObsProfilingThreshold(id: ID!): Boolean!
  }
`;

export const ObsProfilingThresholdGqlResolvers = {
  Query: {
    getObsProfilingThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProfilingThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
