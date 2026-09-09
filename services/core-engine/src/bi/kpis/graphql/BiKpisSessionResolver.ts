export const BiKpisSessionGqlTypeDefs = `
  type BiKpisSession {
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
    getBiKpisSession(id: ID!): BiKpisSession
    listBiKpisSessions(tenantId: String!, limit: Int): [BiKpisSession!]!
  }

  extend type Mutation {
    createBiKpisSession(tenantId: String!, code: String!, name: String!): BiKpisSession!
    deleteBiKpisSession(id: ID!): Boolean!
  }
`;

export const BiKpisSessionGqlResolvers = {
  Query: {
    getBiKpisSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiKpisSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
