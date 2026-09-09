export const IotTelemetryProfileGqlTypeDefs = `
  type IotTelemetryProfile {
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
    getIotTelemetryProfile(id: ID!): IotTelemetryProfile
    listIotTelemetryProfiles(tenantId: String!, limit: Int): [IotTelemetryProfile!]!
  }

  extend type Mutation {
    createIotTelemetryProfile(tenantId: String!, code: String!, name: String!): IotTelemetryProfile!
    deleteIotTelemetryProfile(id: ID!): Boolean!
  }
`;

export const IotTelemetryProfileGqlResolvers = {
  Query: {
    getIotTelemetryProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotTelemetryProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
