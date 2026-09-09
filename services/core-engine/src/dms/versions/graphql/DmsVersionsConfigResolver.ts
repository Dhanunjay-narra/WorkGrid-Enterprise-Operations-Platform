export const DmsVersionsConfigGqlTypeDefs = `
  type DmsVersionsConfig {
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
    getDmsVersionsConfig(id: ID!): DmsVersionsConfig
    listDmsVersionsConfigs(tenantId: String!, limit: Int): [DmsVersionsConfig!]!
  }

  extend type Mutation {
    createDmsVersionsConfig(tenantId: String!, code: String!, name: String!): DmsVersionsConfig!
    deleteDmsVersionsConfig(id: ID!): Boolean!
  }
`;

export const DmsVersionsConfigGqlResolvers = {
  Query: {
    getDmsVersionsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsVersionsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
