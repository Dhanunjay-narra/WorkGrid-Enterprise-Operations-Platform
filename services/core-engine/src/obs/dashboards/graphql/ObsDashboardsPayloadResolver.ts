export const ObsDashboardsPayloadGqlTypeDefs = `
  type ObsDashboardsPayload {
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
    getObsDashboardsPayload(id: ID!): ObsDashboardsPayload
    listObsDashboardsPayloads(tenantId: String!, limit: Int): [ObsDashboardsPayload!]!
  }

  extend type Mutation {
    createObsDashboardsPayload(tenantId: String!, code: String!, name: String!): ObsDashboardsPayload!
    deleteObsDashboardsPayload(id: ID!): Boolean!
  }
`;

export const ObsDashboardsPayloadGqlResolvers = {
  Query: {
    getObsDashboardsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsDashboardsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
