export const DmsRetentionPayloadGqlTypeDefs = `
  type DmsRetentionPayload {
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
    getDmsRetentionPayload(id: ID!): DmsRetentionPayload
    listDmsRetentionPayloads(tenantId: String!, limit: Int): [DmsRetentionPayload!]!
  }

  extend type Mutation {
    createDmsRetentionPayload(tenantId: String!, code: String!, name: String!): DmsRetentionPayload!
    deleteDmsRetentionPayload(id: ID!): Boolean!
  }
`;

export const DmsRetentionPayloadGqlResolvers = {
  Query: {
    getDmsRetentionPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsRetentionPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
