export const BiCohortsSessionGqlTypeDefs = `
  type BiCohortsSession {
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
    getBiCohortsSession(id: ID!): BiCohortsSession
    listBiCohortsSessions(tenantId: String!, limit: Int): [BiCohortsSession!]!
  }

  extend type Mutation {
    createBiCohortsSession(tenantId: String!, code: String!, name: String!): BiCohortsSession!
    deleteBiCohortsSession(id: ID!): Boolean!
  }
`;

export const BiCohortsSessionGqlResolvers = {
  Query: {
    getBiCohortsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiCohortsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
