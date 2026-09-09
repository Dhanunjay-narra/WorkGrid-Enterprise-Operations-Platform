export const ObsDashboardsMappingGqlTypeDefs = `
  type ObsDashboardsMapping {
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
    getObsDashboardsMapping(id: ID!): ObsDashboardsMapping
    listObsDashboardsMappings(tenantId: String!, limit: Int): [ObsDashboardsMapping!]!
  }

  extend type Mutation {
    createObsDashboardsMapping(tenantId: String!, code: String!, name: String!): ObsDashboardsMapping!
    deleteObsDashboardsMapping(id: ID!): Boolean!
  }
`;

export const ObsDashboardsMappingGqlResolvers = {
  Query: {
    getObsDashboardsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsDashboardsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
