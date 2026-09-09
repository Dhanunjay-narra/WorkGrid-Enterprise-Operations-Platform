export const CommPresenceConfigGqlTypeDefs = `
  type CommPresenceConfig {
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
    getCommPresenceConfig(id: ID!): CommPresenceConfig
    listCommPresenceConfigs(tenantId: String!, limit: Int): [CommPresenceConfig!]!
  }

  extend type Mutation {
    createCommPresenceConfig(tenantId: String!, code: String!, name: String!): CommPresenceConfig!
    deleteCommPresenceConfig(id: ID!): Boolean!
  }
`;

export const CommPresenceConfigGqlResolvers = {
  Query: {
    getCommPresenceConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommPresenceConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
