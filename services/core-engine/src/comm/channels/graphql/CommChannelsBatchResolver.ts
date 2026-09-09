export const CommChannelsBatchGqlTypeDefs = `
  type CommChannelsBatch {
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
    getCommChannelsBatch(id: ID!): CommChannelsBatch
    listCommChannelsBatchs(tenantId: String!, limit: Int): [CommChannelsBatch!]!
  }

  extend type Mutation {
    createCommChannelsBatch(tenantId: String!, code: String!, name: String!): CommChannelsBatch!
    deleteCommChannelsBatch(id: ID!): Boolean!
  }
`;

export const CommChannelsBatchGqlResolvers = {
  Query: {
    getCommChannelsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommChannelsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
