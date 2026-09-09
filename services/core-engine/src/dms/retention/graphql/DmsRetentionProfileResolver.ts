export const DmsRetentionProfileGqlTypeDefs = `
  type DmsRetentionProfile {
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
    getDmsRetentionProfile(id: ID!): DmsRetentionProfile
    listDmsRetentionProfiles(tenantId: String!, limit: Int): [DmsRetentionProfile!]!
  }

  extend type Mutation {
    createDmsRetentionProfile(tenantId: String!, code: String!, name: String!): DmsRetentionProfile!
    deleteDmsRetentionProfile(id: ID!): Boolean!
  }
`;

export const DmsRetentionProfileGqlResolvers = {
  Query: {
    getDmsRetentionProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsRetentionProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
