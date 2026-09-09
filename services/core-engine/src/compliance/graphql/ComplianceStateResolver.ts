export const ComplianceStateGqlTypeDefs = `
  type ComplianceState {
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
    getComplianceState(id: ID!): ComplianceState
    listComplianceStates(tenantId: String!, limit: Int): [ComplianceState!]!
  }

  extend type Mutation {
    createComplianceState(tenantId: String!, code: String!, name: String!): ComplianceState!
    deleteComplianceState(id: ID!): Boolean!
  }
`;

export const ComplianceStateGqlResolvers = {
  Query: {
    getComplianceState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ComplianceState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
