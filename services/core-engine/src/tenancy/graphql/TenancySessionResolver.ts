export const TenancySessionGqlTypeDefs = `
  type TenancySession {
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
    getTenancySession(id: ID!): TenancySession
    listTenancySessions(tenantId: String!, limit: Int): [TenancySession!]!
  }

  extend type Mutation {
    createTenancySession(tenantId: String!, code: String!, name: String!): TenancySession!
    deleteTenancySession(id: ID!): Boolean!
  }
`;

export const TenancySessionGqlResolvers = {
  Query: {
    getTenancySession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "TenancySession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
