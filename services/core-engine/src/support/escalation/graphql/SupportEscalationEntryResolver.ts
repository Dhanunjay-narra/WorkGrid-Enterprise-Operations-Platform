export const SupportEscalationEntryGqlTypeDefs = `
  type SupportEscalationEntry {
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
    getSupportEscalationEntry(id: ID!): SupportEscalationEntry
    listSupportEscalationEntrys(tenantId: String!, limit: Int): [SupportEscalationEntry!]!
  }

  extend type Mutation {
    createSupportEscalationEntry(tenantId: String!, code: String!, name: String!): SupportEscalationEntry!
    deleteSupportEscalationEntry(id: ID!): Boolean!
  }
`;

export const SupportEscalationEntryGqlResolvers = {
  Query: {
    getSupportEscalationEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportEscalationEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
