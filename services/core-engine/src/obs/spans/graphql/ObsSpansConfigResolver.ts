export const ObsSpansConfigGqlTypeDefs = `
  type ObsSpansConfig {
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
    getObsSpansConfig(id: ID!): ObsSpansConfig
    listObsSpansConfigs(tenantId: String!, limit: Int): [ObsSpansConfig!]!
  }

  extend type Mutation {
    createObsSpansConfig(tenantId: String!, code: String!, name: String!): ObsSpansConfig!
    deleteObsSpansConfig(id: ID!): Boolean!
  }
`;

export const ObsSpansConfigGqlResolvers = {
  Query: {
    getObsSpansConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsSpansConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
