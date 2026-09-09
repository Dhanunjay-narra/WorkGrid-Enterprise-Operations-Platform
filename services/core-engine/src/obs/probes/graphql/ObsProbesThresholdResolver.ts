export const ObsProbesThresholdGqlTypeDefs = `
  type ObsProbesThreshold {
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
    getObsProbesThreshold(id: ID!): ObsProbesThreshold
    listObsProbesThresholds(tenantId: String!, limit: Int): [ObsProbesThreshold!]!
  }

  extend type Mutation {
    createObsProbesThreshold(tenantId: String!, code: String!, name: String!): ObsProbesThreshold!
    deleteObsProbesThreshold(id: ID!): Boolean!
  }
`;

export const ObsProbesThresholdGqlResolvers = {
  Query: {
    getObsProbesThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProbesThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
