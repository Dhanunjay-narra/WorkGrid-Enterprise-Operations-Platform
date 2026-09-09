export const IntSalesforceProfileGqlTypeDefs = `
  type IntSalesforceProfile {
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
    getIntSalesforceProfile(id: ID!): IntSalesforceProfile
    listIntSalesforceProfiles(tenantId: String!, limit: Int): [IntSalesforceProfile!]!
  }

  extend type Mutation {
    createIntSalesforceProfile(tenantId: String!, code: String!, name: String!): IntSalesforceProfile!
    deleteIntSalesforceProfile(id: ID!): Boolean!
  }
`;

export const IntSalesforceProfileGqlResolvers = {
  Query: {
    getIntSalesforceProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSalesforceProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
