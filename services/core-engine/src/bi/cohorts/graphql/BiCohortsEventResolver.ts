export const BiCohortsEventGqlTypeDefs = `
  type BiCohortsEvent {
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
    getBiCohortsEvent(id: ID!): BiCohortsEvent
    listBiCohortsEvents(tenantId: String!, limit: Int): [BiCohortsEvent!]!
  }

  extend type Mutation {
    createBiCohortsEvent(tenantId: String!, code: String!, name: String!): BiCohortsEvent!
    deleteBiCohortsEvent(id: ID!): Boolean!
  }
`;

export const BiCohortsEventGqlResolvers = {
  Query: {
    getBiCohortsEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiCohortsEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
