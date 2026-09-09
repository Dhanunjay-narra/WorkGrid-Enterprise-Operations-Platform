export const ObsSpansPayloadGqlTypeDefs = `
  type ObsSpansPayload {
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
    getObsSpansPayload(id: ID!): ObsSpansPayload
    listObsSpansPayloads(tenantId: String!, limit: Int): [ObsSpansPayload!]!
  }

  extend type Mutation {
    createObsSpansPayload(tenantId: String!, code: String!, name: String!): ObsSpansPayload!
    deleteObsSpansPayload(id: ID!): Boolean!
  }
`;

export const ObsSpansPayloadGqlResolvers = {
  Query: {
    getObsSpansPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsSpansPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
