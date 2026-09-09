export const ComplianceEventGqlTypeDefs = `
  type ComplianceEvent {
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
    getComplianceEvent(id: ID!): ComplianceEvent
    listComplianceEvents(tenantId: String!, limit: Int): [ComplianceEvent!]!
  }

  extend type Mutation {
    createComplianceEvent(tenantId: String!, code: String!, name: String!): ComplianceEvent!
    deleteComplianceEvent(id: ID!): Boolean!
  }
`;

export const ComplianceEventGqlResolvers = {
  Query: {
    getComplianceEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ComplianceEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
