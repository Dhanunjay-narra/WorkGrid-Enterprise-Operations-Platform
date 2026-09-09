export const AbacConfigGqlTypeDefs = `
  type AbacConfig {
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
    getAbacConfig(id: ID!): AbacConfig
    listAbacConfigs(tenantId: String!, limit: Int): [AbacConfig!]!
  }

  extend type Mutation {
    createAbacConfig(tenantId: String!, code: String!, name: String!): AbacConfig!
    deleteAbacConfig(id: ID!): Boolean!
  }
`;

export const AbacConfigGqlResolvers = {
  Query: {
    getAbacConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AbacConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
