export const ComplianceScheduleGqlTypeDefs = `
  type ComplianceSchedule {
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
    getComplianceSchedule(id: ID!): ComplianceSchedule
    listComplianceSchedules(tenantId: String!, limit: Int): [ComplianceSchedule!]!
  }

  extend type Mutation {
    createComplianceSchedule(tenantId: String!, code: String!, name: String!): ComplianceSchedule!
    deleteComplianceSchedule(id: ID!): Boolean!
  }
`;

export const ComplianceScheduleGqlResolvers = {
  Query: {
    getComplianceSchedule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ComplianceSchedule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
