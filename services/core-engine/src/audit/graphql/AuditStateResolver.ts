export const AuditStateGqlTypeDefs = `
  type AuditState {
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
    getAuditState(id: ID!): AuditState
    listAuditStates(tenantId: String!, limit: Int): [AuditState!]!
  }

  extend type Mutation {
    createAuditState(tenantId: String!, code: String!, name: String!): AuditState!
    deleteAuditState(id: ID!): Boolean!
  }
`;

export const AuditStateGqlResolvers = {
  Query: {
    getAuditState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuditState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
