export const SupportAgentsRecordGqlTypeDefs = `
  type SupportAgentsRecord {
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
    getSupportAgentsRecord(id: ID!): SupportAgentsRecord
    listSupportAgentsRecords(tenantId: String!, limit: Int): [SupportAgentsRecord!]!
  }

  extend type Mutation {
    createSupportAgentsRecord(tenantId: String!, code: String!, name: String!): SupportAgentsRecord!
    deleteSupportAgentsRecord(id: ID!): Boolean!
  }
`;

export const SupportAgentsRecordGqlResolvers = {
  Query: {
    getSupportAgentsRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportAgentsRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
