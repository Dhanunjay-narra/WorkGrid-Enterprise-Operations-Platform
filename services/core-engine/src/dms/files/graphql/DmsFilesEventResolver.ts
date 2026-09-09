export const DmsFilesEventGqlTypeDefs = `
  type DmsFilesEvent {
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
    getDmsFilesEvent(id: ID!): DmsFilesEvent
    listDmsFilesEvents(tenantId: String!, limit: Int): [DmsFilesEvent!]!
  }

  extend type Mutation {
    createDmsFilesEvent(tenantId: String!, code: String!, name: String!): DmsFilesEvent!
    deleteDmsFilesEvent(id: ID!): Boolean!
  }
`;

export const DmsFilesEventGqlResolvers = {
  Query: {
    getDmsFilesEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFilesEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
