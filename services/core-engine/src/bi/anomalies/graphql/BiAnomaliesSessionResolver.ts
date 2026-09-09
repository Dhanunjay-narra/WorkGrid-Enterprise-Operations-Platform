export const BiAnomaliesSessionGqlTypeDefs = `
  type BiAnomaliesSession {
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
    getBiAnomaliesSession(id: ID!): BiAnomaliesSession
    listBiAnomaliesSessions(tenantId: String!, limit: Int): [BiAnomaliesSession!]!
  }

  extend type Mutation {
    createBiAnomaliesSession(tenantId: String!, code: String!, name: String!): BiAnomaliesSession!
    deleteBiAnomaliesSession(id: ID!): Boolean!
  }
`;

export const BiAnomaliesSessionGqlResolvers = {
  Query: {
    getBiAnomaliesSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiAnomaliesSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
