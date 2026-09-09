export const RbacConfigGqlTypeDefs = `
  type RbacConfig {
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
    getRbacConfig(id: ID!): RbacConfig
    listRbacConfigs(tenantId: String!, limit: Int): [RbacConfig!]!
  }

  extend type Mutation {
    createRbacConfig(tenantId: String!, code: String!, name: String!): RbacConfig!
    deleteRbacConfig(id: ID!): Boolean!
  }
`;

export const RbacConfigGqlResolvers = {
  Query: {
    getRbacConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "RbacConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
