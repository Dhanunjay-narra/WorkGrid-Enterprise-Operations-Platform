export const ObsTracingThresholdGqlTypeDefs = `
  type ObsTracingThreshold {
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
    getObsTracingThreshold(id: ID!): ObsTracingThreshold
    listObsTracingThresholds(tenantId: String!, limit: Int): [ObsTracingThreshold!]!
  }

  extend type Mutation {
    createObsTracingThreshold(tenantId: String!, code: String!, name: String!): ObsTracingThreshold!
    deleteObsTracingThreshold(id: ID!): Boolean!
  }
`;

export const ObsTracingThresholdGqlResolvers = {
  Query: {
    getObsTracingThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsTracingThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
