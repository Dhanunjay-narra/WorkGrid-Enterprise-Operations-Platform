export const ObsSpansPolicyGqlTypeDefs = `
  type ObsSpansPolicy {
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
    getObsSpansPolicy(id: ID!): ObsSpansPolicy
    listObsSpansPolicys(tenantId: String!, limit: Int): [ObsSpansPolicy!]!
  }

  extend type Mutation {
    createObsSpansPolicy(tenantId: String!, code: String!, name: String!): ObsSpansPolicy!
    deleteObsSpansPolicy(id: ID!): Boolean!
  }
`;

export const ObsSpansPolicyGqlResolvers = {
  Query: {
    getObsSpansPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsSpansPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
