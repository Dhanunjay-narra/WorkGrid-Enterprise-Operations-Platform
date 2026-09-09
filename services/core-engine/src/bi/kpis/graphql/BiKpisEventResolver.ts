export const BiKpisEventGqlTypeDefs = `
  type BiKpisEvent {
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
    getBiKpisEvent(id: ID!): BiKpisEvent
    listBiKpisEvents(tenantId: String!, limit: Int): [BiKpisEvent!]!
  }

  extend type Mutation {
    createBiKpisEvent(tenantId: String!, code: String!, name: String!): BiKpisEvent!
    deleteBiKpisEvent(id: ID!): Boolean!
  }
`;

export const BiKpisEventGqlResolvers = {
  Query: {
    getBiKpisEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiKpisEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
