export const ObsLoggingThresholdGqlTypeDefs = `
  type ObsLoggingThreshold {
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
    getObsLoggingThreshold(id: ID!): ObsLoggingThreshold
    listObsLoggingThresholds(tenantId: String!, limit: Int): [ObsLoggingThreshold!]!
  }

  extend type Mutation {
    createObsLoggingThreshold(tenantId: String!, code: String!, name: String!): ObsLoggingThreshold!
    deleteObsLoggingThreshold(id: ID!): Boolean!
  }
`;

export const ObsLoggingThresholdGqlResolvers = {
  Query: {
    getObsLoggingThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsLoggingThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
