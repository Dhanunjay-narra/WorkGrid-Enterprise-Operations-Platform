export const BiWidgetsEventGqlTypeDefs = `
  type BiWidgetsEvent {
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
    getBiWidgetsEvent(id: ID!): BiWidgetsEvent
    listBiWidgetsEvents(tenantId: String!, limit: Int): [BiWidgetsEvent!]!
  }

  extend type Mutation {
    createBiWidgetsEvent(tenantId: String!, code: String!, name: String!): BiWidgetsEvent!
    deleteBiWidgetsEvent(id: ID!): Boolean!
  }
`;

export const BiWidgetsEventGqlResolvers = {
  Query: {
    getBiWidgetsEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiWidgetsEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
