export const BiQueriesSessionGqlTypeDefs = `
  type BiQueriesSession {
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
    getBiQueriesSession(id: ID!): BiQueriesSession
    listBiQueriesSessions(tenantId: String!, limit: Int): [BiQueriesSession!]!
  }

  extend type Mutation {
    createBiQueriesSession(tenantId: String!, code: String!, name: String!): BiQueriesSession!
    deleteBiQueriesSession(id: ID!): Boolean!
  }
`;

export const BiQueriesSessionGqlResolvers = {
  Query: {
    getBiQueriesSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiQueriesSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
