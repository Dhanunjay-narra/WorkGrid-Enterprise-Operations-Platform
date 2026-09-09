export const ObsAlertsMappingGqlTypeDefs = `
  type ObsAlertsMapping {
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
    getObsAlertsMapping(id: ID!): ObsAlertsMapping
    listObsAlertsMappings(tenantId: String!, limit: Int): [ObsAlertsMapping!]!
  }

  extend type Mutation {
    createObsAlertsMapping(tenantId: String!, code: String!, name: String!): ObsAlertsMapping!
    deleteObsAlertsMapping(id: ID!): Boolean!
  }
`;

export const ObsAlertsMappingGqlResolvers = {
  Query: {
    getObsAlertsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsAlertsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
