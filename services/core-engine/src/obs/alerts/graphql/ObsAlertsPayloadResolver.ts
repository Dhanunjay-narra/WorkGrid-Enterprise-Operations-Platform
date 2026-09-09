export const ObsAlertsPayloadGqlTypeDefs = `
  type ObsAlertsPayload {
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
    getObsAlertsPayload(id: ID!): ObsAlertsPayload
    listObsAlertsPayloads(tenantId: String!, limit: Int): [ObsAlertsPayload!]!
  }

  extend type Mutation {
    createObsAlertsPayload(tenantId: String!, code: String!, name: String!): ObsAlertsPayload!
    deleteObsAlertsPayload(id: ID!): Boolean!
  }
`;

export const ObsAlertsPayloadGqlResolvers = {
  Query: {
    getObsAlertsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsAlertsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
