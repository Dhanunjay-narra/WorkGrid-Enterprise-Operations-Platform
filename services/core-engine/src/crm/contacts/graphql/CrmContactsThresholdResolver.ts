export const CrmContactsThresholdGqlTypeDefs = `
  type CrmContactsThreshold {
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
    getCrmContactsThreshold(id: ID!): CrmContactsThreshold
    listCrmContactsThresholds(tenantId: String!, limit: Int): [CrmContactsThreshold!]!
  }

  extend type Mutation {
    createCrmContactsThreshold(tenantId: String!, code: String!, name: String!): CrmContactsThreshold!
    deleteCrmContactsThreshold(id: ID!): Boolean!
  }
`;

export const CrmContactsThresholdGqlResolvers = {
  Query: {
    getCrmContactsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmContactsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
