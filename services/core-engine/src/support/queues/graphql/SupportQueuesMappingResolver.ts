export const SupportQueuesMappingGqlTypeDefs = `
  type SupportQueuesMapping {
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
    getSupportQueuesMapping(id: ID!): SupportQueuesMapping
    listSupportQueuesMappings(tenantId: String!, limit: Int): [SupportQueuesMapping!]!
  }

  extend type Mutation {
    createSupportQueuesMapping(tenantId: String!, code: String!, name: String!): SupportQueuesMapping!
    deleteSupportQueuesMapping(id: ID!): Boolean!
  }
`;

export const SupportQueuesMappingGqlResolvers = {
  Query: {
    getSupportQueuesMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportQueuesMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
