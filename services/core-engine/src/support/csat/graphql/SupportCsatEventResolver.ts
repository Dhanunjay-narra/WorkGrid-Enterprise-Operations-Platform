export const SupportCsatEventGqlTypeDefs = `
  type SupportCsatEvent {
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
    getSupportCsatEvent(id: ID!): SupportCsatEvent
    listSupportCsatEvents(tenantId: String!, limit: Int): [SupportCsatEvent!]!
  }

  extend type Mutation {
    createSupportCsatEvent(tenantId: String!, code: String!, name: String!): SupportCsatEvent!
    deleteSupportCsatEvent(id: ID!): Boolean!
  }
`;

export const SupportCsatEventGqlResolvers = {
  Query: {
    getSupportCsatEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportCsatEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
