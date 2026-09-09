export const BiWidgetsSessionGqlTypeDefs = `
  type BiWidgetsSession {
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
    getBiWidgetsSession(id: ID!): BiWidgetsSession
    listBiWidgetsSessions(tenantId: String!, limit: Int): [BiWidgetsSession!]!
  }

  extend type Mutation {
    createBiWidgetsSession(tenantId: String!, code: String!, name: String!): BiWidgetsSession!
    deleteBiWidgetsSession(id: ID!): Boolean!
  }
`;

export const BiWidgetsSessionGqlResolvers = {
  Query: {
    getBiWidgetsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiWidgetsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
