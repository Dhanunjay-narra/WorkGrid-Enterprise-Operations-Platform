export const CommChannelsMappingGqlTypeDefs = `
  type CommChannelsMapping {
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
    getCommChannelsMapping(id: ID!): CommChannelsMapping
    listCommChannelsMappings(tenantId: String!, limit: Int): [CommChannelsMapping!]!
  }

  extend type Mutation {
    createCommChannelsMapping(tenantId: String!, code: String!, name: String!): CommChannelsMapping!
    deleteCommChannelsMapping(id: ID!): Boolean!
  }
`;

export const CommChannelsMappingGqlResolvers = {
  Query: {
    getCommChannelsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommChannelsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
