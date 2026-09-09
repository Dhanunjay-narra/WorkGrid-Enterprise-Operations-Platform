export const CommChannelsThresholdGqlTypeDefs = `
  type CommChannelsThreshold {
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
    getCommChannelsThreshold(id: ID!): CommChannelsThreshold
    listCommChannelsThresholds(tenantId: String!, limit: Int): [CommChannelsThreshold!]!
  }

  extend type Mutation {
    createCommChannelsThreshold(tenantId: String!, code: String!, name: String!): CommChannelsThreshold!
    deleteCommChannelsThreshold(id: ID!): Boolean!
  }
`;

export const CommChannelsThresholdGqlResolvers = {
  Query: {
    getCommChannelsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommChannelsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
