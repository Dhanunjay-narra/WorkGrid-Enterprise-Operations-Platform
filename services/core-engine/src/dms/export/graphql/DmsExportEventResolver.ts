export const DmsExportEventGqlTypeDefs = `
  type DmsExportEvent {
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
    getDmsExportEvent(id: ID!): DmsExportEvent
    listDmsExportEvents(tenantId: String!, limit: Int): [DmsExportEvent!]!
  }

  extend type Mutation {
    createDmsExportEvent(tenantId: String!, code: String!, name: String!): DmsExportEvent!
    deleteDmsExportEvent(id: ID!): Boolean!
  }
`;

export const DmsExportEventGqlResolvers = {
  Query: {
    getDmsExportEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsExportEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
