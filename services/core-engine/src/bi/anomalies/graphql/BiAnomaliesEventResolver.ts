export const BiAnomaliesEventGqlTypeDefs = `
  type BiAnomaliesEvent {
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
    getBiAnomaliesEvent(id: ID!): BiAnomaliesEvent
    listBiAnomaliesEvents(tenantId: String!, limit: Int): [BiAnomaliesEvent!]!
  }

  extend type Mutation {
    createBiAnomaliesEvent(tenantId: String!, code: String!, name: String!): BiAnomaliesEvent!
    deleteBiAnomaliesEvent(id: ID!): Boolean!
  }
`;

export const BiAnomaliesEventGqlResolvers = {
  Query: {
    getBiAnomaliesEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiAnomaliesEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
