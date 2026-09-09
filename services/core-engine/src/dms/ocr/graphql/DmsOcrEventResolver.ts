export const DmsOcrEventGqlTypeDefs = `
  type DmsOcrEvent {
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
    getDmsOcrEvent(id: ID!): DmsOcrEvent
    listDmsOcrEvents(tenantId: String!, limit: Int): [DmsOcrEvent!]!
  }

  extend type Mutation {
    createDmsOcrEvent(tenantId: String!, code: String!, name: String!): DmsOcrEvent!
    deleteDmsOcrEvent(id: ID!): Boolean!
  }
`;

export const DmsOcrEventGqlResolvers = {
  Query: {
    getDmsOcrEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsOcrEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
