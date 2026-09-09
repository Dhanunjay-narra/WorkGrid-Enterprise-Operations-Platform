export const BiExportsSessionGqlTypeDefs = `
  type BiExportsSession {
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
    getBiExportsSession(id: ID!): BiExportsSession
    listBiExportsSessions(tenantId: String!, limit: Int): [BiExportsSession!]!
  }

  extend type Mutation {
    createBiExportsSession(tenantId: String!, code: String!, name: String!): BiExportsSession!
    deleteBiExportsSession(id: ID!): Boolean!
  }
`;

export const BiExportsSessionGqlResolvers = {
  Query: {
    getBiExportsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiExportsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
