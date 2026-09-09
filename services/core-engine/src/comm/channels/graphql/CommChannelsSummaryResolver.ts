export const CommChannelsSummaryGqlTypeDefs = `
  type CommChannelsSummary {
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
    getCommChannelsSummary(id: ID!): CommChannelsSummary
    listCommChannelsSummarys(tenantId: String!, limit: Int): [CommChannelsSummary!]!
  }

  extend type Mutation {
    createCommChannelsSummary(tenantId: String!, code: String!, name: String!): CommChannelsSummary!
    deleteCommChannelsSummary(id: ID!): Boolean!
  }
`;

export const CommChannelsSummaryGqlResolvers = {
  Query: {
    getCommChannelsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommChannelsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
