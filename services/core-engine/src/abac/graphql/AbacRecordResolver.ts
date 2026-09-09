export const AbacRecordGqlTypeDefs = `
  type AbacRecord {
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
    getAbacRecord(id: ID!): AbacRecord
    listAbacRecords(tenantId: String!, limit: Int): [AbacRecord!]!
  }

  extend type Mutation {
    createAbacRecord(tenantId: String!, code: String!, name: String!): AbacRecord!
    deleteAbacRecord(id: ID!): Boolean!
  }
`;

export const AbacRecordGqlResolvers = {
  Query: {
    getAbacRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AbacRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
