export const ObsLoggingPayloadGqlTypeDefs = `
  type ObsLoggingPayload {
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
    getObsLoggingPayload(id: ID!): ObsLoggingPayload
    listObsLoggingPayloads(tenantId: String!, limit: Int): [ObsLoggingPayload!]!
  }

  extend type Mutation {
    createObsLoggingPayload(tenantId: String!, code: String!, name: String!): ObsLoggingPayload!
    deleteObsLoggingPayload(id: ID!): Boolean!
  }
`;

export const ObsLoggingPayloadGqlResolvers = {
  Query: {
    getObsLoggingPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsLoggingPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
