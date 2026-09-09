export const CommChannelsPolicyGqlTypeDefs = `
  type CommChannelsPolicy {
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
    getCommChannelsPolicy(id: ID!): CommChannelsPolicy
    listCommChannelsPolicys(tenantId: String!, limit: Int): [CommChannelsPolicy!]!
  }

  extend type Mutation {
    createCommChannelsPolicy(tenantId: String!, code: String!, name: String!): CommChannelsPolicy!
    deleteCommChannelsPolicy(id: ID!): Boolean!
  }
`;

export const CommChannelsPolicyGqlResolvers = {
  Query: {
    getCommChannelsPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommChannelsPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
