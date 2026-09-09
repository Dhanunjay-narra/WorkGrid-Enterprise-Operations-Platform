export const SecurityConfigGqlTypeDefs = `
  type SecurityConfig {
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
    getSecurityConfig(id: ID!): SecurityConfig
    listSecurityConfigs(tenantId: String!, limit: Int): [SecurityConfig!]!
  }

  extend type Mutation {
    createSecurityConfig(tenantId: String!, code: String!, name: String!): SecurityConfig!
    deleteSecurityConfig(id: ID!): Boolean!
  }
`;

export const SecurityConfigGqlResolvers = {
  Query: {
    getSecurityConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SecurityConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
