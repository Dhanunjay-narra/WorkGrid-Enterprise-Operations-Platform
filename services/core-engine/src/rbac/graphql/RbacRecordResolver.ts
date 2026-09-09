export const RbacRecordGqlTypeDefs = `
  type RbacRecord {
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
    getRbacRecord(id: ID!): RbacRecord
    listRbacRecords(tenantId: String!, limit: Int): [RbacRecord!]!
  }

  extend type Mutation {
    createRbacRecord(tenantId: String!, code: String!, name: String!): RbacRecord!
    deleteRbacRecord(id: ID!): Boolean!
  }
`;

export const RbacRecordGqlResolvers = {
  Query: {
    getRbacRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "RbacRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
